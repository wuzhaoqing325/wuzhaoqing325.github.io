(function(w){

	function OverScene(ctx){
		this.ctx = ctx;
	}

	util.extend(OverScene.prototype,{
		draw:function(){

			this.ctx.save();
			ctx.fillStyle = 'rgba(100,100,100,0.8)';
				ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillStyle = 'red';
				ctx.font = '900 40px 微软雅黑';
				ctx.fillText('GAME OVER!!!', ctx.canvas.width/2,ctx.canvas.height/2);
				this.ctx.restore();

		}
	});

	w.getOverScene = function(ctx){
		return new OverScene(ctx);
	}



})(window);