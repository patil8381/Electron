// console.log(window.electronAPI);

const { ipcRenderer, ipcMain } = require("electron");

let imageTag = document.getElementById("imageTag");

window.electronAPI.getImage((event,data)=>{
    // console.log(event,data);
    imageTag.src=data;
    window.electronAPI.closewindow2();
});

let open_camera = document.getElementById("open_camera");
   open_camera.addEventListener('click',()=>{ 
    window.electronAPI.open_camera()
})

let save = document.getElementById('save');
   save.addEventListener('click',()=>{
      window.electronAPI.save()
})

let dlt = document.getElementById("dlt")
dlt.addEventListener('click',()=> imageTag.src = "" )

let tabWindow = document.getElementById("tabWindow")
if (tabWindow) 
{
    tabWindow.addEventListener('click',()=> {  
        window.electronAPI.tabWindow()  
    } )
}

let popup = document.getElementById('popup');
popup.addEventListener('click',()=>{
      window.electronAPI.popup()
})

// let dlt = document.getElementById('dlt');
//    dlt.addEventListener('click',()=>{
//     imageTag.innerHTML = "imageTag";
//     imageTag.innerText="image";
// })
// let popup = document.getElementById('popup');
