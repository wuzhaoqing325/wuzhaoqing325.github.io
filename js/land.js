(function(w){
	<!-- 大地背景 -->
	
	function Land(ctx,img,speed){
		this.ctx = ctx;
		this.img = img;
		this.speed = speed ||2;

		this.width = this.img.width;
		this.height = this.img.height;

		Land.len++;

		this.x = this.width*(Land.len-1);
		this.y = this.ctx.canvas.height - this.height;


	}
	Land.len = 0;

	util.extend(Land.prototype,{
		draw:function(){
			this.ctx.drawImage(this.img,this.x,this.y);
		},
		update:function(){
			this.x -= this.speed;
			this.x = this.x < -this.width?this.x+this.width*(Land.len):this.x;
		}
	})

	w.getLand = function(ctx,img,speed){
		return new Land(ctx,img,speed);
	}

})(window);