/**
 * Arquivo: src/components/pages/ContactUs/ContactUs.js
 * Data: 12/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'ContactUs.js'
 * Author: Glaucia Lemos
 */

import { spawn, exec } from "child_process";
import fs from "fs";

export default {
  name: "app",
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
    });
  },
  methods: {
    PrintTextAreaContent: function() {
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
    }
  }
};
