
const electron = require('electron');
// const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = require('electron');
//lets create variable to represent our main window
let mainWindow;
let addWindow;

//listen for the app to be ready
app.on('ready',function(){
//create main window
 mainWindow = new BrowserWindow({
    webPreferences: {
    contextIsolation: false,
    webviewTag: true,
    nodeIntegration: true
    }
});

mainWindow.loadFile("csmainWindow.html")
 //quit app when closed
 mainWindow.on('closed', function(){
app.quit();
});
//build menu from template

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

// insert menu

Menu.setApplicationMenu(mainMenu);

});
//handle create add window

function createAddWindow(){

//create main window

addWindow = new BrowserWindow({
    webPreferences: {
    contextIsolation: false,
    webviewTag: true,
    nodeIntegration: true
},
    width: 300,
    height: 200,
    title: 'Add Shopping List Item'

});

addWindow.loadFile("csaddWindow.html")

//lets load the html into the window

//     addWindow.loadURL(url.format({

//         pathname:path.join(__dirname,'addWindow.html'),

//         protocol:'file:',

//         slashes:true

//  }));

//garbage collection window

addWindow.on('close', function(){

   addWindow = null;

});



}



//catch item:add
ipcMain.on("item:add",(event, item)=>{
    addWindow.webContents.send("item:add", item);
}) 

ipcMain.on('item:add', function(e, item){

console.log(item);

  mainWindow.webContents.send('item:add', item);

//   addWindow.window.close();

});

ipcMain.on("hello",()=>{



    console.log("hello world")



});

const mainMenuTemplate = [

    {

        label: 'File',

        submenu:[

            {

                label: 'Add Item',

                click(){

                    createAddWindow();

                }

            },

            {

                label: 'Clear Items'

            },

            {

                label: 'Quit',

                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',

                click(){app.quit();

                }

            }

        ]

    }

];



// if mac, add empty object to menu

if(process.platform == 'darwin'){

    mainMenuTemplate.unshift({});

}



//add developer tools item if not in production

if(process.env.NODE_ENV !== 'production'){

    mainMenuTemplate.push({

      label: 'Developer Tools',

      submenu : [

        {

        label: 'Toggle DvTools',

        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',

        click(item, focusedWindow){

            focusedWindow.toggleDevTools();

        }

        },

        {

         role: 'reload'

        }

      ]

    });

}