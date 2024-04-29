function setup(){
    video=createCapture(VIDEO);
    video.size(550,500)
    canvas=createCanvas(550,550);
    canvas.position(550,150);
    poseNet=ml5.poseNet(VIDEO,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    background("#e6e6fa")
    stroke("#f90093")
    fill("#f90093")
    text ("I am AZAN", nosex, nosey)
}
function modelLoaded(){
    console.log("Model Has Been Loaded")
}
function gotPoses(results){
if(results.length>0){
    console.log(results)
noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y
console.log("noseX "+noseX+"noseY"+noseY)
leftWristX=results[0].pose.leftWrist.x
rightWristX=results[0].pose.rightWrist.x
console.log("leftWristX "+leftWristX+"leftWristX"+leftWristX)
console.log("rightWristX "+rightWristX+"rightWristX"+rightWristX)
difference=floor(leftWristX-rightWristX)
console.log("difference"+difference)
}
}

