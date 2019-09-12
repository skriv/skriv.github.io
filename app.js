
var  title = document.querySelectorAll("#title path");

title.forEach(function(i){
  i.style['stroke-width'] = 1;
  i.style.strokeDasharray = i.getTotalLength()+"px";
  i.style.strokeDashoffset = i.getTotalLength()+"px";
  i.style.animation = "line-anim 2s ease forwards";
})

