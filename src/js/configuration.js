/**
 * Arquivo: src/js/configuration.js
 * Data: 22/11/2018
 * Descrição: arquivo responsável por executar a biblioteca 'electron-json-storage'
 * a fim de retornar e guardar as configurações da aplicação.
 * Author: Glaucia Lemos
 */

const storage = require("electron-storage");

storage
  .set("config/settings", { name: "casa-teste-1" })
  .then(() => {
    storage.get("config/settings", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    });
    console.log("O arquivo foi gravado com sucesso no Storage");
  })
  .catch(err => {
    console.error(err);
  });
