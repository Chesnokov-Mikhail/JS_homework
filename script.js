window.onload = function () {
    (function ($) {
        $('.cont_forma').on('click','#reg_button',function (event) {
            console.log('Click');
            var success = function (data) {
<<<<<<< HEAD
                if ($.trim(data) == 'true') {
                    $('div.cont_response').html('Ваши данные прошли проверку');
                } else {
                    $('div.cont_response').html('Ваши данные не прошли проверку');
                };
            };
            $.post('validator.php',$("#form_reg").serializeArray(),success);
=======
                console.log(data);
                $(":input").removeClass('error_input');
                $('div.cont_response').empty();
                $('div.cont_response').next().remove();
                if ($.trim(data.result) == 'true') {
                    $('div.cont_response').html('Ваши данные прошли проверку');
                } else {
                    var $ol = $('<ol>');
                    $('div.cont_response').html('Ошибки заполнения формы:');
                    $.each(data.error, function (key, error_name) {
                        var name_input = key.trim().replace(' ','_').toLowerCase();
                        $(":input[name=" + name_input + "]").addClass('error_input');
                        $ol.append($('<li>').text(error_name));
                    });
                    $('div.cont_response').after($ol);
                };
            };
            $.post('validator.php',$("#form_reg").serializeArray(),success,'json');
>>>>>>> lesson6
            event.preventDefault();
        });
    })(jQuery);
}