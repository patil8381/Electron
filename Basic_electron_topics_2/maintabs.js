const {app,BrowserWindow,ipcMain,dialog, globalShortcut,Menu} = require('electron')
const path = require('path');

// Setup file logging

const log = require('electron-log');
const { platform } = require('os');
// log.transports.file.level = 'info'
log.transports.file.resolvePath=()=> __dirname + '/logger.log'

/**electron-log supports the following log levels: error, warn, info, verbose, debug, silly */
// log.info('%cRed text. %cGreen text', 'color: red', 'color: green')

let template = [{label:"file",submenu:[{label:"open"},{label:"close",role:"close"}]} , {label:"view"},{label:'Help',submenu:[{label:'Help',role:'help'},{label:'About',}]}]
let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);



let win ;

function createWindow() {
    win = new BrowserWindow({ 
        width:500,
        height:500,
        // frame:false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            webviewTag:true,
            webSecurity:false,
            preload: path.join(__dirname, 'mainPreload.js'),
            contextIsolation:true,
            // or  path.join is only join the root file path and the preload.js 
            // preload: (__dirname + '/preload.js')
        }
    });
    log.info('window loaded');
    win.loadFile("index.html");
    // win2.loadFile("index.html");
    // log.info('index file loaded');
    win.webContents.openDevTools();
    log.info('devtools opened');

    
    
    ipcMain.on('popupbtn',()=>{
        // dialog.showErrorBox('Error Box','demo of err box');
        // log.info('dialog errorBox shown');
        // dialog.showOpenDialog();//this willl open a file explorer
        // log.info('show opwn dialog shown');
        

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

        // some other logs 
        // log.info('copied pop-up message box shown');
        // log.warn('Some other log.s ');
        // log.silly('silly');
        // log.verbose('verbose')
        // log.debug('debug')
        // log.error("no error")

        globalShortcut.register("shift+P",console.log("shift+p pressed")); // created shortcut 

    });
}
function childWindow() {
    const childWindow = new BrowserWindow({
        width:600,
        height:400,
        webPreferences:{
            nodeIntegration:true,
        },
    });
    childWindow.loadFile('page2.html');
}

ipcMain.on('cw',()=>{   childWindow();   })

app.whenReady().then(createWindow) 
// or app.on('ready',()=>{createWindow();});
log.info('app started');
// app.on('ready', () => { createWindow() });

app.on('window-all-closed',()=>{    if  ( process.platform !== 'darwin') app.quit();  })
//line 98 will close app when all windows closed
