window.onload = function(){
	var page1 = document.getElementById('pag_1')
	var page2 = document.getElementById('pag_2')
	var page3 = document.getElementById('pag_3')
	var p2_bg = document.getElementById('p2_bg')


	var music = document.getElementById('play')
	var audio = document.getElementsByTagName('audio')[0]

	//当音乐播放停止 音乐图标停止转动
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		//music.style.animationPlayState = "paused";//此方法目前存在兼容性问题
	},false)

	//点击音乐图标开关音乐--手机端不用onclick,需添加监听事件
	/*music.onclick = function(){
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
			//this.style.animationPlayState = "running";//此方法目前存在兼容性问题
		} else {
			audio.pause();
			this.setAttribute("class","");
			//this.style.animationPlayState = "paused";
		}
	}*/
	//手机端点击音乐图标开关音乐
	music.addEventListener("touchstart",function(event){
		//debugger
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
		} else {
			audio.pause();
			this.setAttribute("class","");
		}
	},false);

	page1.addEventListener("touchstart",function(e){
		page1.style.display = 'none';
		page2.style.display = 'block';
		page3.style.display = 'none';
		/*page3.style.top     = '100%';*/

		setTimeout(function(){
			//p2_bg.style.display = "none";
			/*page2.setAttribute("class","fadeOut");
			page3.setAttribute("class","fadeIn");*/
		},1000)
	},false);
	page2.addEventListener("touchstart",function(e){
		page1.style.display = 'none';
		page2.style.display = 'none';
		page3.style.display = 'block';
	},false)
}