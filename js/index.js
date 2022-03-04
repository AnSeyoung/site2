// 공통
function navBtn(){
	$('#btn').on('click',function(e){
		$(this).hide();
		$('nav').animate({left:'0'},400);
	});
	$('nav>.close').on('click',function(e){
		let navW = $('nav').innerWidth();
		$('#btn').show();
		$('nav').css('left','-'+navW+'px');
	});
};
//  main
function gallery(){
	// 준비하기
	// 기존 사이즈
	let wWidth = $('#wrap').width();
	let figureW = $('#box04>article>div>div>figure').outerWidth(true);
	// console.log(figureW);
	$('#all>figure:last').prependTo('#all');
			$('#all').css('margin-left','-'+figureW+'px');
	// 이벤트 -> click
	$('#box04 p.right').on('click',function(e){
		$('#all').animate({marginLeft:'-='+figureW+'px'},1000,function(){
			// 준비하기
			$('#all>figure:first').appendTo('#all');
			$('#all').css('margin-left','-'+figureW+'px');
		});
	});
	$('#box04 p.left').on('click',function(e){
		// let figureW = $('#box03>article>div>div>figure').width();
		$('#all').animate({marginLeft:'+='+figureW+'px'},1000,function(){
			// 준비하기
			$('#all>figure:last').prependTo('#all');
			$('#box04>article>div>div').css('margin-left','-'+figureW+'px');
		});
	});
};
// product
function backGallery(){
	let secW = $('article>h3').outerWidth(true);
	// console.log(secW);
	setInterval(function(){
		$('article>h3>span').animate({marginLeft:'-='+secW+'px'},7000,function(){
			$('article>h3>span>span:first').appendTo('article>h3>span');
			$('article>h3>span').css('margin-left','0');
		});
	},7000);
};
function taste(){
	let marginLeft =parseInt($('.all').css('margin-left'));
	console.log(marginLeft);
	let liWidth = $('.all>li').width();
	console.log(liWidth);
	// .left 클릭하면 marginLeft += li의 width
	$('.all>li>p>button.left').on('click',function(e){
		$('.box02>dl>dd').removeClass('on');
		$('.all').animate({marginLeft:'+='+liWidth+'px'});
	});
	// .right클릭하면 marginLeft -= li의 width
	$('.all>li>p>button.right').on('click',function(e){
		$('.box02>dl>dd').removeClass('on');
		$('.all').animate({marginLeft:'-='+liWidth+'px'});
	});
	// .reset클릭하면 marginleft값이 0px
	$('.all>li>p>button.reset').on('click',function(e){
		$('.all').animate({marginLeft:'0'});
	});
	$('.box02>dl>dd').on('click',function(e){	
		$(this).addClass('on');
		let str = $(this).attr('name');
		console.log(str);
		if(str == 'light'){
			$('.box03>dl>dd>a').text('인생막걸리').attr('href','../site/product.html#box01');
		}else if(str == 'sweet'){
			$('.box03>dl>dd>a').text('달빛유자막걸리').attr('href','../site/product.html#box02');
		}
	});
};