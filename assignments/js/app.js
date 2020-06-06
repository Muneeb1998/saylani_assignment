$(document).ready(function() {
  alert('I created home, curtains and contact page, i also created sub-page of curtain type of first image')
    $('.owl-carousel').owlCarousel({
      loop: true,
      stagePadding: 50,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    })
  })
$(document).on('click','.fa-eye',function(){
    var src = $(this).parent().parent().parent().find('.view').attr('src');
    var img = image(src);
    $('.modal-body').html(img)
    $('.modal').modal('show');
});
$(document).on('click','.fa-download',function(){
    var src = $(this).parent().parent().parent().find('.view').attr('src');    
    window.open(src);
})
function image(src){
    var image = '<img src="'+src+'">';
    return image
}