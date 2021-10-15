let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600); 
       frameRate(300);
     // A partir de esta linea podemos codificar nuestros dibujos
             let colorFondo = color(0,255,0);

              let x=500;
              direccion=0;
              
              let y=0;
              let xale = 10;
              let dhr =1;
              let dvr = 1;
              let puntos=0;
             draw=function(){
                 background(colorFondo);
                 textSize(50);
                    fill(0,0,0);
                    text("Puntos: "+puntos,400,100);

                 ///PELOTA
                 fill(255,255,255);
                 ellipse(xale,y,20,20);
                 y=y+dvr;
                 xale = xale + dhr;
                 
                 if(xale>=1000){
                     dhr = -1;
                }
                if(y>=600){
                    dvr=0;
                    textSize(60);
                    fill(0,0,0);
                    text("GAME OVER",300,300);

                }
                if(y==0){
                    dvr=+1;
                }
                if(xale==0){
                    dhr =1;
                }

                /* if( y >= 600){
                     y=0;
                     xale=random(1,1000);
                 }*/

                 if(xale <= x+90 && xale >=x-20 && y>=480 && y<=580){
                     textSize(60);
                     fill(222,222,222);
                     text("ATAJADA",200,200);
                     dvr=-1;
                     puntos=puntos+1
                     colorFondo=color(0,0,0);
                     } 
                //arquero
                 fill(255,0,0);
                 stroke(255,255,255);
                 strokeWeight(5);
                 rect(x,500,70,50);
                 
                 x = x + direccion;

                  mousePressed=function(){
                     if(mouseX<500){
                        direccion = -2;
                        colorFondo = color(0,255,0)
                     }
                     if(mouseX>500){
                        direccion = +2;
                        colorFondo = color(0,255,0)
                     }
                }    
                if(x >=926 ){
                    direccion=-2;
                } 
                if(x<= 4){
                    direccion=+2;
                }
                fill(255,255,255);
                rect(0,560,40,40);
                rect(957,557,40,40);
                rect(45,570,950,80);
                }
    //------------------------------------------------------

   }};
   let canvas = document.getElementById("mycanvas"); 
   let processingInstance = new Processing(canvas, sketchProc);