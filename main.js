var Canvas = new fabric.Canvas('myCanvas');
var block_width = 30;
var block_height = 30;
var player_X = 20;
var player_Y = 10;
var Player_object = "";
var Block_object = "";

function Player_Update() {
    fabric.Image.fromURL("Captain Marvel.png", function(Img) {
        Player_object = Img;
        Player_object.scaleToWidth(45);
        Player_object.scaleToHeight(92);
        Player_object.set({
            top: player_Y,
            left: player_X
        });
        Canvas.add(Player_object);
    });
}

function new_image(Petit) {
    fabric.Image.fromURL(Petit, function(Img) {
        Block_object = Img;
        Block_object.scaleToWidth(block_width);
        Block_object.scaleToHeight(block_height);
        Block_object.set({ top: player_Y, left: player_X });
        canvas.add(Block_object);
    });
}