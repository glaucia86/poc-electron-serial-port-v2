/**
 * Arquivo: src/components/pages/Configuration/Configuration.js
 * Data: 12/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'Configuration.js'
 * Author: Glaucia Lemos
 */

import { spawn, exec } from "child_process";
import fs from "fs";
import storage from "electron-storage";

export default {
  name: "Configuration",
  data() {
    return {
      printing: false,
      textarea_field: "",
      printers: [],
      currentPrinter: ""
    };
  },
  mounted() {
    exec("lpstat -a | awk '{print $1}'", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      this.printers = stdout.split("\n");
      console.log(this.printers);

      this.getLocalSettings("currentConfig.json", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Printer....: ", data);
          if (data && data.printer) {
            this.currentPrinter = data.printer;
          }
        }
      });
    });
  },
  methods: {
    printTextAreaContent: function() {
      const fileName = "out.txt";

      fs.writeFile(fileName, this.textarea_field, err => {
        if (err) {
          return alert("error writing file", err);
        }

        const child = spawn("lpr", [
          "-P",
          `${this.currentPrinter}`,
          "-o landscape",
          "-o PageSize=w68h252",
          "-o CutOptions=ChainMarks",
          "-o page-left=3",
          "-o page-right=3",
          "-o page-top=5",
          "-o page-bottom=5",
          "out.txt"
        ]);
        child.stdout.on("end", data => {
          removeFile(fileName, () => {
            console.log("Successfully printed!");
          });
        });

        child.stdout.on("error", data => {
          removeFile(fileName, () => {
            console.log("err printing ", data);
          });
        });
      });

      const removeFile = (fileName, cb) => {
        fs.unlink(fileName, err => {
          cb();
        });
      };
    },

    settingsConfig() {
      const data = {
        printer: this.currentPrinter
      };

      storage
        .set("currentConfig", data)
        .then(() => {
          console.log(data);
        })
        .catch(err => {
          console.error(err);
        });
    },

    getLocalSettings(fileName, callBack) {
      storage.isPathExists(fileName, exists => {
        if (exists) {
          storage.get(fileName, (err, data) => {
            if (data) {
              callBack(null, data);
            } else {
              callBack(err, null);
            }
          });
        } else {
          storage.set(fileName, {}, err => {
            if (err) {
              callBack(err, null);
            } else {
              callBack(null, {});
            }
          });
        }
      });
    }
  }
};
