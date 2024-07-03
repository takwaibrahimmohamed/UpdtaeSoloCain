text2 = '50.450k';  // The message displayed
chars2 = '0123456789.k';  // All possible Characters
scale2 = 9;  // Font size and overall scale
breaks2 = 0.003;  // Speed loss per frame
endSpeed2 = 0.05;  // Speed at which the letter stops
firstLetter2 = 220;  // Number of frames until the first letter stops (60 frames per second)
delay2 = 0.8;  // Number of frames between letters stopping

canvas2 = document.querySelector('.personanimat canvas');
ctx2 = canvas2.getContext('2d');

text2 = text2.split('');
chars2 = chars2.split('');
charMap2 = [];
offset2 = [];
offsetV2 = [];

for(var i=0;i<chars2.length;i++){
  charMap2[chars2[i]] = i;
}

for(var i=0;i<text2.length;i++){
  var f = firstLetter2+delay2*i;
  offsetV2[i] = endSpeed2+breaks2*f;
  offset2[i] = -(1+f)*(breaks2*f+2*endSpeed2)/2;
}

(onresize = function(){
  canvas2.width = canvas2.clientWidth;
  canvas2.height = canvas2.clientHeight;
})();

requestAnimationFrame(loop = function(){
  ctx2.setTransform(1,0,0,1,0,0);
  ctx2.clearRect(0,0,canvas2.width,canvas2.height);
  ctx2.globalAlpha = 1;
  ctx2.fillStyle = 'transparent';
  ctx2.fillRect(0,(canvas2.height-scale2)/2,canvas2.width,scale2);
  for(var i=0;i<text2.length;i++){
    ctx2.fillStyle = 'white';
    ctx2.textBaseline = 'middle';
    ctx2.textAlign = 'center';
    ctx2.setTransform(1,0,0,1,Math.floor((canvas2.width-scale2*(text2.length-0.5))/2),Math.floor(canvas2.height/2));
    var o = offset2[i];
    while(o<0)o++;
    o %= 1;
    var h = Math.ceil(canvas2.height/2/scale2)
    for(var j=-h;j<h;j++){
      var c = charMap2[text2[i]]+j-Math.floor(offset2[i]);
      while(c<0)c+=chars2.length;
      c %= chars2.length;
      var s = 1-Math.abs(j+o)/(canvas2.height/2/scale2+1)
      ctx2.globalAlpha = s
      ctx2.font = scale2*s + 'px Helvetica'
      ctx2.fillText(chars2[c],scale2*i,(j+o)*scale2);
    }
    offset2[i] += offsetV2[i];
    offsetV2[i] -= breaks2;
    if(offsetV2[i]<endSpeed2){
      offset2[i] = 0;
      offsetV2[i] = 0;
    }
  }
  
  requestAnimationFrame(loop);
});