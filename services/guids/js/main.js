// Мобильное меню (гамбургер)
    $(function () {
        var touch = $('.touch-menu');
        var menu = $('.nav');
        var navIcon = $('#nav-icon');

        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
            navIcon.toggleClass('open');
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 992 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

//попап Заказать обратный звонок
$(document).ready(function(){  
        PopUpHide();
    });
    function PopUpShow(){
        $("#popup-calllback").show();
    }
    function PopUpHide(){
        $("#popup-calllback").hide();
    }

//закрытие попапа Заказать обратный звонок при клике по фону
$(document).mouseup(function (e) {
    var container = $(".popup-calllback-wrapper");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

//Убрать подсказку из textarea
$(document).on('input', '#textArea', function () {
    if ($('#textArea').val()) {
        $('#placeholderDiv').hide();
    } else {
        $('#placeholderDiv').show();
    }      
});