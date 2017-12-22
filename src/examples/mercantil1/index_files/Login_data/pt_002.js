$(window).bind('load', function() {
    var preload = new Array();
    $(".hover").each(function() {
        s = $(this).attr("src").replace(/\.(.+)$/i, "_over.$1");
        preload.push(s)
    });
    var img = document.createElement('img');
    $(img).bind('load', function() {
        if(preload[0]) {
            this.src = preload.shift();
        }
    }).trigger('load');
});

$(document).ready(function() {
    /* general hovers */
    $(".hover").each(function() {
        if ($(this).attr("src").match(/_over\.(.+)$/i)) {
            $(this).removeClass("hover");
        }
    });
    $(".hover").hover(function() {
        s = $(this).attr("src").replace(/\.(.+)$/i, "_over.$1");
        $(this).attr("src", s);
    }, function() {
        s = $(this).attr("src").replace(/_over\.(.+)$/i, ".$1");
        $(this).attr("src", s);
    });
});
