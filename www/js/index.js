imageSlideshow(
    0,
    [
        "./img/grain-app-0.png",
        "./img/grain-app-1.png",
        "./img/grain-app-2.png",
        "./img/grain-app-3.png",
        "./img/grain-app-4.png",
        "./img/grain-app-5.png"
    ],
    "grain-app-slideshow",
    5000
);

function imageSlideshow(i,imgUrls,containerClass,delay){
    document.getElementsByClassName(containerClass)[0].style.backgroundImage = 'url("' + imgUrls[i] + '")';
    i++;
    if (i > (imgUrls.length - 1)){i = 0;}
    setTimeout(imageSlideshow,delay,i,imgUrls,containerClass,delay);
}