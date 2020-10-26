import {Landscape} from "./components/landscape/Landscape";
import {UserInterface} from "./components/user_interface/UserInterface";
import {KonvaManager} from "./KonvaManager";

export class Game{
    constructor() {
        global.konvaManager = new KonvaManager();
        global.konvaManager.setStage(1500, 750);
        console.log('ici');
        this.globalGridParameters = JSON.parse(document.getElementById('container').dataset.arrayConfig);

        this.landscape = this.setLandscape(this.globalGridParameters, document.getElementById('container').dataset.landscapeUrl);
        this.userInterface = this.setUserInterface();

        global.konvaManager.fitStageIntoParentContainer();
    }

    buildZone() {
        let index = 0;
        let a=1;
        let line=0;
        let column=0;
        let arrayConfig = [];
        for (let j=0; j <1000+33; j= j+33) {
            arrayConfig[line] = [];
            index = index === 0 || index === 2 ? 1 : 2;
            let i = index === 1 ? 0 : 66;
            column = 0;
            for ( i; i < 1920+132+line%2*66; i = i + 132) {
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
        return new Landscape(grid, updateUrl);
    }

    setUserInterface() {
        return new UserInterface();
    }


}
