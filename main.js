$(() => {
    $('.icon.gmail').mouseover(() => {
        console.log('test');
        $('.contact-label').empty();
        $('.js-email-label').html('jacksurtees@gmail.com');
    });
    $('.icon.linkedin').mouseover(() => {
        $('.contact-label').empty();
        $('.linkedin-label').html('<a href="www.linkedin.com/in/john-surtees">www.linkedin.com/in/john-surtees</a>')
    })
    $('.icon.github').mouseover(() => {
        $('.contact-label').empty();
        $('.github-label').html('<a href="https://github.com/jsurt">https://github.com/jsurt</a>')
    })
    $('.icon.gmail').on('touchstart', () => {
        $('.contact-label').empty();
        $('.js-email-label').text('jacksurtees@gmail.com');
    });
    $('.icon.linkedin').on('touchstart', () => {
        $('.contact-label').empty();
        $('.linkedin-label').html('<a href="www.linkedin.com/in/john-surtees">www.linkedin.com/in/john-surtees</a>')
    })
    $('.icon.github').on('touchstart', () => {
        $('.contact-label').empty();
        $('.github-label').html('<a href="https://github.com/jsurt">https://github.com/jsurt</a>')
    })
    $('#contact').click(() => {
        $('.contact-label').empty();
    });
})
