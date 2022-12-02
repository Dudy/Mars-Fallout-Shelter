export function initCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    /*
    // background color
    ctx.fillStyle = "rgb(255, 64, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    */



    /*
    // background image
    var image = new Image();
    image.onload = function(){
        ctx.drawImage(image, 0, 0);
    }
    image.src = "http://127.0.0.1:5500/images/MarsSurfaceCut.webp";



    let x = 0;
    let y = 0;
    setInterval(() => {
        x += 10;
        y += 20;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(image, x, y);
        console.log(`(x, y) = (${x}, ${y})`);
    }, 1000);
*/





ctx.fillStyle = "green";
ctx.fillRect(0, 0, 10, 10);

}













/*

var canvas = null;
var ctx = null;
var assets = ['/media/img/gamedev/robowalk/robowalk00.png',
              '/media/img/gamedev/robowalk/robowalk01.png',
              '/media/img/gamedev/robowalk/robowalk02.png',
              '/media/img/gamedev/robowalk/robowalk03.png',
              '/media/img/gamedev/robowalk/robowalk04.png',
              '/media/img/gamedev/robowalk/robowalk05.png',
              '/media/img/gamedev/robowalk/robowalk06.png',
              '/media/img/gamedev/robowalk/robowalk07.png',
              '/media/img/gamedev/robowalk/robowalk08.png',
              '/media/img/gamedev/robowalk/robowalk09.png',
              '/media/img/gamedev/robowalk/robowalk10.png',
              '/media/img/gamedev/robowalk/robowalk11.png',
              '/media/img/gamedev/robowalk/robowalk12.png',
              '/media/img/gamedev/robowalk/robowalk13.png',
              '/media/img/gamedev/robowalk/robowalk14.png',
              '/media/img/gamedev/robowalk/robowalk15.png',
              '/media/img/gamedev/robowalk/robowalk16.png',
              '/media/img/gamedev/robowalk/robowalk17.png',
              '/media/img/gamedev/robowalk/robowalk18.png'
             ];
var frames = [];
var framecounter = 0;

var onImageLoad = function(){
    console.log("IMAGE!!!");
};

var setup = function() {
    body = document.getElementById('body');
    canvas = document.createElement('canvas');

    ctx = canvas.getContext('2d');
    
    canvas.width = 100;
    canvas.height = 100;

    body.appendChild(canvas);

    // Load each image URL from the assets array into the frames array 
    // in the correct order.
    // Afterwards, call setInterval to run at a framerate of 30 frames 
    // per second, calling the animate function each time.
    // YOUR CODE HERE
    
    for (var i = 0; i < assets.length; i++) {
        var image = new Image();
        image.onload = function() {
            frames[i] = image;
        }
        image.src = assets[i];
    }
    
    setIntervall(animate, 30);
};

var animate = function(){
    // Draw each frame in order, looping back around to the 
    // beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
  
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    //ctx.clearRect(0,0,canvas.width, canvas.height);
  
    // YOUR CODE HERE
    ctx.drawImage(frames[framecounter++], 0, 0);
};

// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();

*/