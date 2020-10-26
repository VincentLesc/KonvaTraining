export class BottomMenu{
  constructor() {
    this.layer = this.setGroup();
  }

  setGroup() {
    global.konvaManager.addUserInterfaceBlock();
  }
}