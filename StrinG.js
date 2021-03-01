class String{
    constructor(A,B){
    
            var option

            option = {
            bodyA:A,
            bodyB:B,
            stiffness:0.04,
            length:15
            
            
        }
        this.string = Constraint.create(option);
        World.add(world,this.string);
        
        
    }
    display(){
        var Apos=this.string.bodyA.position
        var Bpos=this.string.bodyB.position
        line(   Apos.x, Apos.y,Bpos.x,Bpos.y)
         
    }
}




