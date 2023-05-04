var typed = new Typed('.type_text', {
    // Waits 1000ms after typing "First"
    typeSpeed: 70,
    loop: true,
    backSpeed: 70,
    smartBackspace: false,
    strings: ['Web Developer.','Programmer.','Web Designer.'],
  });

  $(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 200);
        return false;
      });
  });