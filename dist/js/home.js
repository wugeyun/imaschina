$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	//ad
	$(".myad").modal('show');
    //pin
	$(".my-pin").pin();
	$(".my-pin-right").pin({minWidth: 768});
	//my-left-nav
	$("#myTabs").click(function(){
		goToTop('#myTabContent');
		//alert(mygoto);
	});
	//lazy
	$("img.lazy").lazyload({effect: "fadeIn"});
	//top
	$('.my-plane').bind('mouseenter mouseleave', function() {
		$(this).children('span').toggle('fast');
	});
	//myTabContent
	$('.list-group').on('mouseenter mouseleave','.list-group-item', function() {
		$(this).toggleClass('my-list-hover');
	});
	//change-ezine
	$(".dropdown-right").click(function(){
		var ename = $(this).html();
		$(".change-ezine").html(ename);
	});
	//get json
	$(".my-more").click(function(){
		var s = $(this).data("s");
		var p =  $(this).parent('ul').children('li').length;
		var url = "index.php/getjson.html";
		var add = $(this);
		var top = $(window).scrollTop();
		$('body,html').animate({'scrollTop':top + 600},1000);
		$.ajax({
			type:'post',
			async: false,
			dataType: 'json',
			url: url,
			data: {s:s,p: p},
			success : function(data) {
				if(data){
					$(add).before(data);
				}else{
					$(add).html('别点啦，没货啦~~~~(>_<)~~~~');
				}
			},
			error: function(){
				alert(s);
			}
		});
	});
	
	//to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
})
//top
function goToTop(obj){
    var _targetTop = $(obj).offset().top;
    jQuery("html,body").animate({scrollTop:_targetTop},600);
}
//baidu
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?f3dfc3c319fc7568bebcb93ba5e873b5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();