class StarPainter {
  static get inputProperties() {
    return ['--star-width', '--star-height', '--star-fill', '--star-stroke'];
  }

  paint(ctx, size, props) {
    let starFill = props.get('--star-fill').value;
    let starStroke = props.get('--star-stroke').value;
    let starWidth = props.get('--star-width').value;
    let starHeight = props.get('--star-height').value;

    let spikes = 5;
    let outerRadius = starWidth * 60 / 100;
    let innerRadius = outerRadius / 2;
    let cx = starWidth;
    let cy = starHeight;

    let rotate = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rotate) * outerRadius;
      y = cy + Math.sin(rotate) * outerRadius;
      ctx.lineTo(x, y);
      rotate += step;

      x = cx + Math.cos(rotate) * innerRadius;
      y = cy + Math.sin(rotate) * innerRadius;
      ctx.lineTo(x, y);
      rotate += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = starWidth * 10 / 100;
    ctx.strokeStyle = starStroke;
    ctx.stroke();
    ctx.fillStyle = starFill;
    ctx.fill();
  }
}

registerPaint('star', StarPainter);