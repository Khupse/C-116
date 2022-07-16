noseX=0;
noseY=0;
function preload(){
    clown_nose = loadImage('https://media.istockphoto.com/vectors/red-ball-isolated-vector-illustration-vector-id1192834521?k=20&m=1192834521&s=612x612&w=0&h=cERuWfW0fcTLNw9dqta7L3l1UsS83ddaTPdTYRXfSqY=');
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
    }

     function gotPoses(results){
        if (results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
     }




    function modelLoaded(){
        console.log('PoseNet is Initialized');
    } 

    function draw(){
        image(video, 0,0,300,300);
        image(clown_nose, noseX, noseY, 30, 30);
    }


function take_snapshot(){
       save ('myFilterImage.png');
}



























