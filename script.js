window.onload = function () {

// 1. Найти все элементы h1, являющиеся потомками div и заменить их содержимое на произвольное.
    $('div.task div > h1').text('Заменил все заголовоки h1')

// 2. Установить всем input type="text" произвольное содержимое. Содержимое второго инпута должно отличаться от первого.
    $('div.task input[type="text"]').eq(0).attr('value','Установил значение Первого инпута')
    $('div.task input[type="text"]').eq(1).attr('value','Установил значение Второго инпута')
    // А можно ещё таким образом
    // $('div.task input[type="text"]:first').attr('value','Установил значение Первого инпута')
    // $('div.task input[type="text"]:first').next().next().attr('value','Установил значение Второго инпута')

// 3. Выведите значение option с value=2
    var textOption_val2 = $('#myselect option[value="2"]').text()
    // Выбираем в списке значение option с value=2
    $('#myselect option[value="2"]').attr('selected','selected')
    // Получаем и выводим значение option с value=2
    textOption_val2 = '<p>' + textOption_val2 + '</p>'
    $('#myselect').after(textOption_val2)
    $('#myselect').after('<p>Выбрали и вывели значение option с value=2:</p>')
    $('#myselect').nextAll().addClass('red')
    $('#myselect').nextAll().eq(1).addClass('bold left_padding_20')

// 4. Обернуть текст во втором li тегом b:
    $('div.task ul').children().eq(1).wrap('<b></b>')
    //  А можно ещё таким образом
//    textLi2 = '<b>' + $('div.task ul').children().eq(1).text() + '</b>'
//    $('div.task ul').children().eq(1).html(textLi2)

// 5. Извлеките последний li из предыдущего примера.
    //    Сохраняем элемент DOM в переменной
    var elementLast_li = $('div.task ul > li:last-child').clone()
    // Получаем текст ранее найденного элемента
    var textLast_li = elementLast_li.text()
    //  А можно ещё таким образом
    //    $('div.task ul > li:last-child').text()
    //    $('div.task ul > li').filter(':last').text()

    var pText = document.createElement('p')
    pText.innerText = textLast_li
    $('div.task ul').after(pText)
    $('div.task ul').after('<p>Текст последнего li:</p>')
    $('div.task ul').nextAll().addClass('red')
    $('div.task ul').next().next().addClass('bold left_padding_20')
}
