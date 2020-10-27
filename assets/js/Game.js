import {Landscape} from "./components/landscape/Landscape";
import {UserInterface} from "./components/user_interface/UserInterface";
import {KonvaManager} from "./KonvaManager";

export class Game{
    constructor() {
        let a = new Date();
        global.konvaManager = new KonvaManager();
        global.konvaManager.setStage(1500, 750);
        console.log('ici');
        this.globalGridParameters = JSON.parse(document.getElementById('container').dataset.arrayConfig);

        this.landscape = this.setLandscape(this.globalGridParameters, document.getElementById('container').dataset.landscapeUrl);
        this.userInterface = this.setUserInterface();

        global.konvaManager.fitStageIntoParentContainer();
        let b = new Date();
        console.log(b-a);
    }

    setLandscape(grid, updateUrl) {
        return new Landscape(grid, updateUrl);
    }

    setUserInterface() {
        return new UserInterface();
    }


}
