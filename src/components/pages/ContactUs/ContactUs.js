/**
 * Arquivo: src/components/pages/ContactUs/ContactUs.js
 * Data: 12/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'ContactUs.js'
 * Author: Glaucia Lemos
 */

import { spawn } from "child_process";
import fs from "fs";

export default {
  name: "app",
  data() {
    return {
      printing: false,
      textarea_field: ""
    };
  },
  methods: {
    PrintTextAreaContent: function() {
      const fileName = "out.txt";

      fs.writeFile(fileName, this.textarea_field, err => {
        if (err) {
          return alert("error writing file", err);
        }

        // Comando para listar somente o nome das impressoras:
        // lpstat -a | awk '{print $1}'
        const child = spawn("lpr", [
          "-P",
          "BK-C310-U-1",
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
