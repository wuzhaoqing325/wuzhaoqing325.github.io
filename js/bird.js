(function(w){


	function Bird(ctx,img,widthFrame,heightFrame,x,y){

		this.ctx = ctx;
		this.img = img;
		this.widthFrame = widthFrame;
		this.heightFrame = heightFrame;
		this.x = x;
		this.y = y;

		this.width = this.img.width/this.widthFrame;

		this.height = this.img.height/this.heightFrame;

		this.currentFrame = 0;

		

		// 小鸟下落的速度
		this.speed = 0.5;

		// 加速度
		this.speedPlus = 0.1;

		this._bind();
		

	}

	util.extend(Bird.prototype,{
		draw:function(){
			// 当下落速度为1时，旋转10度
			var baseRadian = Math.PI/180*10;
			var maxRadian = Math.PI/180*45;

			// 根据速度计算旋转的弧度
			var rotateRadian = baseRadian*this.speed;
			rotateRadian = rotateRadian >=maxRadian ?maxRadian:rotateRadian;

			this.ctx.save();

			this.ctx.translate(this.x+this.width/2, this.y+this.height/2);

			this.ctx.rotate(rotateRadian);
			this.ctx.drawImage(this.img, this.width*this.currentFrame,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);


			this.ctx.restore();

		},
		update:function(){
			
			this.currentFrame = ++this.currentFrame>=this.widthFrame?0:this.currentFrame;

			// 让小鸟不断下落
			this.y +=this.speed;
			// 刷新下落速度
			this.speed +=this.speedPlus;

		},
		_bind:function(){
			var self = this;
			this.ctx.canvas.addEventListener('click', function(){
				self.speed = -3;
			})
		}
	})



		
	// 用来存储已经创建好的鸟的实例对象
	var bird = null;
	// 工厂模式
	w.getBird = function(ctx,img,widthFrame,heightFrame,x,y){
		
		// 单例模式，整个游戏只要一个bird就够了
		if(!bird){
			bird = new Bird(ctx,img,widthFrame,heightFrame,x,y);
		}
		return bird;
	}

})(window);