import $ from "jquery";
$(document).ready(function () {
    $("ul.benefits__tabs").on("click", "li:not(.benefits__tab_active)", function () {
        $(this)
            .addClass("benefits__tab_active").siblings().removeClass("benefits__tab_active")
            .closest("div.container").find("div.benefits__content").removeClass("benefits__content_active").eq($(this).index()).addClass("benefits__content_active");
    });
});