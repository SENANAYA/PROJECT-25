class Ball
{
    
    constructor(x,y,radius,den)
    {
        if(den<0.4){
        this.res=1
        }else{
            this.res=0.4/den
        }
        var ball_options={
            isStatic:false,
            friction:2,
            
            restitution:0.3*this.res,
            
            density:den
        }
        this.radius=radius
    this.den=den
       this.body = Bodies.circle(x,y,this.radius/3,ball_options);
       this.body.move=false;
       World.add(world,this.body);
	
    }
    display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			// rectMode(CENTER)
			// strokeWeight(4);
			// fill(128,128,128)
			// rect(0,0,this.w, this.h);
            imageMode(CENTER);

	
	image(paperImg,0,0,this.radius/1.5,this.radius/1.5);

			pop()
            if(this.body.position.x>width/2-75&&this.body.position.x<width/2+75){

                if(this.body.position.y>height-170 &&(this.trashed===true===false)){
                   this.body.position.x=2200
                   this.body.position.y=1200
                 //  Matter.Body.setStatic(this.body, true)
                    ballno=ballno+1
                 
                    this.body.move=false
                    this.trashed=true
                }
            }
            if(this.body.position.x>width||this.body.position.x<0||this.body.position.y>height ||this.body.position.y<0){
if((this.trashed===true===false)){
               ball[ballno]= new Ball(200,200,this.radius,this.den)
               }
                
            }
            if(this.body.move===true){
                if (keyCode === UP_ARROW) {

                    
                        Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-25});
                        keyCode= 0
                
                  }
                  if (keyCode === RIGHT_ARROW) {
            
                    Matter.Body.applyForce(this.body,this.body.position,{x:15,y:0});
                    keyCode= 0

                  }
                  if (keyCode === LEFT_ARROW) {
            
                    Matter.Body.applyForce(this.body,this.body.position,{x:-15,y:0});
                    keyCode= 0

                  }
            }
			
	}
}