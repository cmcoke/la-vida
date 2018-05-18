import $ from 'jquery';

class Tabs{
    constructor(){
        this.tabContent = $('.tab');
        this.tabNav = $('.tabs-nav');
        this.events();
    }

    events(){
        $('.tab').hide();
        $('.tabs-nav a').bind('click', function(e){
           $('.tabs-nav a.current').removeClass('current');
           $('.tab:visible').fadeOut("fast");
           $(this.hash).fadeIn("slow");
           $(this).addClass('current');
           e.preventDefault();
       }).filter(':first').click();

       $('.tab-link').click(function(){
            $('html,body').animate({
                scrollTop: $('#top').offset().top
            }, 600);
        });

    }



}



export default Tabs;
