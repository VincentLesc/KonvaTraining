export class Zone{
    constructor(item, iteration, rowIteration) {
        this.id = null;
        this.iteration = iteration;
        this.image = null;
        this.rowIteration = rowIteration;
        if (item.length === 0) {
            this.initZone();
        }
    }

    initZone() {
        this.image = document.getElementById('tile_067');
        const zone = global.konvaManager.addLandscapeZone(this.rowIteration, this.iteration, this.image);
        global.konvaManager.stage.draw();
    }


}
