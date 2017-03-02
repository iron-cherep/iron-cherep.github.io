window.onload = function() {
  // init.onPageLoad();
  init.itemHoverEvent();
}

var info = ".page-main__info",
    listItem = ".page-main__list-item",
    init = {

  onPageLoad: function() {
    $(info).slideToggle();
  },

  itemHoverEvent: function() {
    $(listItem).hover(function() {
      $(this).find(info).slideToggle();
    });
  }

}
