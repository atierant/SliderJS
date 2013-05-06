$(window).bind('popstate', function() {
    $('#slider').slideTo(location.pathname)
})
