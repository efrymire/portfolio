// Celebrate p5

    var quantity = 1000;
    var confetti = [];
    
    function setup() {
      createCanvas(window.innerWidth,window.innerHeight);
      for (var i=0; i<quantity; i++) {
        confetti.push(new Celebrate(color(random(255),random(255),random(255)),random(width),0,random(0,4)));
      }
    }
    
    function draw() {
      background(255);
      for (var i=0; i<quantity; i++) {
        confetti[i].fall();
        confetti[i].display();
      }
    }
    
    function Celebrate(color,xpos,ypos,xspeed) {
      //property
      this.color = color;
      this.xpos = xpos;
      this.ypos = ypos;
      this.xspeed = xspeed;
    
      //method
      this.display = function(){
        stroke("white");
        fill(this.color);
        ellipse(this.xpos,this.ypos,6,6);
      }
      this.fall = function(){
        this.ypos = this.ypos + this.xspeed;
        if(this.ypos > window.innerHeight){
          this.ypos = 0
          this.xspeed = random(0,5);
        }
      }
    }