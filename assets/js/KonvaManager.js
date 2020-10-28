import * as PIXI from 'pixi.js'

export class KonvaManager{
  constructor() {
    this.app = null;
    this.stage = null;
    this.landscapeContainer = null;
    this.landscapeItemLoaded = [];
    this.landscapeRowLoaded = [];
  }

  setStage(width, height) {
    const app = new PIXI.Application({
      width: 1500, height: 900, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
    });
    this.app = app;
    this.stage = app.stage;
    document.getElementById('container').append(app.view);
    // this.stage = new Konva.Stage({
    //   container: 'container',   // id of container <div>
    //   width: width,
    //   height: height,
    // });
  }

  addLandscapeLayer() {
    const container = new PIXI.Container();
    this.stage.addChild(container);
    container.interactive = true;
    container.scale.x =0.5;
    container.scale.y = 0.5;

    this.landscapeContainer = container;
    // if (!this.getLandscapeLayer()) {
    //   this.stage.add(new Konva.Layer({
    //     id: 'landscape_layer',
    //     x: -66,
    //     y: -33,
    //     height: 1000,
    //     width: 500,
    //     draggable: true,
    //   }));
    // }
    // this.stage.draw();
    let self = this;
  }

  getLandscapeLayer() {
    return this.stage.findOne('#landscape_layer');
  }

  addLandscapeRow(iteration,x,y) {
    // if (!this.landscapeRowLoaded[iteration]) {
    //   const row = new Konva.Group({
    //     id: 'landscape_row_' + iteration,
    //     x: x,
    //     y: y,
    //     stroke: 'red',
    //     strokeWidth: '5px'
    //   });
    //   this.getLandscapeLayer().add(
    //     row
    //   );
    //   this.landscapeRowLoaded.push(row);
    // }
  }


  getLandscapeRow(iteration) {
    return this.landscapeRowLoaded[iteration];
  }

  addLandscapeZone(line, column, image) {
    // let a = new Date();
    // const row = this.getLandscapeRow(line);
    // if (this.landscapeItemLoaded[image.src]) {
    //   const konvaImage = this.landscapeItemLoaded[image.src].clone();
    //   konvaImage.id('zone_' + line + '_' + column);
    //   konvaImage.x(column*132 - 190);
    //   row.add(konvaImage);
    // } else if (!this.landscapeItemLoaded[image.src] && row) {
    //   const konvaImage = new Konva.Image({
    //     id: 'zone_' + line + '_' + column,
    //     x: column*132 - 190,
    //     y: 0-282.5,
    //     image: image,
    //     scaleX: 1.05,
    //     scaleY: 1.05
    //   });
    //   this.landscapeItemLoaded[image.src] = konvaImage;
    //   row.add(konvaImage);
    // }
    // let b = new Date();
    let bug = function() {

    }
    const textureArray = ['/img/ground_riverCross_NE.png', '/img/ground_pathCross_SW.png', '/img/ground_grass_SW.png', '/img/ground_pathCorner_SE.png'];
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let i = getRandomInt(0,4);
    const texture = PIXI.Texture.from(textureArray[i]);
    const bunny = new PIXI.Sprite(texture);
    let x = column*132 - 190;
    if (line%2 === 0) {
      x = column*132-190+66;
    }
    bunny.x = x;
    bunny.y = (0-282.5) + line * 33;
    bunny.scale.x = 1.03;
    bunny.scale.y = 1.03;
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    this.landscapeContainer.addChild(bunny);
  }

  getLandscapeZone(line, column) {
    // return this.getLandscapeLayer().findOne('#zone_'+line+'_'+column)
  }

  addUserInterfaceLayer() {
    // if (!this.getUserInterfaceLayer()) {
    //   this.stage.add(new Konva.Layer({
    //       id: 'ui_layer',
    //       x: 0,
    //       y: 0,
    //       height: 950,
    //       width: 1900,
    //       draggable: false,
    //     }
    //   ));
    // }
    // this.stage.draw();
  }

  getUserInterfaceLayer() {
    // return this.stage.findOne('#ui_layer');
  }

  addUserInterfaceBlock() {
    // this.getUserInterfaceLayer().add(new Konva.Rect({
    //   x: 0,
    //   y: 850,
    //   height: 100,
    //   width: 1900,
    //   fill: 'black',
    //   listening: true,
    //   opacity: 0.2
    // }));
    // this.getUserInterfaceLayer().add(new Konva.Rect({
    //   x: 0,
    //   y: 0,
    //   height: 100,
    //   width: 1900,
    //   fill: 'black',
    //   listening: true,
    //   opacity: 0.2
    // }))
  }

  fitStageIntoParentContainer() {
    // let container = document.querySelector('#stage-parent');
    // const stageWidth = 1900;
    // const stageHeight = 950;
    // // now we need to fit stage into parent
    // let containerWidth = container.offsetWidth;
    // // to do this we need to scale the stage
    // let scale = containerWidth / stageWidth;
    //
    // this.stage.width(stageWidth * scale);
    // this.stage.height(stageHeight * scale);
    // this.stage.scale({ x: scale, y: scale });
    // this.stage.draw();
  }
}
