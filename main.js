var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ballWidth = 100;
var ballHeight = 90;
var backgroundImage ="aa.jpg";
var ballImg = "ball.png";
var wormImg = "Worm.png";
var poolImg = "pool.png";
var npcImg = "pikuniko.png";
var ballX = 400;
var ballY = 250;

function load(){
    background = new Image();
    background.onload=uploadBackground;
    background.src=backgroundImage;
    npc = new Image();
    npc.onload=uploadAll;
    npc.src=npcImg;
    ball = new Image();
    ball.onload=uploadAll;
    ball.src=ballImg;
    worm = new Image();
    worm.onload=uploadAll;
    worm.src=wormImg;
    pool = new Image();
    pool.onload=uploadAll;
    pool.src=poolImg;
    console.log(ballX, ballY);
    
}


function uploadBackground(){
    ctx.drawImage(background, 0, 0, canvas.width,  canvas.height);
}
function uploadAll(){
    ctx.drawImage(npc, 100, 100, 100, 90);
    ctx.drawImage(ball, ballX, ballY, ballWidth, ballHeight);
    console.log(ballX, ballY);
    ctx.drawImage(worm, 700, 200, 100, 90);
    ctx.drawImage(pool, 100, 150, 100, 90);
}


window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress==38){
        up();
    };
    if(keypress==40){
        down();
    };
    if(keypress==39){
        right();
    };
    if(keypress==37){
        left();
    };
}

function up(){
    if(ballY>=20){
        ballY=ballY-10;
        uploadBackground();
        uploadAll();
        verify()
    };
}
function down(){
    if(ballY<=400){
        ballY=ballY+10;
        uploadBackground();
        uploadAll();
        verify()
    }
}
function right(){
    if(ballX<=700){
        ballX=ballX+10;
        uploadBackground();
        uploadAll();
        verify();
    };
}
function left(){
    if(ballX>=20){
        ballX=ballX-10;
        uploadBackground();
        uploadAll();
        verify();
        
    }
}

function verify(){
    if(ballY>=20 && ballY<240 && ballX>=20 && ballX<=180){
        console.log("Congratulations!");
        document.getElementById("congratulations").innerHTML="Congratulations! you found your friend";
    }
}