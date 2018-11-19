/*
 * Arquivo: src/components/pages/Home/Home.js
 * Data: 12/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'Home.js'
 * Author: Glaucia Lemos
 */

export default {
  name: "Home",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    handlerChange: function() {
      const ipcPrint = require("electron").ipcRenderer;

      ipcPrint.send("print-to-pdf");

      ipcPrint.on("wrote-pdf", (evt, path) => {
        const message = `Wrote PDF to: ${path}`;
        this.message = message;
      });
    }
  }
};
