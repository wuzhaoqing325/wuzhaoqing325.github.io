(function(w){
	// 天空背景

	function Sky(ctx,img,speed){
		this.ctx = ctx;
		this.img = img;
		this.speed = speed ||2;

		Sky.len++;

		this.width = this.img.width;
		this.height = this.img.height;

		this.x = this.width*(Sky.len-1);
		this.y = 0;
	}
	Sky.len = 0;

	util.extend(Sky.prototype,{
		draw:function(){

			this.ctx.drawImage(this.img,this.x, this.y);
		},
		update:function(){
			this.x -= this.speed;
			this.x = this.x <-this.width?this.x+this.width*Sky.len:this.x;
		}
	})

	w.getSky = function(ctx,img,speed){
		return new Sky(ctx,img,speed);
	}
})(window);