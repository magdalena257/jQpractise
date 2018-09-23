const $btn = $('.interface');

function changeProp() {

    if ($(this).hasClass('orange')) {
        $('body').attr('class', 'orange');
    }
    if ($(this).hasClass('green')) {
        $('body').attr('class', 'green');
    }
    if ($(this).hasClass('increase')) {
        $('p').animate({
            'font-size': '+=2px'
        }, 500);
    }
    if ($(this).hasClass('move')) {
        $('p').animate({
            'letter-spacing': '+=2px'
        }, 500);
    }

}
$btn.on('click', changeProp);