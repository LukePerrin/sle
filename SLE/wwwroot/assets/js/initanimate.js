$(".show-content").click(function () {
    $(".hide-content").slideToggle("slow");
});

$('[data-bs-hover-animate]')
    .mouseenter(function () { var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
    .mouseleave(function () { var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });