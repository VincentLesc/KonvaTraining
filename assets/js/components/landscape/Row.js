import {Zone} from "./Zone";

export class Row {
    constructor(gridElement, iteration) {
        this.gridParameters = gridElement;
        this.iteration = iteration;
        this.zones = [];
        this.initKonvaRow();
        this.init();
    }

    init() {
        let zoneIteration = 0;
        this.gridParameters.forEach(function (item) {
            this.zones.push(new Zone(item, zoneIteration, this.iteration));
            zoneIteration++;
        }.bind(this))
    }

    initKonvaRow() {
        global.konvaManager.addLandscapeRow(
          this.iteration, this.iteration %2 ? 0 : 66, this.iteration*33);
    }
}
