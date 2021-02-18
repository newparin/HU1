"use strict";
$(document).ready(function() {
    function e(e) {
        var o = Date.parse(e) - Date.parse(new Date),
            t = Math.floor(o / 1e3 % 60),
            n = Math.floor(o / 1e3 / 60 % 60);
        return {
            total: o,
            hours: Math.floor(o / 36e5 % 24),
            minutes: n,
            seconds: t
        }
    }
    $(".slider__wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1
    });
    var o = new Date(Date.parse(new Date) + 18e5);
    ! function(o, t) {
        function n() {
            var o = e(t);
            a.innerHTML = ("0" + o.hours).slice(-2), s.innerHTML = ("0" + o.minutes).slice(-2), l.innerHTML = ("0" + o.seconds).slice(-2), o.total <= 0 && clearInterval(i)
        }
        var r = document.getElementById(o),
            a = r.querySelector(".hours"),
            s = r.querySelector(".minutes"),
            l = r.querySelector(".seconds");
        n();
        var i = setInterval(n, 1e3)
    }("clockdiv", o)

    $('.scrollTo').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
            $(scroll_el).find("[name='name']").focus();
        }
        return false;
    });

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        if (geoKey == 357 || geoKey == 272) {
            $("body").addClass('bel');
        } else {
            $("body").removeClass('bel');
        }
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });
});

