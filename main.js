const { app, BrowserWindow} = require("electron");
let win;

function createWindow() {

  win= new BrowserWindow({
    width:600,
    height:600,
    backgroundColor: "#ffffff"
  });
  win.loadURL(`file://${__dirname}/index.html`);

}
