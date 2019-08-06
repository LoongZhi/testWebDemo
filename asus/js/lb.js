$(function() {

	//更换图片的函数
	function updateimg() {
		$(".banner_ul li:last-child").animate({"opacity":"0"}, 1000, function() {
			$(".banner_ul").prepend($(this));
			$(this).animate({"opacity":"1"}, 0);
		});
	}
	function updateimg01() {
		$(".banner_menu .banner_ul li:first-child").animate({"opacity":0},0,function(){
			$(".banner_ul").append($(this));
			$(".banner_ul li:last-child").animate({"opacity":"1"},1000);
		});
	}
	//定时器
		setInterval(updateimg, 5000);
	$(".btn_01").click(function() {
		updateimg();
	})
	$(".btn_02").click(function() {
		updateimg01();
	})

});