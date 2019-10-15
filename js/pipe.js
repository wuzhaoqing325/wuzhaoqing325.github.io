(function(w){

	function Pipe(ctx,imgDown,imgUp,space,landHeight,speed){

		this.ctx = ctx;
		this.imgDown = imgDown;
		this.imgUp = imgUp;
		this.space = space;
		this.landHeight = landHeight;
		this.speed = speed;

		// 管道的最小高度
		this.minHeight = 100;

		// 管道的默认高度
		this.width = this.imgDown.width;
		this.height = this.imgDown.height;

		Pipe.len++;

		this.x = 300+this.width*3*(Pipe.len-1);
		this.y = 0;

		this._init();

	}
	Pipe.len = 0;

	util.extend(Pipe.prototype,{
		_init:function(){
			var maxHeight = this.ctx.canvas.height - this.landHeight-this.space-this.minHeight;

			var randomHeight = maxHeight*Math.random();
			randomHeight = randomHeight<this.minHeight?this.minHeight:randomHeight;


			this.downY = randomHeight-this.height;

			this.upY = randomHeight + this.space;

		},
		draw:function(){
			this.ctx.drawImage(this.imgDown, this.x, this.downY);
			this.ctx.drawImage(this.imgUp, this.x, this.upY);
			this._drawPath();

		},
		_drawPath:function(){
			this.ctx.rect(this.x,this.downY,this.width,this.height);
			this.ctx.rect(this.x,this.upY,this.width,this.height);
			this.ctx.stroke();



		},
		update:function(){
			this.x -= this.speed;
			// 管道走出画布，向右拼接，同时重新生成高度
			if(this.x<-this.width){
				this._init();
				this.x +=this.width*3*(Pipe.len);
			}

		}
	})



	w.getPipe = function(ctx,imgDown,imgUp,space,landHeight,speed){
		return new Pipe(ctx,imgDown,imgUp,space,landHeight,speed);
	}

})(window);