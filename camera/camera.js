const video = document.getElementById("camera");
// video.setAttribute()
const captureButton = document.getElementById("capture-image");
const ImageTag = document.getElementById("image");

captureButton.addEventListener("click",()=>{
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video,0,0,canvas.width,canvas.height);
    const dataURL = canvas.toDataURL();

    ImageTag.src=dataURL;
    // console.log(dataURL);


    window.electronAPI.sendImage(dataURL); /** it is sending the data from the camera.js camera.html when user clicks and 
    
    
    sends to the main.js by preload.js preloadjs is imported in main.js and connects to camera.js  */
    // new Notification("Good",{body:"COMPELTE THIS TOPIC IN HR. study next "})
})

// console.log(window.electronAPI);


navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{ video.srcObject = stream });
