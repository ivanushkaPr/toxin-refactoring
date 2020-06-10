$(document).ready(function() {
  let canvas = document.querySelector('.js-room-stats');

  if(canvas) {
    let ctx = canvas.getContext('2d');

  let semiCircleStart = (Math.PI/180)*90;
  let semiCircleEnd = (Math.PI/180)*270;
  
  // Полукруг
  var lineargradient = ctx.createLinearGradient(0, 0, 0, 124);
  lineargradient.addColorStop(0, '#FFE39C');
  lineargradient.addColorStop(1, '#FFBA9C');
  ctx.fillStyle = lineargradient;
  ctx.beginPath();
  ctx.arc(63, 63, 62, semiCircleStart , semiCircleEnd, false);
  ctx.lineTo(63, 7)
  ctx.arc(63, 63, 56 , semiCircleEnd, semiCircleStart, true);
  ctx.lineTo(63, 125);
  ctx.fill();
  ctx.closePath();

  var lineargradient = ctx.createLinearGradient(0, 0, 0, 124);
  lineargradient.addColorStop(0, '#6FCF97');
  lineargradient.addColorStop(1, '#66D2EA');


  let firstQuadrantStart = (Math.PI/180)*270;
  let firstQuadrantEnd = (Math.PI/180)*180;

  ctx.beginPath();
  ctx.fillStyle = lineargradient;
  ctx.arc(63, 63, 62, 0, (Math.PI/180) * 90, false);
  ctx.lineTo(63, 120);
  ctx.arc(63, 63, 56, (Math.PI/180) * 90, 0, true);
  ctx.lineTo(124, 63);
  ctx.fill();
  ctx.closePath();

  var lineargradient = ctx.createLinearGradient(0, 0, 0, 124);
  lineargradient.addColorStop(0, '#BC9CFF');
  lineargradient.addColorStop(1, '#8BA4F9 ');
  
  ctx.beginPath();
  ctx.fillStyle = lineargradient;
  ctx.arc(63, 63, 62, (Math.PI/180) * 270, (Math.PI/180) * 0, false);
  ctx.lineTo(118, 63);
  ctx.arc(63, 63, 56, (Math.PI/180) * 0, (Math.PI/180) * 270, true);
  ctx.lineTo(63, 0);
  ctx.fill();
  ctx.closePath();
  } else {
    console.log('no such id');
  }
})