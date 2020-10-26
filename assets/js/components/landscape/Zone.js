export class Zone{
    constructor(item, iteration, rowIteration) {
        this.id = null;
        this.iteration = iteration;
        this.image = null;
        this.rowIteration = rowIteration;

        if (item === null) {
            this.initZone();
        }
    }

    initZone() {
        this.image = document.getElementById('tile_067');
        this.konva = new Konva.Image({
            x: this.iteration*132,
            y: 0,
            image: this.image,
        });
        this.konva.cache();
        this.konva.drawHitFromCache();
        let self = this;
        this.konva.addEventListener('click', function () {
                const over = new Konva.Image({
                    x: this.iteration*132,
                    y: 0,
                    image: document.getElementById('tile_over')
                });
                global.dispatcher.dispatch('konvaZoneSet_'+self.rowIteration, over);
        }.bind(this));
        global.dispatcher.dispatch('konvaZoneSet_'+self.rowIteration, this.konva);
    }


}
