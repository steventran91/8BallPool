Welcome to 8Ball Pool
The 8Ball Pool Game is a classic 8 ball pool game. This is a two player game where users will take turn trying to make hit their balls into the holes. A user wins when all balls fall into a hole. 

## Functionality & MVP
* User is shown instructions on how to play the game
  * User will use mouse to aim and shoot the ball
  * Strength of shooting will be decided using keys, to increase or decrease strength
* Render the table, balls, and cue sticks using canvas and HTML
* Ball collisions
  * balls can collide and bounce off each other or the wall
* Ball falls into a hole

## Wireframes
* Will use table, balls, and cue stick photos as wireframes
![screenshot](https://user-images.githubusercontent.com/78631034/127100089-c9a24d72-023c-4e61-9ffa-037cfe862092.png)





## Architecture and Technologies
* Javascript for game logic
* HTML/Canvas for rendering 
* CSS for styling

## Collisions
* Used requestAnimationFrame to generate collisions between objects such as balls, cue stick, and table. 
```Javascript
Ball.prototype.collideWithTable = function(table){
    if (!this.moving || !this.visible){
        return;
    }
    let collided = false;

    if (this.position.y <= table.TopY + BALL_RADIUS){
        this.position.y = table.TopY + BALL_RADIUS;
        this.velocity = new Vector2(this.velocity.x, -this.velocity.y);
        collided = true;
    }

    if (this.position.x >= table.RightX - BALL_RADIUS){
        this.position.x = table.RightX - BALL_RADIUS;
        this.velocity = new Vector2(-this.velocity.x, this.velocity.y);
        collided = true;
    }

    if (this.position.y >= table.BottomY - BALL_RADIUS){
        this.position.y = table.BottomY - BALL_RADIUS;
        this.velocity = new Vector2(this.velocity.x, -this.velocity.y);
        collided = true;
    }

    if (this.position.x <= table.LeftX + BALL_RADIUS){
        this.position.x = table.LeftX + BALL_RADIUS;
        this.velocity = new Vector2(-this.velocity.x, this.velocity.y);
        collided = true;
    }

    if (collided){
        this.velocity = this.velocity.mult(0.98);
    }


}
```
