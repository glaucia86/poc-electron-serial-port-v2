/**
 * Arquivo: src/js/configuration.js
 * Data: 22/11/2018
 * Descrição: arquivo responsável por executar a biblioteca 'electron-json-storage'
 * a fim de retornar e guardar as configurações da aplicação.
 * Author: Glaucia Lemos
 */

const storage = require("electron-storage");

var data = {
  name: "Glaucia",
  age: 32,
  gender: "Female",
  department: "Engineering"
};

storage
  .set("../config/settings.json", data)
  .then(() => {
    storage.isPathExists("../config/settings.json", exists => {
      if (exists) {
        console.log("A path Existe!", exists);
      }
    });
    storage.get("../config/settings.json", (err, data) => {
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
