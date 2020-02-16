
var gallery_item = document.getElementsByClassName('gallery-item')
var gallery_main_div = document.getElementById('gallery-main');


for (let i = 0; i < gallery_item.length; i++) {
    gallery_item[i].addEventListener('click', function() {
        // უნდა აიღო image-ის src
        var item_img = this.getElementsByTagName('img')[0]
        var img_src = item_img.getAttribute('src')

        //ჩავსვა gallery-main-ის img-ში
        gallery_main_div.getElementsByTagName('img')[0].setAttribute("src", img_src)
    });
}


function init() {
    // პირველი ფოტოს src ჩასვას gallery-main-ის img-ში
    var first_item_src = gallery_item[0].getElementsByTagName('img')[0].getAttribute('src');
    gallery_main_div.getElementsByTagName('img')[0].setAttribute("src", first_item_src)
}
init();