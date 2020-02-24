imageSlideshow(0,"./img/grain-app-",6,"grain-app-slideshow",5000);
imageSlideshow(0,"./img/db-",4,"db-slideshow",5000);
function imageSlideshow(i,imgUrl,imgCount,containerClass,delay){
    document.getElementsByClassName(containerClass)[0].style.backgroundImage = 'url("' + imgUrl + i + '.png")';
    i++;
    if (i > (imgCount - 1)){i = 0;}
    setTimeout(imageSlideshow,delay,i,imgUrl,imgCount,containerClass,delay);
}