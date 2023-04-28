class CollisionBlock {
    constructor({position}) {
        this.position = position;
        this.width = 60;
        this.height = 70;
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}