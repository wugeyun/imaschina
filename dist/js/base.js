//lazy
$("img.lazy").lazyload({effect: "fadeIn"});
//工具提示
$('[data-toggle="tooltip"]').tooltip();
//返回
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});