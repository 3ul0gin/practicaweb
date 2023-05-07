function activaScroll(selector) {
    var button = document.querySelector(selector);
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var page = document.querySelector('html');
        var origen = Math.max(page.scrollTop);
        //console.log(origen);
        var destino = document.querySelector(this.attributes.href.value).offsetTop;
        //console.log(destino);
        var counter = 0;

        var animation = setInterval(function() {
            counter++;
            //console.log(counter);
            page.scrollTop = origen + (destino*counter*0.1);
            //console.log(origen + (destino*counter*0.1));
        },50);

        setTimeout(function() {
            clearInterval(animation);
        },500);
    });
}

activaScroll('a[href*=about]');
activaScroll('a[href*=speakers]');
activaScroll('a[href*=contacto]');
