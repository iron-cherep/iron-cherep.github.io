window.onload = function() {
  init.itemClickEvent();
}

var $listItem = $(".page-main__list-item"),
    $itemButton = $(".project-button"),
    info = ".page-main__info",
    init = {

      itemHoverEvent: function() {
        $listItem.hoverIntent(function() {
          $(this).find(info).slideToggle(600);
        });
      },

      itemClickEvent: function() {

        $itemButton.on("click", function() {

          var $thisItem = $(this).siblings(info),
              allItems = $itemButton.siblings(info);

          if (!$thisItem.hasClass("active")) {
            allItems.removeClass("active").slideUp(600);
            $thisItem.addClass("active").slideDown(600);
          } else {
            allItems.removeClass("active").slideUp(600);
          }
        });

      }

    }
