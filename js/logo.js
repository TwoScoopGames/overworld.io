var canvas = document.getElementById("canvas");
var manifest = {
	"images": {
		"logo": "http://overworld.io/img/logo.png",
    	"clouds": "http://overworld.io/img/clouds.png"
	},
	"sounds": {},
	"fonts": {},
	"animations": {}
};
var game = new Splat.Game(canvas, manifest);
game.scenes.add("title", new Splat.Scene(canvas, function() {
  this.clouds = new Splat.AnimatedEntity(15, 5, 200, 0, game.images.get("clouds"), 0,0);
  this.clouds.vx = .01;
}, function(elapsedMilis) {
  if(this.clouds.x > canvas.width){
    this.clouds.x = -this.clouds.width; 
  }
  this.clouds.move(elapsedMilis);
}, function(context) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	this.clouds.draw(context);
  context.drawImage(game.images.get("logo"), 0, 0);
}));
game.scenes.switchTo("loading");