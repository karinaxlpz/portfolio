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






for (var i = 0; i < imgs.length; i += 1) {
    var parent = imgs[i].parentNode;
    var figure = document.createElement("FIGURE");

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