let images = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback) {
    if (assetsStillLoading) {
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    } else {
        callback();
    }
}

function loadAssets(callback){
    function loadImage(fileName){
        assetsStillLoading++;

        let photoImage = new Image();
        photoImage.src = "./assets/images/" + fileName;

        photoImage.onload = function() {
            assetsStillLoading--;
        }
        return photoImage;
    }
    images.background = loadImage('pool_table.png');
    images.stick = loadImage('cue_stick.png');

    assetsLoadingLoop(callback);
}