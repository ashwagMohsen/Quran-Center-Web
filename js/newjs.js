function fun1(){
 
    const op = document.getElementById('carousel-caption');
    op.style.display = 'block';
    const op2 = document.getElementById('overlayInj');
    op2.style.display = 'block';

}
 var x=1;
function fun1c(){
  if(x==2){
    fun2();
    x-=1;
  }
  else{
    fun1()
    x+=1;
  }

}
function fun2(){
  const op = document.getElementById('carousel-caption');
  op.style.display = 'none';
  const op2 = document.getElementById('overlayInj');
  op2.style.display = 'none';
}

function fun11(){
  const op = document.getElementById('carousel-caption2');
  op.style.display = 'block';
  const op2 = document.getElementById('overlayInj2');
  op2.style.display = 'block';
}
function fun22(){
  const op = document.getElementById('carousel-caption2');
  op.style.display = 'none';
  const op2 = document.getElementById('overlayInj2');
  op2.style.display = 'none';
}
var y=1;
function fun1c2(){
  if(y==2){
    fun22();
    y-=1;
  }
  else{
    fun11()
    y+=1;
  }

}
 /*---2يشبه الي سالت عليه---*/
  /*function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          break;
  
          case 39: // right
          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#carousel div').click(function() {
    moveToSelected($(this));
  });
  
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });*/