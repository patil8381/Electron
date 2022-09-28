const { app, BrowserWindow, globalShortcut, dialog, Menu } = require('electron');

let win;

// const { read } = require('original-fs');

let isMac = process.platform == 'darwin' // this will check the mac user 
let template = [
    {
        label: 'A', submenu: [...isMac ? { label: 'B' } : [],/**this isMac will be only visible to mac user  ... is for oly one label or paticular label  */
        { label: 'c' }
        ]
    }
    ,
    { label: 'B' },
    {
        label: 'C', submenu: [
            isMac ? { role: 'close', label: 'Close' } : { role: 'quit', label: 'Close' },
            { label: 'c' },
        ]
    }
]
let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);


function createWindow() {
    let mainWindowState = windowStateKeeper({
        //width: 600,
        // height: 300,
        defaultHeight: 800,
        defaultWidth: 300,
        
    })

    ParentwWin = new BrowserWindow({
        width: 100,
        height: 100,
        backgroundColor: "#E1FFEE",
        alwaysOnTop: true,
        // resizable: false,
        title: "ParentwWin ",
        // frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    /** this child window and parent window will open two window */
    childWin = new BrowserWindow({ 
        width: 200,
        height: 200,
        backgroundColor: "#EEE3CB",
        // alwaysOnTop: true,
        // resizable: false,
        title: "childWin  ",
        // frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    }) 
    win.loadFile("index.html")
    mainWindowState.manage(win)
     
}
 
app.on('ready', function () {
    createWindow();
    console.warn("function call hogya");
})
 