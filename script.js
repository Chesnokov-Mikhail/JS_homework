window.onload = function () {
    (function ($) {
        var progressbar = $( "#progressbar" );
        var value_click = null;
        $.datepicker.formatDate("yy-mm-dd");
        $('#form_reg input[name="birth"]').datepicker({
            autoSize: true,
            dayNamesMin: ["Вс", "Вт", "Ср", "Чт", "Пт", "Сб", "Пн"],
            monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            firstDay: 1,
            dateFormat: "yy-mm-dd"
        });
        progressbar.progressbar({
            value: 2*100/7,
        });
        $('.cont_forma').on('click',':input:not(#reg_button, :radio)', function () {
            value_click = $(this).val();
        });
        $('.cont_forma').on('change',':input:not(#reg_button, :radio)', function () {
            var name_block = $(this).attr('name');
            var val = progressbar.progressbar( "value" );

            console.log('Изменилось поле: ' + name_block);
            console.log('progressbar: ' + val);
            if ($(this).val()) {
                if (!value_click) {
                    progressbar.progressbar("value", val + 100 / 7);
                }
            } else {
                progressbar.progressbar("value", val - 100 / 7);
            }
        });
        $('.cont_forma').on('click','#reg_button',function (event) {
            console.log('Click');
            var success = function (data) {
                console.log(data);
                $(":input").removeClass('error_input');
                $('div.cont_response').empty();
                $('div.cont_response').next().remove();
                if ($.trim(data.result) == 'true') {
                    $('div.cont_response').attr('title', 'Ваши данные прошли проверку');
                    $('div.cont_response').html('Ваши данные прошли проверку');
                } else {
                    var $ol = $('<ol>');
                    $('div.cont_response').attr('title', "Ошибки заполнения формы");
                    dialog = $('div.cont_response').dialog({
                        autoOpen: false
                    });
                    $.each(data.error, function (key, error_name) {
                        var name_input = key.trim().replace(' ','_').toLowerCase();
                        $(":input[name=" + name_input + "]").effect("pulsate");
//                        $(":input[name=" + name_input + "]").addClass('error_input');
                        $ol.append($('<li>').text(error_name));
                    });
                    $ol.css('margin-left', '10px');
                    $('div.cont_response').append($ol);
                    dialog.dialog( "open" );
                };
            };
            $.post('validator.php',$("#form_reg").serializeArray(),success,'json');
            event.preventDefault();
        });
    })(jQuery);
}