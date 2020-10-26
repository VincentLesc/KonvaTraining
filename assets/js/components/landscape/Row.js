import {Zone} from "./Zone";

export class Row {
    constructor(gridElement, iteration) {
        this.gridParameters = gridElement;
        this.iteration = iteration;
        this.zones = [];
        this.konvaRow = null;
        this.initKonvaRow();

        let self = this;
        global.dispatcher.on('konvaZoneSet_'+ self.iteration, function (konvaImg) {
            self.konvaRow.add(konvaImg);
            console.log(self.konvaRow);
        })
        this.init();
    }

    init() {
        let i = 0;
        this.gridParameters.forEach(function (item) {
            this.zones.push(new Zone(item, i, this.iteration));
            i++;
        }.bind(this))
    }

    initKonvaRow() {
        this.konvaRow = new Konva.Group({
            x: this.iteration%2 ? 0 : 66,
            y: this.iteration*33,
            stroke: 'red',
            strokeWidth: '5px'
        });
        global.dispatcher.dispatch('konvaGroupCreated', this.konvaRow);
    }
}
