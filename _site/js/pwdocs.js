var pathname = window.document.location.pathname;


function goto(url, addEntry, id){
    var show_preloader = true;
    if (url==null || addEntry==null || id==null) {
        return;
    }

    $('.docs-nav-list-link').removeClass('is-active');
    $('#' + id).addClass('is-active');

    $('.maincontent').ready(function(){
        if (show_preloader) {
            $('.showbox').css('display','block'); 
        } else{
            $('.showbox').css('display','none'); 
        };
    });
    // Add support for load() function to enable javascript for loaded content
    $('.maincontent').load(url + ' .doc-content', function(result){
        show_preloader = false;
        $result = $(result);
        $result.find("script").appendTo('.maincontent');
        $.getScript("/js/pwdocs-load.js");
        $('.showbox').css('display','none');
    });

    // Scroll page to its start part if no anchor present at url
    if (url.indexOf('#') < 0 ){
        $('body').animate({scrollTop:0},'slow');
    }

    $.get(url, function(e){
    	var title = $(e).filter('title').text();
    	$(document).attr('title', title);
    });

    var state = new Object();
    state.id = id;
    if (addEntry==true) {
        history.pushState(state, null, url);
    }
};

window.addEventListener("popstate", function(e){
    if (location.pathname!=pathname&&e.state!=null) {
        goto(location.pathname, false, e.state.id);
    }
},false);

$(document).ready(function() {

    if ($(window).width() <= 768){
        $("table tbody tr td").each(function () {
            $(this).attr("data-label", $(this).parents("table").find("thead tr").children().eq($(this).index()).text());
        });
    };

    $('.docs-nav-list-link').on('click', function(e){

        if ($(this).attr('path')!=null) {
            goto($(this).attr('path'), true, $(this).attr('id'));
        }

        if ($(this).hasClass('js-expand-maintitle-trigger')) {
            $('.section-sidebar .docs-nav-list').not($(this).siblings('ul')).each(function() {
                $(this).slideUp(function () {
                    $('.maincontent.mobile').css('margin-top', $('.sidebar-holder').outerHeight(true));
                });
            });
            $(this).siblings('ul').slideDown(function(){
                $('.maincontent.mobile').css('margin-top', $('.sidebar-holder').outerHeight(true));
            });
        }

        if ($(this).hasClass('js-expand-subtitle-trigger')) {
            $('.docs-nav-list .docs-nav-subtitle-list').not($(this).siblings('ul')).each(function() {
                $(this).slideUp(function () {
                    $('.maincontent.mobile').css('margin-top', $('.sidebar-holder').outerHeight(true));
                });
            });
            $(this).siblings('ul').slideDown(function () {
                $('.maincontent.mobile').css('margin-top', $('.sidebar-holder').outerHeight(true));
            });
        }

    });

    $(":header").each(function(){
    	var text = $('<a class="anchor" id=' + $(this).attr('id') + '></a>');
    	$(this).prepend(text);
    	$(this).removeAttr('id');
    });

    $('.docs-nav-list-link').each(function(){
    	if ($(this).attr('path')==pathname) {
    		$(this).addClass('is-active');
    		var id = $(this).attr('id');
    		var i = 0;
            // Skip 'nav-'
    		for (i = 4; i < id.length; i++) {
    			if (id[i]==='-') {
    				break;
    			}
    		}
    		var section = id.substring(0, i);
    		var rest = id.substring(i+1, id.length);
    		for (i = 0; i < rest.length; i++) {
    			if (rest[i]==='-') {
    				break;
    			}
    		}
    		var item = rest.substring(0,i);
    		item = section + '-' + item;
			$('#' + section).siblings('ul').slideDown();
			$('#' + item).siblings('ul').slideDown();
    	}
    });

    $('.docs-code-tabs__tab').on('click', function(e) {
        e.preventDefault();

        var parentId = $(this).parent().parent().parent().attr('id');
        var lang = $(this).attr('lang');

        $('#' + parentId + ' .docs-code-tabs__tab').removeClass('is-active');
        $('#' + parentId + ' .docs-code-tabs__body').removeClass('is-active');
        $(this).addClass('is-active');
        $('#' + parentId + ' .js-lang-' + lang).addClass('is-active');
        $('.showbox').css('display','none'); 
    });

    $('.showbox').css('display','none');

    $('#section-icon a').on('click', function () {
        if ($('.section-sidebar').attr('class') === 'section-sidebar' || $('.modules-section-sidebar').attr('class')==='modules-section-sidebar'){
            $('.section-sidebar').addClass('mobile');
            $('.modules-section-sidebar').addClass('mobile')
            $('.maincontent').addClass('mobile');
            $('#section-icon a').html('&#9747');

        }else {
            $('.section-sidebar').removeClass('mobile');
            $('.modules-section-sidebar').removeClass('mobile');
            $('#section-icon a').html('&#9776');
            $('.maincontent').removeClass('mobile');
        }
        $('.maincontent').css('margin-top', $('.sidebar-holder').outerHeight(true));
    });
});
