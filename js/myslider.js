$(window).bind('popstate', function (e) {
    if (e.originalEvent.state && e.originalEvent.state.path) {
        $.get(e.originalEvent.state.path, function(data) {
            $('#slider').slideTo(data);      
        });
        return false;
    }
    return true;
};

$.fn.slideTo = function(data) {
    var width = parseInt($('#slider').css('width'));
    var transfer = $('<div class="transfer"></div>').css({ 'width': (2 * width) + 'px' });
    var current = $('<div class="current"></div>').css({ 'width': width + 'px', 'left': '0', 'float': 'left' }).html($('#slider').html());
    var next = $('<div class="next"></div>').css({ 'width': width + 'px', 'left': width + 'px', 'float': 'left' }).html(data);
    transfer.append(current).append(next);
    $('#slider').html('').append(transfer);
    transfer.animate({ 'margin-left': '-' + width + 'px' }, 300, function () {
        $('#slider').html(data);
    });
}
