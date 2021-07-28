class foot{
    constructor(){
        this.path= []
        this.print = []
        this.image1= loadImage("Untitled.png");

    }

    display(){
        

        var prints= [player.x-150,player.y]
        if(keyCode===39 || keyCode===37 ){
            
            this.print.push(prints);

        }
        console.log(prints)
        for(var k =0; k<this.print.length;k++){
           if(this.print[k][0]%50===0){
            image(this.image1,this.print[k][0] , this.print[k][1]+10,300,200 )
           } 
        }
            //this.print[k].addImage(this.image);
        
       
            
        
     

    }

}