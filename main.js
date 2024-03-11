Webcam.set({
    width:350
    ,height:300
    ,image_format : "png",
    png_quality:90
});
noseX=0;
noseY=0;

    
function preload(){
mustache = loadImage("https://i.https://i.postimg.cc/Qt5hmMnC/th-216456772.jpg.cc/SNP9H2tx/Clown-Nose-Download-PNG-Image-1627522589.png");
}

function setup(){
    canvas = createCanvas(300,300);
canvas.center();
video = createCapure(VIDEO);
video.size(300,300);
video.hide();   

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
console.log('poseNet is Initalized');
}


    function draw() {
image(video,0,0,300,300);
image(mustache, noseX, noseY-3,30,30);    
}

function take_snapshot(){
    save("my_Filter_Image.png")}
    

function gotPoses(result)
{
if (result.length > 0)
{
console.log(results)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x=" + results[0].pose.nose.x);
console.log("nose y=" + results[0].pose.nose.y )
}
}




















    