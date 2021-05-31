
// HORIZONTAL SCROLL
const slider = document.querySelector('.img-slider');
var imgs = slider.getElementsByTagName('img');
// = [];

/*
var element = document.querySelector('.img-slider img');
var parent = element.parentNode;
var figure = document.createElement("FIGURE");

parent.replaceChild(figure, element);
figure.appendChild(element);
var figCaption = document.createElement("FIGCAPTION");
let caption = "h";
var node = document.createTextNode(caption);

figCaption.appendChild(node); 
element.after(figCaption); 

*/
//var elements = document.querySelector('.img-slider img');


var startGame;
var cards = 16;
var newDeck = [];

startGame = function(){
    var startBtn = document.getElementById('start');
    var board = document.getElementById('game-board');
    var backside = document.createElement("div");
    backside.className = 'card';

    startBtn.onclick = function(){
        removeButton = document.getElementById("start");
        removeButton.parentNode.removeChild(removeButton);
    
        for(var i = 0; i < cards; i++){ 
            var backside = document.createElement("div");
            backside.className = 'card';
            board.appendChild(backside);
        }
    };
};





for (var i = 0; i < imgs.length; i += 1) {
   var parent = imgs[i].parentNode;
   var figure  = document.createElement("FIGURE");

    parent.replaceChild(figure, imgs[i]);
    figure.appendChild(imgs[i]);




    // console.log(parent);
    // var figCaption = document.createElement("FIGCAPTION");

    // if (i < 8) {
    //     let caption = `0${i + 1}/0${imgs.length + 1}`;
    //     var node = document.createTextNode(caption);

    //     figCaption.appendChild(node);
    //     imgs[i].after(figCaption);
    //     console.log(figCaption);


    // } else {
    //     let caption = `${i + 1}/${imgs.length + 1}`;
    //     var node = document.createTextNode(caption);

    //     figCaption.appendChild(node);
    //     imgs[i].after(figCaption);
    // }

}




