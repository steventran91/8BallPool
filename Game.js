function Game() {

}

Game.prototype.init = function(){
    this.gameEnvironment = new GameEnvironment();
}


Game.prototype.start = function(){
    PoolGame.init();
    PoolGame.mainLoop();
}


Game.prototype.mainLoop = function(){
    Canvas.clear();
    PoolGame.gameEnvironment.update();
    PoolGame.gameEnvironment.draw();

    requestAnimationFrame(PoolGame.mainLoop);
}

let PoolGame = new Game();

