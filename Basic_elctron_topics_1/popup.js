const { app, BrowserWindow, ipcMain } = require('electron');

let window;

const { dialog } = require('electron');

const log = require('electron-log');

ipcMain.on('popup', (event, arg) => {
    console.log(arg);
    // arg;
    // event.reply('back-msg', 'pong')
})

function createWindow() {
    window = new BrowserWindow({ width: 300, height: 400, backgroundColor: "#967E76" });
    window.loadURL('https://github.com');
    window.loadFile("page.html");
    log.info('Hello, log');
    log.warn('Some problem appears');
    // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))

    dialog.showMessageBox("message","harman is good compnay ");
    
    // const options = {
    //     type: 'question',
    //     buttons: ['Cancel', 'Yes, please', 'No, thanks'],
    //     // defaultId: 2,
    //     title: 'Question',
    //     message: 'Do you want to do this?',
    //     detail: 'It does not really matter',
    //     checkboxLabel: 'Remember my answer',

    //     // checkboxChecked: true,
    // };

    // dialog.showMessageBox(null, options, (response, checkboxChecked) => {
    //     console.log(response);
    //     console.log(checkboxChecked);
    // });

}
app.on('ready', () => { createWindow() });

