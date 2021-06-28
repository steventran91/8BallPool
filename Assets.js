let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){
    if (assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    } else {
        callback();
    }
}

function loadAssets(callback){

    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;

        spriteImage.onload = function(){
            assetsStillLoading--;
        }
        return spriteImage;
    }
    sprites.background = loadSprite('table.png');
    sprites.stick = loadSprite('spr_stick.png');
    sprites.whiteBall = loadSprite('ball.png')
    sprites.redBall = loadSprite('redball.png')
    sprites.yellowBall = loadSprite('yellowball.png')
    sprites.blackBall = loadSprite('blackball.png')


    assetsLoadingLoop(callback);

}

function getBallsByColor(color){
    switch (color) {
        case COLOR.RED:
            return sprites.redBall;
        case COLOR.BLACK:
            return sprites.blackBall;
        case COLOR.YELLOW:
            return sprites.yellowBall;
        case COLOR.WHITE:
            return sprites.whiteBall;
    }
}