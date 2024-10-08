(function(w, d) {
    var targetLocation = function() {
        var url = '';
        if (w.backOfferUrl) {
            url = w.backOfferUrl
        } else {
            return
        }
        w.history && w.history.pushState && w.history.pushState(null, null, w.location);
        w.addEventListener && w.addEventListener('popstate', function() {
            w.location = url
        }, !1)
    };
    (function() {
        if (w.addEventListener) {
            w.addEventListener('pageshow', function() {
                setTimeout(targetLocation, 0)
            }, !1)
        } else {
            setTimeout(targetLocation, 0)
        }
    }())
}(window, document));