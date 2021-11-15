song="";
song_2="";

leftwristx="";
leftwristy="";

rightwristx="";
rightwristy="";

function preload(){
    song=loadSound("Recording (7).mp3");
    song_2=loadSound("Recording (8).mp3");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(525,190); 
    capture = createCapture(VIDEO);
    capture.hide();

    
    poseNet=ml5.poseNet(capture,modelLoded);
    poseNet.on('pose',gotPoses);
}
function modelLoded(){
    console.log("model loded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristy = results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(capture,0,0,500,500);

    if(leftwristy > 0){
        song.play();
    }
    else if(rightwristy > 0){
        song_2.play();
    }
}