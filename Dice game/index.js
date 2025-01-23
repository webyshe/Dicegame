var randomNumber1= Math.floor(Math.random() * 6)+1;  // to get randoom number
 var randomDiceimage = "dice" + randomNumber1 + ".png";
 var  randomImagesource = "images/" + randomDiceimage;
 var image1 = document.querySelectorAll("img")[0]; // we hve two img 
 image1.setAttribute("src",randomImagesource );

 


 var randomNumber2= Math.floor(Math.random() * 6)+1;  // to get randoom number
 var randomDiceimage2 = "dice" + randomNumber2 + ".png";
 var  randomImagesource2 = "images/" + randomDiceimage2;
 var image2 = document.querySelectorAll("img")[1]; // we hve two img 
 image2.setAttribute("src",randomImagesource2 );

 //DONT NEED  TO WRITE FUNCTION

    
     if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML="player 1 wins";
     }
     if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 wins";
     }else{
        document.querySelector("h1").innerHTML="Draw";
    
     }
