function aliens(x, y){ //temp variables 
    this.x = x; 
    this.y = y;

    //code here is array of aliens and need to be placed inside render function 
    
    for(var i = 0; i< 6; i++){
        aliens[i] = new aliens(i*80+80, 60)
    }




    
    //aliens description

    this.show = function(){ 
        fill(255, 0, 200); //gives a purple color
        ellipse(this.x, this.y, 60, 60); //shape of the aliens
    }

 
}