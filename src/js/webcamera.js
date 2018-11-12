/**
 * Arquivo: src/js/webcam.js
 * Data: 12/11/2018
 * Descrição: arquivo responsável por executar a webcam no projeto.
 * Author: Glaucia Lemos
 */

const WebCamera = require("webcamjs");

let enabled = false;

document.getElementById("start").addEventListener(
  "click",
  function() {
    if (!enabled) {
      enabled = true;
      WebCamera.attach("#camdemo");
      console.log("Iniciando a webcam!");
    } else {
      enabled = false;
      WebCamera.reset();
      console.log("A webcam foi desativa!");
    }
  },
  false
);
