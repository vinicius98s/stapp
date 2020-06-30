// @ts-nocheck
const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const url = require('url');
const serve = require('electron-serve');

let mainWindow;

const loadURL = serve({ directory: 'build' });

function createWindow() {
  mainWindow = new BrowserWindow({ width: 890, height: 680 });

  if (!process.env.ELECTRON_START_URL) {
    loadURL(mainWindow);
  } else {
    mainWindow.loadURL(process.env.ELECTRON_START_URL);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    createWindow();
  }
});
