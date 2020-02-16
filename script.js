var gallery = document.getElementsByClassName('gallery-item');

function setImage(img_src) {
    document.getElementById('gallery-main').getElementsByTagName('img')[0].setAttribute("src", img_src)
}

function init() {
    setImage(gallery[0].getElementsByTagName('img')[0].getAttribute('src'))
}
init();

for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', function() {
        var img_src = gallery[i].getElementsByTagName('img')[0].getAttribute('src')
        setImage(img_src)
    }) 
}
