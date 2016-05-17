window.onload = function () {
    (function ($) {
        $('.cont_forma').on('click','#reg_button',function (event) {
            console.log('Click');
            var success = function (data) {
                if ($.trim(data) == 'true') {
                    $('div.cont_response').html('Ваши данные прошли проверку');
                } else {
                    $('div.cont_response').html('Ваши данные не прошли проверку');
                };
            };
            $.post('validator.php',$("#form_reg").serializeArray(),success);
            event.preventDefault();
        });
    })(jQuery);
}