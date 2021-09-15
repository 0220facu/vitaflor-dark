$( document ).ready(function() {
  
  var window_width = $(window).width();

  $('.dropdown-menu').on('click', function (e) {
    e.stopPropagation();
    console.log(`${e.target.textContent} clicado!`);
  });


if(window_width < 991){
  $('#submenu-1').on('click', function (e) {
    $('#menu-1').toggleClass('show')
  })

  $('#submenu-2').on('click', function (e) {
    $('#menu-2').toggleClass('show')
  })
}
  
  
  });