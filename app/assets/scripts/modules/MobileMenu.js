import $ from 'jquery';

class MobileMenu{
  constructor(){
   this.menuIcon = $(".mobile-menu-button");
   this.hamburgerIcon = $(".mobile-menu-button__hamburger");
   this.menuContent = $(".site-menu");
   this.events();
  }

  events(){
    this.menuIcon.click(this.toogleTheMenu.bind(this));
  }

  toogleTheMenu(){
    this.menuContent.toggleClass("site-menu--is-open");
    this.hamburgerIcon.toggleClass("site-menu--is-open");
  }

}


export default MobileMenu;
