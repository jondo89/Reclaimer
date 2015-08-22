

      function redraw(){
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = 800; canvas.height = 800;
      var ctx = canvas.getContext('2d');
    trackTransforms(ctx);
      // Clear the entire canvas
      var p1 = ctx.transformedPoint(0,0);
      var p2 = ctx.transformedPoint(canvas.width,canvas.height);
      ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);

      // Alternatively:
      // ctx.save();
      // ctx.setTransform(1,0,0,1,0,0);
      // ctx.clearRect(0,0,canvas.width,canvas.height);
      // ctx.restore();

      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.moveTo(399,250);
      ctx.lineTo(474,256);
      ctx.stroke();

      ctx.save();
      ctx.translate(4,2);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(436,253);
      ctx.lineTo(437.5,233);
      ctx.stroke();

      ctx.save();
      ctx.translate(438.5,223);
      ctx.strokeStyle = '#06c';
      ctx.beginPath();
      ctx.lineWidth = 0.05;
      for (var i=0;i<60;++i){
        ctx.rotate(6*i*Math.PI/180);
        ctx.moveTo(9,0);
        ctx.lineTo(10,0);
        ctx.rotate(-6*i*Math.PI/180);
      }
      ctx.stroke();
      ctx.restore();

      ctx.beginPath();
      ctx.lineWidth = 0.2;
      ctx.arc(438.5,223,10,0,Math.PI*2);
      ctx.stroke();
      ctx.restore();
      

    }