(function(w){
	function Scene(ctx,imgObj){
		this.ctx = ctx;
		this.imgObj = imgObj;

		// 听众队列
		this.listeners = [];

		this.roles = [];
		this._initRoles();
	}
	util.extend(Scene.prototype,{
		_initRoles:function(){
			// 天空2个
		this.roles.push(getSky(this.ctx,this.imgObj.sky,3));
		this.roles.push(getSky(this.ctx,this.imgObj.sky,3));

		// 大地4个
		for(var i=0;i<4;i++){
			this.roles.push(getLand(this.ctx,this.imgObj.land,3));
		}
		
		// 管道6个
		
		for(var i=0;i<6;i++){
			this.roles.push(getPipe(this.ctx,this.imgObj.pipeDown,this.imgObj.pipeUp,150,this.imgObj.land.height,3));
		}

		// 小鸟1个
		this.roles.push(getBird(this.ctx,this.imgObj.bird,3,1,10,10));
		
		},
		addListener:function(listener){
			this.listeners.push(listener);
		},
		triggerBirdOver:function(){
			this.listeners.forEach(function(liste){
				liste();
			})
		},
		draw:function(){
			
			// 每次绘制新的游戏画面时，
			// 先判断小鸟有没有碰撞
			// 如果碰撞，暂停定时器	

			var bird = getBird();
			var birdCoreX = bird.x + bird.width/2;
			var birdCoreY = bird.y + bird.height/2;
			// 如果小鸟碰撞了
			if(this.ctx.isPointInPath(birdCoreX, birdCoreY) ||birdCoreY<0||birdCoreY>(this.ctx.canvas.height-this.imgObj.land.height)){

				this.triggerBirdOver();
			}else{
				// 清除上一次六个管道的路径
			this.ctx.beginPath();

			this.roles.forEach(function(role){
				role.draw();
				role.update();
			});
			}			
		}
	});

	w.getGameScene = function(ctx,imgObj){
		return new Scene(ctx,imgObj);
	}






})(window);