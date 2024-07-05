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

// (onresize = function(){
//   canvas2.width = canvas2.clientWidth;
//   canvas2.height = canvas2.clientHeight;
// })();
(onresize = function() {
  canvas2.width = canvas2.clientWidth;
  canvas2.height = canvas2.clientHeight;
  ctx2.scale(canvas2.width / canvas2.clientWidth, canvas2.height / canvas2.clientHeight);
})();

requestAnimationFrame(loop2 = function(){
  ctx2.setTransform(1,0,0,1,0,0);
  ctx2.clearRect(0,0,canvas2.width,canvas2.height);
  ctx2.globalAlpha = 1;
  ctx2.fillStyle = 'transparent';
  ctx2.fillRect(0,(canvas2.height-scale2)/2,canvas2.width,scale2);
  for(var i=0;i<text2.length;i++){
    ctx2.fillStyle = 'white';
    ctx2.textRendering = 'optimizeLegibility';
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
      // ctx2.font = scale2*s + 'px Helvetica'
      ctx2.font = scale2*s + 'px Arial';
      ctx2.fillText(chars2[c],scale2*i,(j+o)*scale2);
    }
    offset2[i] += offsetV2[i];
    offsetV2[i] -= breaks2;
    if(offsetV2[i]<endSpeed2){
      offset2[i] = 0;
      offsetV2[i] = 0;
    }
  }
  
  requestAnimationFrame(loop2);
});
// console.log(document.querySelectorAll("canvas")[1].className=="canv2")

////////////////////////
if(document.querySelectorAll("canvas").length >1 && document.querySelectorAll("canvas")[1].className=="canv2" && document.querySelectorAll("canvas")[1]!==undefined){
  text = '12.8765421SOL';  // The message displayed
  chars = '123456789.SOL';  // All possible Charactrers
  scale = 9;  // Font size and overall scale
  breaks = 0.003;  // Speed loss per frame
  endSpeed = 0.05;  // Speed at which the letter stops
  firstLetter = 220;  // Number of frames untill the first letter stopps (60 frames per second)
  delay = 1;  // Number of frames between letters stopping
  
  
  
  canvas = document.querySelector('.drawcirclanimat canvas');
  
  ctx = canvas.getContext('2d');
  
  text = text.split('');
  chars = chars.split('');
  charMap = [];
  offset = [];
  offsetV = [];
  
  for(var i=0;i<chars.length;i++){
    charMap[chars[i]] = i;
  }
  
  for(var i=0;i<text.length;i++){
    var f = firstLetter+delay*i;
    offsetV[i] = endSpeed+breaks*f;
    offset[i] = -(1+f)*(breaks*f+2*endSpeed)/2;
  }
  
  // (onresize = function(){
  //   canvas.width = canvas.clientWidth;
  //   canvas.height = canvas.clientHeight;
  // })();
  (onresize = function() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx.scale(canvas.width / canvas.clientWidth, canvas.height / canvas.clientHeight);
  })();
  
  requestAnimationFrame(loop = function(){
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0,(canvas.height-scale)/2,canvas.width,scale);
    for(var i=0;i<text.length;i++){
      ctx.fillStyle = 'white';
      ctx.textRendering = 'optimizeLegibility';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.setTransform(1,0,0,1,Math.floor((canvas.width-scale*(text.length-1))/2),Math.floor(canvas.height/2));
      var o = offset[i];
      while(o<0)o++;
      o %= 1;
      var h = Math.ceil(canvas.height/2/scale)
      for(var j=-h;j<h;j++){
        var c = charMap[text[i]]+j-Math.floor(offset[i]);
        while(c<0)c+=chars.length;
        c %= chars.length;
        var s = 1-Math.abs(j+o)/(canvas.height/2/scale+1)
        ctx.globalAlpha = s
        // ctx.font = scale*s + 'px Helvetica'
        ctx.font = scale*s + 'px Arial';
        ctx.fillText(chars[c],scale*i,(j+o)*scale);
      }
      offset[i] += offsetV[i];
      offsetV[i] -= breaks;
      if(offsetV[i]<endSpeed){
        offset[i] = 0;
        offsetV[i] = 0;
      }
    }
    
    requestAnimationFrame(loop);
  });
  
  
}




const charthover=document.querySelectorAll(".charts .contain")
const chartmainbox=document.querySelector(".charts .box")
const chartbox=document.querySelector(".charts .numgraph")


charthover.forEach(element => {
 element.addEventListener(("mouseover"),(e)=>{
  if(e.target.offsetLeft>150){
     chartbox.style.left=`${e.target.offsetLeft - 50}px`
  }
  if(e.target.offsetLeft>120){
     chartbox.style.left=`${e.target.offsetLeft - 70}px`
  }
  else{
 chartbox.style.left=`${e.target.offsetLeft-20}px`
  }
 

  console.log(e.target.offsetLeft)
 })
});
