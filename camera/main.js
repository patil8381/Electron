const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
let template = [{label:"File"},{ label: "Open Camera", submenu: [{ label: "open camera", click: () => { OpenCamera() } }] }, { label: "window", submenu: [{ label: "close" }, { label: "Exit", click: () => { app.quit() } }] },{label:"View"},{label:"About",click: () => { aboutWindow() }}]
var menu = Menu.buildFromTemplate(template);

let mainWindow;
let cameraWindow;

app.on('ready', () => { createWindow() });


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        // backgroundColor:"#C6EBC5",
        webPreferences: {
            contextIsolation: true,
            webviewTag: true,
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
        }
    })
    mainWindow.loadFile("index.html")
    // window.loadURL("C:\Users\shubpatil\C_Code\Electron\electron-app\open_camera\mainWindow.js");
    mainWindow.once('ready-to-show', () => { mainWindow.show() })
    Menu.setApplicationMenu(menu);
    mainWindow.on('closed', () => { app.quit() })
    mainWindow.webContents.openDevTools();

}


ipcMain.on("set-image", (event, data) => {      /**this main.js is taking data which is exposed to electronAPI and preload collects it and ipcMain collects from preload  */
    // console.log(data);
    mainWindow.webContents.send('get-image', data);
    // mainWindow.send('get-image',data);//this also works 
    ipcMain.on('save', (data) => {
        dialog.showSaveDialog(data);
    })
});


ipcMain.on('close-window-2', () => {
    cameraWindow.close();
})

ipcMain.on('open_camera', () => {
    OpenCamera();
})

ipcMain.on('tabWindow', () => {
    tabWindow();
})

ipcMain.on('popup', () => {
    popup();
})

function OpenCamera() {
    cameraWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        backgroundColor: "#C6EBC5",
        show: false,
        webPreferences: {
            contextIsolation: true,
            webviewTag: true,
            preload: path.join(__dirname, "cameraPreload.js"),
            nodeIntegration: true

        }
    })
    cameraWindow.webContents.openDevTools();
    // preload:Path.join(__dirname,"prel/oad.js"),
    cameraWindow.loadFile("camera.html");
    cameraWindow.once('ready-to-show', () => { cameraWindow.show() })

}

function aboutWindow() {
    dialog.showMessageBox("About",`app:"version": "1.0.0", "electron": ^20.1.2", "electron-builder": "^23.3.3", `)
    
}


function tabWindow() {
    tabWindow = new BrowserWindow({
        width: 900,
        height: 700,
        webPreferences: {
            contextIsolation: true,
            webviewTag: true,
            nodeIntegration: true
        }
    })
    tabWindow.loadFile("tabs.html");
    tabWindow.once('ready-to-show', () => { tabWindow.show() })
    tabWindow.webContents.openDevTools();
}

function popup() {
    const options = {
        type: 'question',
        buttons: ['Cancel', 'Yes, please', 'No, thanks'],
        // defaultId: 2,
        title: 'Question',
        message: 'Do you want to do this?',
        detail: 'It does not really matter',
        checkboxLabel: 'Remember my answer',
        // checkboxChecked: true,
    }

    dialog.showMessageBox(null, options, (response, checkboxChecked) => {
        console.log(response);
        console.log(checkboxChecked);
    });
}


