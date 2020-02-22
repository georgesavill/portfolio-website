var ssi = 0;
var t = 4000;
ss();
function ss() {
    var imgs = document.getElementsByClassName("si");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = "0";
        imgs[i].style.display = "block";
    }
    ssi++;
    if (ssi > imgs.length) {ssi = 1;} 
    else if (ssi < imgs.length) {document.getElementsByClassName("a" + (ssi+1))[0].style.backgroundImage = 'url("../www/img/grain-app-' + (ssi+1) + '.png")';}
    imgs[ssi-1].style.opacity = "1";
    imgs[ssi-1].style.display = "block";
    setTimeout(ss, t);
};