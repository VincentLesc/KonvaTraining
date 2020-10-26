export class KonvaManager{
  constructor() {
    this.stage = null;
  }

  setStage(width, height) {
    this.stage = new Konva.Stage({
      container: 'container',   // id of container <div>
      width: width,
      height: height,
    });
  }

  addLandscapeLayer() {
    if (!this.getLandscapeLayer()) {
      this.stage.add(new Konva.Layer({
        id: 'landscape_layer',
        x: -66,
        y: -33,
        height: 1000,
        width: 500,
        draggable: true,
      }));
    }
    this.stage.draw();
    console.log(this.stage);
  }

  getLandscapeLayer() {
    return this.stage.findOne('#landscape_layer');
  }

  addLandscapeRow(iteration,x,y) {
    if (!this.getLandscapeRow(iteration)) {
      this.getLandscapeLayer().add(new Konva.Group({
          id: 'landscape_row_' + iteration,
          x: x,
          y: y,
          stroke: 'red',
          strokeWidth: '5px'
        })
      );
    }
  }

  getLandscapeRow(iteration) {
    return this.getLandscapeLayer().findOne('#landscape_row_' + iteration);
  }

  addLandscapeZone(line, column, image) {
    if (!this.getLandscapeZone(line, column) && this.getLandscapeRow(line)) {
      const konvaImage = new Konva.Image({
        id: 'zone_' + line + '_' + column,
        x: column*132,
        y: 0,
        image: image,
      });
      this.getLandscapeRow(line).add(konvaImage);
    }
  }

  getLandscapeZone(line, column) {
    return this.getLandscapeLayer().findOne('#zone_'+line+'_'+column)
  }

  addUserInterfaceLayer() {
    if (!this.getUserInterfaceLayer()) {
      this.stage.add(new Konva.Layer({
          id: 'ui_layer',
          x: 0,
          y: 0,
          height: 950,
          width: 1900,
          draggable: false,
        }
      ));
    }
    this.stage.draw();
  }

  getUserInterfaceLayer() {
    return this.stage.findOne('#ui_layer');
  }

  addUserInterfaceBlock() {
    this.getUserInterfaceLayer().add(new Konva.Rect({
      x: 0,
      y: 850,
      height: 100,
      width: 1900,
      fill: 'black',
      listening: true,
      opacity: 0.2
    }));
    this.getUserInterfaceLayer().add(new Konva.Rect({
      x: 0,
      y: 0,
      height: 100,
      width: 1900,
      fill: 'black',
      listening: true,
      opacity: 0.2
    }))
  }

  fitStageIntoParentContainer() {
    let container = document.querySelector('#stage-parent');
    const stageWidth = 1900;
    const stageHeight = 950;
    // now we need to fit stage into parent
    let containerWidth = container.offsetWidth;
    // to do this we need to scale the stage
    let scale = containerWidth / stageWidth;

    this.stage.width(stageWidth * scale);
    this.stage.height(stageHeight * scale);
    this.stage.scale({ x: scale, y: scale });
    this.stage.draw();
  }
}