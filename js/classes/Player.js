// create player class
class Player {
    constructor({
        collisionBlocks = []
    }) {
        this.position = {
            x: 200,
            y: 200,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        
        this.width = 25;
        this.height = 25;
        this.sides = {
            bottom: this.position.y + this.height,
            leftSide: this.position.x,
            rightSide: this.position.x + this.width
        }
        this.gravity = 1;

        this.collisionBlocks = collisionBlocks;
    }

    // draw the player 
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    //updating the position of the player each frame
    update() {
        this.position.x += this.velocity.x;
        // checking the collision of the canvas, left and right
        if (this.position.x <= 0 || this.position.x + this.width >= canvas.width) {
            if (this.velocity.x < 0) {
                this.position.x = 0.01;
            }
            //going right
            if (this.velocity.x > 0) {
                this.position.x = canvas.width - this.width - 0.01;
            }
        }
        // check horizontal collisions
        for (let i =0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            //if a collision exist
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height
                ) {
                    //collision on x axis going left
                    if (this.velocity.x < 0) {
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                        break;
                    }
                    //going right
                    if (this.velocity.x > 0) {
                        this.position.x = collisionBlock.position.x - this.width - 0.01;
                        break;
                    }

            }
        }

        //apply gravity
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;

        //check collisions
        for (let i =0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            //if a collision exist
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height
                ) {
                    if (this.velocity.y < 0) {
                        this.velocity.y = 0;
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01;
                        break;
                    }
                    if (this.velocity.y > 0) {
                        this.velocity.y = 0;
                        this.position.y = collisionBlock.position.y - this.height - 0.01;
                        break;
                    }

            }
        }
    }
}