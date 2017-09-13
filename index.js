const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 400,
    height: 500,
  });
  win.loadURL(`http://localhost:3000`);
  win.webContents.openDevTools();
    win.on('closed', function () {
    win = null;
  });
});