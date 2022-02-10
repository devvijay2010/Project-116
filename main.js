noseX = 0;
noseY = 0;

function preload()
{
     mustache = loadImage("mustache.png")
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotresults);
}

function modelloaded()
{
    console.log("PoseNet Is Initialized");
}

function gotresults(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
    image(mustache ,noseX, noseY, 100, 40)
}

function take_snapshot()
{
    save("MyFilterImage.png");
}