const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;
let mainWindow;

let menuTemplate = [{
  label: 'MyApp',
  submenu: [
    { label: 'About', accelerator: 'Cmd+A', click: function () { aboutDialog(); } },
    { type: 'separator' },
    { label: 'Quit', accelerator: 'Cmd+Q', click: function () { app.quit(); } }
  ]
}];
let menu = Menu.buildFromTemplate(menuTemplate);

function aboutDialog() {
  dialog.showMessageBox({
    type: 'info',
    buttons: ['OK'],
    message: 'About This App',
    detail: 'This app was created by @amev'
  });
}


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