
$(function(){
/***ナビ****/
	hsize = $(window).height();
	$(".top").css("height", hsize + "px");

	$(".works li").hover(function(){
		$(".view",this).animate({"top":"42%",
			"opacity":"1"},250);
		$(".view3",this).animate({"top":"53%",
			"opacity":"1"},250);
		$(".view2 i",this).animate({"right":"15%",
			"opacity":"1"},250);
		$(".w-text",this).animate({
			"opacity":"0.7"},250);
		$(".w-title",this).animate({
			"opacity":"0.7"},250);
		$(".w-img1",this).animate({
			"opacity":"0.4"},250);
		$(".w-img3",this).animate({
			"opacity":"0.4"},250);
	},function(){
		$(".view",this).animate({"top":"37%",
			"opacity":"0"},250);
		$(".view3",this).animate({"top":"58%",
			"opacity":"0"},250);
		$(".view2 i",this).animate({"right":"20%",
			"opacity":"0"},250);
		$(".w-text",this).animate({
			"opacity":"1"},250);
		$(".w-title",this).animate({
			"opacity":"1"},250);
		$(".w-img1",this).animate({
			"opacity":"1"},250);
		$(".w-img3",this).animate({
			"opacity":"1"},250);
	});

	$('nav a').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
	});
