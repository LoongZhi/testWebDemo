/*查找隐藏和展开*/
 $(document).ready(function() {

   $(".look_btn").click(function() {
      var answer = $(".fun");
    if (answer.is(':visible')) {
      answer.slideUp();
    } else {
     answer.slideDown();
    }
     });
  });

$(".btn_x").click(function(){
	$(".fun").stop().slideUp(300,"linear");
	
});

/*菜单隐藏和展开*/
$(".der_dd").mouseenter(function(){
	$(".dht_01").stop().slideDown(100,"linear");

});
$(".dht_01").mouseleave(function(){
	$(".dht_01").stop().slideUp(50,"linear");

});

/*笔记本电脑隐藏和展开*/
$(".der_d").mouseenter(function(){
	$(".dsan_d").stop().slideDown(100,"linear");
});
$(".der_d").mouseleave(function(){
	$(".dsan_d").css("display","none");
});
