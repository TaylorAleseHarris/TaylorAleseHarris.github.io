/*********************************************************************
***
#Original Author: Taylor Harris #
#Date Created: 6/16/2023 #
#Version: 1 #
#Date Last Modified: 6/16/2023 #
#Modified by: Taylor Harris #
#Modification log:              #
6/16/2023 - Created page. 
***
******************************************************************** */

$(function () {
    var topoffset = 55;
  
    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=\\#]:not([href=\\#])').click(
      function () {
        if (
          location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate(
              {
                scrollTop: target.offset().top - topoffset + 2
              },
              500
            );
            return false;
          } //target.length
        } //click function
      }
    ); //smooth scrolling
  
    $(window).on('activate.bs.scrollspy', function () {
      var hash = $('.site-nav')
        .find('a.active2')
        .attr('href');
  
      if (hash !== '#page-hero') {
        $('header nav').addClass('inbody');
      } else {
        $('header nav').removeClass('inbody');
      }
  
      $('#page-media .layout-animation').css(
        'visibility: hidden'
      );
  
      if (hash === '#page-media') {
        $('#page-media .layout-animation').addClass(
          'animated fadeInRight'
        );
      }
    });
  
    $('#site-modal').on('show.bs.modal', function (event) {
      $(this)
        .find('.modal-content img')
        .attr('src', $(event.relatedTarget).data('highres'));
    });
  });

  // COLLAPSIBLES
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
        this.classList.toggle("active2");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// INNER COLLAPSIBLES

var acc = document.getElementsByClassName("inner-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
        this.classList.toggle("active2");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// ACCORDION SLIDE

$(document).ready(() =>
    $(".accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true,
        active: false
    })
)
