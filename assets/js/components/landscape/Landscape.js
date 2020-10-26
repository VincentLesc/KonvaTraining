import {Row} from "./Row";

export class Landscape{
    constructor(grid, landscapeUrl) {
        this.layer = this.setLayer();
        this.grid = grid;
        this.updateUrl = landscapeUrl;
        this.rows = [];
        let self = this;

        global.dispatcher.on('konvaGroupCreated', function (group) {
            self.layer.add(group);
        });
        global.dispatcher.on('konvaLandscapeUpdated', function (group) {
            self.layer.draw();
        });
        global.landscapeLayer = this.layer;
        this.setLandscapeZones();
        setInterval(function(){
            self.layer.draw();
        }, 500);
    }

    setLayer() {
        return new Konva.Layer({
                x: -66,
                y: -33,
                height: 5000,
                width:2500,
                draggable: true,
                fill: 'red'
            }
        );
    }

    setLandscapeZones() {
        let i = 0;
        let len = this.grid.length;
        while (i<len) {
            this.rows.push(new Row(this.grid[i], i));
            i++;
        }
        global.dispatcher.dispatch('konvaLandscapeSet');
        this.layer.scale({
            x:0.5,
            y:0.5
        })
        this.layer.draw();
        console.log(this.layer);
    }
}
