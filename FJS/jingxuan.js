window.onload = function(){
	console.log(1)
	var banner = document.getElementById('banner');
	sWidth = banner.clientWidth;
	console.log(sWidth);
	var imgs = document.querySelectorAll('#banner>img');
	for(var index =0 ;index < imgs.length;index++){
		imgs[index].style.left = sWidth*index + 'px';
	}
	function moveLeft(){
		page++;
		if(page > imgs.length-1){
			page = imgs.length-1;
		}
		move();
	}
	function moveRight(){
				page--;
				if(page < 0){
					page = 0;
				}
				move();
			}
	function move(){
		for(var index = 0;index < imgs.length;index++){
			imgs[index].style.left = sWidth*(index-page) + 'px';
		}

		setTimeout(function(){
			if(page == imgs.length-1){
				page = 0;
				for(var index = 0;index < imgs.length;index++){
					imgs[index].style.transition = 'none';
				}

				for(var index = 0;index < imgs.length;index++){
					imgs[index].style.left = sWidth*(index-page) + 'px';
				}

				setTimeout(function(){
					for(var index = 0;index < imgs.length;index++){
						imgs[index].style.transition = '0.7s left ease-in-out';
					}
				},100);
			}
			setPage(page);
		},700);

	}
	var page = 0;
	var timer = setInterval(moveLeft,2000);


	var leftBtn = document.createElement('div');
			leftBtn.innerHTML = "《";
			leftBtn.classList.add("add");
			banner.appendChild(leftBtn);
			
			var rightBtn = document.createElement('div');
			rightBtn.innerHTML = "》";
			rightBtn.classList.add("add");
			rightBtn.style.right = '0';
			banner.appendChild(rightBtn);
			
			leftBtn.onclick = function(){
				clearTime(timer);
				timer = setInterval(moveLeft,2000);
				moveLeft();
			}
			
			rightBtn.onclick = function(){
				clearTime(timer);
				moveRight();
			}
			function clearTime(t){
				clearInterval(t);
			}
			
			for(var index = 0;index < imgs.length-1;index++){
				var div = document.createElement('div');
				div.classList.add('cp');
				banner.appendChild(div);
				div.style.top = '90%';
				div.style.left = (sWidth/2 + index*40) - ((imgs.length-1)*20 + (imgs.length-1-1)*20)/2 + 'px';
			}
			
			var cp = document.querySelectorAll('.cp');
			for(var index = 0;index < imgs.length-1;index++){
				cp[index].select = index;
				cp[index].onclick = function(e){
					page = e.target.select;
					move();
					clearTime(timer);
					timer = setInterval(moveLeft,2000);
				}
			}
			
			function setPage(p){
				if(p == imgs.length-1){
					p = 0;
				}
				for(var index = 0;index < cp.length;index++){
					cp[index].style.backgroundColor= '';
				}
				cp[p].style.backgroundColor = 'red';
			}
			setPage(0);











}