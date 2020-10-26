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
      this.stage.add(this.layer);
    }

    bindFileChange() {
      const layer= this.layer;
      this.inputFile.addEventListener('change', function (event) {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
          const img = new Konva.Image({
            x: 0,
            y: 0,
            image: output
          })
          console.log(img);
          layer.add(img);
          layer.draw();
        }
      }.bind(this));
    }
  }

  const Admin = new LandscapeItemAdmin();
}