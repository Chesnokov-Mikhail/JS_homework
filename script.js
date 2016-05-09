window.onload = function () {
    (function ($) {
        console.log('Привет!')
        $('.context_menu > .context_active').show();
        $('.menu_label').on('click','li',function () {
//            console.log( $( this ).text());
            if (!$(this).hasClass('label_active')) {
                $('.menu_label > .label_active').addClass('label_passive');
                $('.menu_label > .label_active').removeClass('label_active');
                $(this).removeClass('label_passive');
                $(this).addClass('label_active');
                var index = $('.menu_label li').index(this);
//                console.log(index);
                $('.context_menu > .context_active').hide();
//                $('.context_menu > .context_active').fadeOut(800,function () {
//                    $('.context_menu > .context_active').removeClass('context_active');
//                    $('.context_menu div').eq(index).fadeIn(800,function () {
//                    });
 //                   $('.context_menu div').eq(index).addClass('context_active');
 //               });
                $('.context_menu > .context_active').removeClass('context_active');
                $('.context_menu div').eq(index).addClass('context_active');
                $('.context_menu div').eq(index).show();
            }
        });
//        $('.menu_label').on('mouseover','li', function () {
//            if ($(this).hasClass('label_passive')) {
//                $(this).addClass('label_focus');
//            };
//        });
//        $('.menu_label').on('mouseout','li', function () {
//            if ($(this).hasClass('label_focus')) {
//                $(this).removeClass('label_focus');
//            };
//        });
    })(jQuery);
}
