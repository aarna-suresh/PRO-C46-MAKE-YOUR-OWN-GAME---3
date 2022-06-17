class Ground {
    constructor(xInput, yInput, widthInput, heightInput) {
        this.x = xInput;
        this.y = yInput;
        this.width = widthInput;
        this.height = heightInput;
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(userWorld, this.body);
    }
    display() {
        fill("yellow");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}