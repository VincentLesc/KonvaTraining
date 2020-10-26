export class TopMenu{
  constructor() {
    this.layer = this.setGroup();
  }

  setGroup() {
    const rect = new Konva.Rect({
      x: 0,
      y: 0,
      height: 100,
      width: 1900,
      fill: 'black',
      listening: true,
      opacity: 0.2
    });
    global.dispatcher.dispatch('konvaUserMenuCreated', rect);
    return rect;
  }

}