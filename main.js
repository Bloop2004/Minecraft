var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var block_width = 20;
var  block_height = 20;
var player_object = "";
var block_object = "";
document.getElementById("blockWidth").innerHTML = block_width;
document.getElementById("blockHeight").innerHTML = block_height;
function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown" , Keydown);
function Keydown(e){
    keypress = e.keyCode;
    if(keypress == '84'){
       block_update("trunk.jpg");
       console.log("t");
    }
    if(keypress == '68'){
        block_update("dark_green.png");
        console.log("d");
    }
    if(keypress == '76'){
        block_update("light_green.png");
        console.log("l");
    }
    if(keypress == '71'){
        block_update("ground.png");
        console.log("g");
    }
    if(keypress == '87'){
        block_update("wall.jpg");
        console.log("w");
    }
    if(keypress == '89'){
        block_update("yellow_wall.png");
        console.log("y");
    }
    if(keypress == '82'){
        block_update("roof.jpg");
        console.log("r");
    }
    if(keypress == '67'){
        block_update("cloud.jpg");
        console.log("c");
    }
    if(keypress == '85'){
        block_update("unique.png");
        console.log("u");
    }
    if(keypress == '80' && e.shiftKey == true){
            block_width = block_width + 10;
            block_height = block_height+10;
            document.getElementById("blockHeight").innerHTML = block_height;
            document.getElementById("blockWidth").innerHTML = block_width;
    }
    if(keypress == '77' && e.shiftKey == true){
        block_width = block_width - 10;
        block_height = block_height-10;
        document.getElementById("blockHeight").innerHTML = block_height;
        document.getElementById("blockWidth").innerHTML = block_width;
}
if(keypress == '37'){
    left();
    console.log("left");
}
if(keypress == '38'){
    up();
    console.log("up");
}
if(keypress == '39'){
    right();
    console.log("right");
}
if(keypress == '40'){
    down();
    console.log("down");
}
}
function left(){
    if(player_x > -40){
        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function up(){
    if(player_y > 0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y < 370 ){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x < 700){
        player_x = player_x + block_width;
        canvas.remove(player_object);
        player_update();
    }
}