$('.docs-code-tabs__tab').on('click', function(e) {
	e.preventDefault();

	var parentId = $(this).parent().parent().parent().attr('id');
	var lang = $(this).attr('lang');

	$('#' + parentId + ' .docs-code-tabs__tab').removeClass('is-active');
	$('#' + parentId + ' .docs-code-tabs__body').removeClass('is-active');
	$(this).addClass('is-active');
	$('#' + parentId + ' .js-lang-' + lang).addClass('is-active');
});

$(":header").each(function(){
	var text = $('<a class="anchor" id=' + $(this).attr('id') + '></a>');
	$(this).prepend(text);
	$(this).removeAttr('id');
});

if ($(window).width() <= 768){
    $("table tbody tr td").each(function () {
        $(this).attr("data-label", $(this).parents("table").find("thead tr").children().eq($(this).index()).text());
    });
};

$('.docs-img').on('click', function () {
    var dom = $(this).html();
    $('.img-container-content').html(dom);
    $('.img-container').fadeIn(200);
});

$('.img-container').not('.img-container-content').on('click', function () {
    $('.img-container').fadeOut(200);
});