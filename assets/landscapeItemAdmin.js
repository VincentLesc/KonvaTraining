import Konva from "konva";
document.onload
{
  class LandscapeItemAdmin{
    constructor() {
      this.setStage(500,500);
      this.inputFile = document.getElementById('item_imageFile');
      this.bindFileChange();
    }

    setStage(width, height) {
      this.stage = new Konva.Stage({
        container: 'container',   // id of container <div>
        width: width,
        height: height,
      });
      this.layer = new Konva.Layer({
        x: 0,
        y: 0,
        width:500,
        height: 500
      })
      const image = document.getElementById('tile_over');
      this.group = new Konva.Group({
        width: 132,
        height: 99,
        x: (500-132)/2,
        y: (500-99)/2
      })
      this.standard = new Konva.Image({
        x: 0,
        y: (500-70)/2,
        width: 132,
        height: 69,
        image: image,
      })
      this.group.add(this.standard);
      this.layer.add(this.group);
      this.stage.add(this.layer);
    }

    bindFileChange() {
      const group = this.group;
      const stage = this.stage;
      this.inputFile.addEventListener('change', function (event) {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
          const img = new Konva.Image({
            x: 0,
            y: 0,
            image: output,
            draggable: true,
            stroke:'red',
            strokeWidth: 5
          })
          img.addEventListener('dragmove', function (e) {
            console.log(img);
          })
          group.add(img);
          stage.draw();
        }
      }.bind(this));
    }
  }

  const Admin = new LandscapeItemAdmin();
}