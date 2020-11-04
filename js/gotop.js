// JavaScript Document
//返回顶部模块
$(function(){
	$(window).scroll(function() {
			if($(window).scrollTop() >= 600){ //向下滚动像素大于这个值即出现
					$('.Gotop').fadeIn(300); //淡入时间，越小出现的越快
					const bzEasing = function (x) {
							return -(x-1)*(x-1) + 1
					}  
				var time = 0
				var total = 666;
				var delta = 60;
				var id = setInterval(function(){
					time++;
					var nowNum = bzEasing(time/total)*delta;
					$('#showNum').html(1958 + Math.floor(nowNum));
					if (time>=total) {
						clearInterval(id);
					}
				}, 10);
			}else{
					$('.Gotop').fadeOut(300); //淡出时间，越小消失的越快
			}
	});
	$('.Gotop').click(function(){$('html,body').animate({scrollTop: '0px'}, 666);});
});