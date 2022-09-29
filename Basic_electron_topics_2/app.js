
//  const electron = require("electron");
// const app = electron.app;

// app.on("ready", function () {
//   const mainWindow = new electron.BrowserWindow({
//     webPreferences: {
//       webviewTag: true
//     }
//   });
//   mainWindow.loadURL("file://" + __dirname + "/electron-tabs.html");
//   mainWindow.on("ready-to-show", function () {
//     mainWindow.show();
//     mainWindow.focus();
//   });
// });





let mainWindow;

const { app, BrowserWindow, ipcMain, dialog } = require("electron")
const path = require('path')
app.on('ready', function () {
    mainWindow = new BrowserWindow({
        webPreferences: {
            webviewTag: true,
            nodeIntegration:true,
            // preload: path.join(__dirname, "preload.js"),
            preload: path.join(__dirname, "/appPreload.js"),
        }
    });
    mainWindow.loadURL("file://" + __dirname + "/electron-tabs.html");
    
    
    ipcMain.on("popup",()=>{
        dialog.showErrorBox("error","demo of error");
        console.log("hello");
    });
    
    // mainWindow.loadFile("electron-tabs.html");
    mainWindow.openDevTools();
});

