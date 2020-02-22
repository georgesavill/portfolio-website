imageSlideshow(0,"grain-app-","a","si",4000);
function imageSlideshow(i,imgName,imgClass,containerClass,delay) {
    var imgs = document.getElementsByClassName(containerClass);
    for (var j = 0; j < imgs.length; j++) {
        imgs[j].style.opacity = "0";
        imgs[j].style.display = "block";
    }
    i++;
    if (i > imgs.length) {i = 1;} 
    else{document.getElementsByClassName(imgClass + (i-1))[0].style.backgroundImage = 'url("../www/img/' + imgName + (i-1) + '.png")';}
    imgs[i-1].style.opacity = "1";
    imgs[i-1].style.display = "block";
    setTimeout(imageSlideshow,delay,i,imgName,imgClass,containerClass,delay);
};