imageSlideshow(0, "./img/grain-app-", "a", "si", 4000);
function imageSlideshow(i, imgUrl, imgClass, containerClass, delay) {
    var imgs = document.getElementsByClassName(containerClass);
    var imgCount = imgs.length;
    for (var j = 0; j < imgCount; j++) {
        imgs[j].style.opacity = "0";
    }
    if (i < (imgCount - 1)) { imgs[i+1].style.backgroundImage = 'url("' + imgUrl + (i + 1) + '.png")'; }
    i++;
    if (i > imgCount) { i = 1; }
    imgs[i-1].style.opacity = "1";
    setTimeout(imageSlideshow, delay, i, imgUrl, imgClass, containerClass, delay);
};