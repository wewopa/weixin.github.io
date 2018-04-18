
var nowpage = 0;

$(document).ready(function(e) {
    //截取屏幕宽高
	var width = window.innerWidth;
	var height = window.innerHeight;
	//最外层盒子宽高
	$(".content").width(width);
	
	$(".content").height(4*height);
	//每一页的宽高
	$(".page").width(width);
	
	$(".page").height(height);
	//触控监听
	$(".content").swipe({
		
		swipe:function(event,direction,distance,duration,fingerCount){
			
			if(direction == "up"){
				nowpage = nowpage+1;
				}
			else if(direction == "down")
			{
				nowpage = nowpage-1;
			}
			if(nowpage<0)
			{
				nowpage = 0;
			}
			if(nowpage>3)
			{
				nowpage = 3;
			}
			//动画：移动content盒子的位置
			$(".content").animate({top:nowpage*-100+"%"},{duration:500,complete:animations()});
			}
		});
		
		//第一页动画：1.楼的淡入fadeIn
		$(".page1-building").fadeIn(2000,function(){
			//2.飞机变大
			$(".page1-person").animate({width:'70%'},{duration:2000});
		
			});
});

function playPause(img)
{
	var player = document.getElementById("musicPlayer");
	
	if(player.paused)
	{
		player.play();
		
		img.src = "images/musicBtn.png";
	}
	else
	{
		player.pause();
		
		img.src = "images/musicBtnOff.png";
	}
}
//执行动画
function animations()
{
	//第二页动画
	if(nowpage == 1)
	{
		$(".page2-bg").fadeIn(2000,function(){
			$(".page2-text1").fadeIn(1000,function(){
				$(".page2-text2").fadeIn(1000);
				});
			});
	}
	//第三页动画
	if(nowpage == 2)
	{
		$(".page3-early").fadeIn(2000);
		$(".page3-last").fadeIn(3000);
		//车跑人追
		$(".page3-bus").animate({left:'-100%'},{duration:2000});
		$(".page3-me").animate({right:'50%'},{duration:3000,complete:function(){
			//场景一淡出
			$(".page3-early").fadeOut("slow",function(){display:none;});
			$(".page3-last").fadeOut("slow",function(){display:none;});
			$(".page3-station").fadeOut("slow");
			$(".page3-me").fadeOut("slow",function(){
				//场景二淡入
				$(".page3-wall").fadeIn("slow");
				$(".page3-cry").fadeIn("slow",function(){
					//出现文字
					$(".page3-space").animate({width:'30%'},{duration:1000,complete:function(){
						$(".page3-where").animate({width:'50%'},"slow");
						}});
					});
				});
			}});
	}
}

function start(img)
{
	img.src = "images/lightOn.png";
	
	$(".page4-lobg").fadeOut("slow");
	$(".page4-ct").fadeOut("slow");
	$(".page4-click").fadeOut("slow",function(){
		$(".page4-wky").fadeIn("slow",function(){
			$(".page4-bg2").fadeIn("slow");
			});
		});
}