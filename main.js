/**
 * Arquivo: main.js
 * Data: 31/10/2018
 * Descrição: arquivo responsável por executar a aplicação Electron
 * Author: Glaucia Lemos
 */

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const $ = require("jquery");
const path = require("path");

if (process.env.NODE_ENV === "development") {
  require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
  });
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: "#000000",
    show: false,
    // TODO: incluir a path do ícone:
    icon: path.join(__dirname, "")
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  }

  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("active", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
