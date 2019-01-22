---
layout: null
sitemap:
  exclude: 'yes'
---

function showBlog() {
    $('.about').hide()
    $('.words').show()
}

function showAbout() {
    $('.about').show()
    $('.words').hide()
}

var buttonActions = {
    'blog-button': showBlog,
    'about-button': showAbout,
}

$(document).ready(function () {
  $('#blog-link').click(function (e) {
      showBlog()
  })
  for (var buttonClass in buttonActions) {
      $('a.' + buttonClass).click(function (e) {
          buttonActions[e.target.className]()
          if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
          currentWidth = $('.panel-cover').width()
          if (currentWidth < 960) {
              $('.panel-cover').addClass('panel-cover--collapsed')
          } else {
              $('.panel-cover').css('max-width', currentWidth)
              $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
          }
      })


      if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
          $('.panel-cover').addClass('panel-cover--collapsed')
      }

      $('.btn-mobile-menu').click(function () {
          $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
          $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
      })

      $('.navigation-wrapper .blog-button').click(function () {
          $('.navigation-wrapper').toggleClass('visible')
          $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
      })

  }})
