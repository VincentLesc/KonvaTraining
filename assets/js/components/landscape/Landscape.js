import {Row} from "./Row";

export class Landscape{
    constructor(grid, landscapeUrl) {
        this.grid = grid;
        this.updateUrl = landscapeUrl;
        this.rows = [];

        this.setLandscapeZones();
    }

    setLandscapeZones() {
        global.konvaManager.addLandscapeLayer();
        let i = 0;
        let len = this.grid.length;
        while (i<len) {
            this.rows.push(new Row(this.grid[i], i));
            i++;
        }
    }
}
