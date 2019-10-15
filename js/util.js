var util = {
	extend:function(o1,o2){

		for(var key in o2){
			if(o2.hasOwnProperty(key)){
				o1[key] = o2[key];
			}
		}
	
	},

	loadImage:function(imgUrl,fn){
	var imgObj = {};
	var tempImg;
	var loaded = 0;
	var imgLength = 0;

	for(var key in imgUrl){
		imgLength++;

		tempImg = new Image();
		tempImg.onload = function(){
			loaded++;
			if(loaded >= imgLength){
				fn(imgObj);
			}
		};
		tempImg.src = imgUrl[key];
		imgObj[key] = tempImg;
	}

	}
}