const DELTA = 1/177;

function GameWorld(){
    this.balls = [
        [new Vector2(1022, 413), COLOR.RED],
        [new Vector2(1056, 393), COLOR.RED],
        [new Vector2(1056, 433), COLOR.YELLOW],
        [new Vector2(1090, 374), COLOR.YELLOW],
        [new Vector2(1090, 413), COLOR.BLACK],
        [new Vector2(1090, 452), COLOR.RED],
        [new Vector2(1126, 354), COLOR.RED],
        [new Vector2(1126, 393), COLOR.YELLOW],
        [new Vector2(1126, 433), COLOR.RED],
        [new Vector2(1126, 472), COLOR.YELLOW],
        [new Vector2(1162, 335), COLOR.YELLOW],
        [new Vector2(1162, 374), COLOR.YELLOW],
        [new Vector2(1162, 413), COLOR.RED],
        [new Vector2(1162, 452), COLOR.YELLOW],
        [new Vector2(1162, 491), COLOR.RED],
        [new Vector2(413, 413), COLOR.WHITE]
    ].map(params => new Ball(params[0], params[1]))

    this.whiteBall = this.balls.find(ball => ball.color === COLOR.WHITE);
    this.stick = new Stick(new Vector2(413, 413), this.whiteBall.shoot.bind(this.whiteBall));

    this.table = {
        TopY: 57,
        RightX: 1443,
        BottomY: 768,
        LeftX: 57
    }


}

GameWorld.prototype.handleCollide = function(){
    for (let i = 0; i < this.balls.length; i++){
        this.balls[i].handleBallInHole();
        this.balls[i].collideWithTable(this.table);
        for (let j = i + 1; j < this.balls.length; j++){
            const firstBall = this.balls[i];
            const secondBall = this.balls[j];
            firstBall.collideWithBall(secondBall);
        }
    }
}

GameWorld.prototype.update = function(){
    this.handleCollide();
    this.stick.update();
    // this.whiteBall.update(DELTA);
    for (let i = 0; i < this.balls.length; i++){
        this.balls[i].update(DELTA);
    }

    if (!this.ballIsMoving() && this.stick.shot){
        this.stick.reposition(this.whiteBall.position);
    }
}

GameWorld.prototype.draw = function(){
    Canvas.drawImage(sprites.background, {x: 0, y: 0});

    for (let i = 0; i < this.balls.length; i++){
        this.balls[i].draw();
    }

    this.stick.draw();
    // this.whiteBall.draw();
    
}

GameWorld.prototype.ballIsMoving = function(){
    // return this.whiteBall.moving;
    let ballIsMoving = false;

    for (let i = 0; i < this.balls.length; i++){
        if (this.balls[i].moving){
            ballIsMoving = true;
            break;
        }
    }
    return ballIsMoving;
}