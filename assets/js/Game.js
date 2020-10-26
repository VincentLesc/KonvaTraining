import {Landscape} from "./components/landscape/Landscape";

export class Game{
    constructor() {
        this.stage = this.setStage();
        this.globalGridParameters = this.buildZone();

        const self = this;
        dispatcher.on('konvaLandscapeSet', function () {
            self.stage.draw();
        })
        this.landscape = this.setLandscape(this.globalGridParameters, document.getElementById('container').dataset.landscapeUrl);
    }

    setStage() {
        return new Konva.Stage({
            container: 'container',   // id of container <div>
            width: 1900,
            height: 1024
        });
    }

    buildZone() {
        let index = 0;
        let a=1;
        let line=0;
        let column=0;
        let arrayConfig = [];
        for (let j=0; j <2500+33; j= j+33) {
            arrayConfig[line] = [];
            index = index === 0 || index === 2 ? 1 : 2;
            let i = index === 1 ? 0 : 66;
            column = 0;
            for ( i; i < 5000+132+line%2*66; i = i + 132) {
                a++;
                arrayConfig[line][column] = null;
                column++;
                index++;
            }
            line++;
        }
        return arrayConfig;
    }

    setLandscape(grid, updateUrl) {
        const landscape = new Landscape(grid, updateUrl);
        this.stage.add(landscape.layer);
        this.stage.draw();
        console.log(this.stage);
        return landscape;
    }
}
