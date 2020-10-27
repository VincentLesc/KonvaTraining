import {TopMenu} from "./TopMenu";
import {BottomMenu} from "./BottomMenu";

export class UserInterface{
  constructor() {
    this.layer = global.konvaManager.addUserInterfaceLayer();
    this.userMenu = this.setUserMenu();
    this.bottomMenu = this.setBottomMenu();
  }

  setUserMenu() {
    return new TopMenu();
  }

  setBottomMenu() {
    return new BottomMenu();
  }
}