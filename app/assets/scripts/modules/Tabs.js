import $ from 'jquery';

class Tabs{
    constructor(){
        this.tabContent = $('.tab');
        this.tabNav = $('.tabs-nav');
        this.events();
    }

    events(){
        this.tabContent.hide();
        this.tabNav.find('a').on('click', function(e){
            e.preventDefault();
            $('.tabs-nav').find('.current').removeClass('current');
            $(this).addClass('current');
            
            var newTab = $(this.hash);
            var newHeight = newTab.height();
            var container = $(".tab-content");

            newTab.siblings(":visible").fadeOut('fast');
            container.animate({'height' : newHeight}, 300, function(){
                newTab.fadeIn('fast');
              });

            
        }).first().click();

        $('.tab-link').click(function(){
            $('html,body').animate({
                scrollTop: $('#top').offset().top
            }, 400);
        });
    }



}



export default Tabs;










