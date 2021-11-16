function preload(){
}

function setup(){

    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color='';
}

function draw(){

image(video,0,0,640,480);
tint(tint_color);
circle(120,367,30)
circle(500,300,40)
circle(300,255,200)
}

function take_snapshot(){

    save('weird_picture.png');

}

function filter_tint(){

    tint_color= document.getElementById('color_name').value;

}