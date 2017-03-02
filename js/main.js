window.onload = function() {
  init.itemHoverEvent();
}

var info = ".page-main__info",
    listItem = ".page-main__list-item",
    init = {


  itemHoverEvent: function() {
    $(listItem).hoverIntent(function() {
      $(this).find(info).slideToggle(600);
    });
  }

}
