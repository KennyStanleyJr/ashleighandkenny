
$('.smooth-scroll').on('click', function(e) {
    if (this.hash !== '') {
        console.log(this.hash);
        e.preventDefault();

        const hash = this.hash;

        console.log($(hash).offset().top);
        $('html, body').animate({scrollTop: $(hash).offset().top}, 1000);
    }
});