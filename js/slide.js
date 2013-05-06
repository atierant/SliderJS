$('#slider a').click(function() {
    history.pushState({ path: this.path }, '', this.href)
    $.get(this.href, function(data) {
        $('#slider').slideTo(data)
    })
    return false
})
