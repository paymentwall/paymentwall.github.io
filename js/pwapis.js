$(document).ready(function() {
	main.init();

})

const main = {

    options: {

    },
    sources: {
        headerHeight: $('.page-header').outerHeight()
    },
    init: function(options) {
        main.options = $.extend(main.options, options);

        main.tools.highlightNavigation.call(this, null);

        $(window).on('scroll', function(){
            main.tools.highlightNavigation.call(this, null);
        });

        $('.nav-list-link').on('click', function () {
            if ($(this).hasClass('js-expand-trigger')){
                $('.section-sidebar a').not($(this)).each(function(){
                    $(this).removeClass('is-active');
                    $(this).siblings('ul').slideUp();
                });
                $(this).addClass('is-active');
                $(this).siblings('ul').slideDown();
            }

            if ($(this).hasClass('leaf')){
                $('.section-sidebar a').not($(this)).each(function(){
                    $(this).removeClass('is-active');
                });
                $(this).addClass('is-active');
            }
        });

        $('.code-tabs__tab').on('click', function(e) {
            e.preventDefault();
            main.tools.showCodeTab.call(this, null);
        });

        $('#section-icon a').on('click', function (e) {
            if ($('.section-sidebar').attr('class') === 'section-sidebar') {
                $('#api_nav').css('z-index','20');
                $('.section-sidebar').addClass('mobile');
                $('#section-icon a').html('&#9747');
            } else {
                $('.section-sidebar').removeClass('mobile');
                $('#section-icon a').html('&#9776');
                $('#api_nav').css('z-index','0');
            }
        });

        $(".article").each(function(){
            var text = $('<a class="anchor" id=' + $(this).attr('id') + '></a>');
            $(this).prepend(text);
            $(this).removeAttr('id');
        });

        if ($(window).width() <= 992){
            $('.reference-col__tab').each(function () {
               if ($(this).text().replace(/\s/g,"") == ""){
                   $(this).css('display','none');
               }
            });
        };

        this.load();
    },

    load: function() {

    },

    reload: function(options) {
        main.options = $.extend(main.options, options);
        this.load();
    },

    find: function(filter) {

    },

    tools: {

        highlightNavigation: function(){
            var $navigationLinks = $('.nav-list-link');
            var $navigationExpandLinks = $('.js-expand-trigger');

            var $sections = $($(".article").get().reverse());

            var sectionIdTonavigationLink = {};
            $sections.each(function() {
                var id = $(this).attr('name');
                sectionIdTonavigationLink[id] = $('a[name=' + id + ']');
            });

            var scrollPosition = $(window).scrollTop();

            $sections.each(function() {
                var currentSection = $(this);
                var sectionTop = currentSection.offset().top - 100;

                if ($(window).width() <= 992){
                    sectionTop = sectionTop - 50;
                }

                if (scrollPosition >= sectionTop) {
                    var currentSectionId = currentSection.attr('name');
                    var $navigationLink = sectionIdTonavigationLink[currentSectionId];
                    var $parent = $navigationLink;

                    if ($navigationLink.hasClass('leaf')) {
                        var count = -1;
                        for (var i = currentSectionId.length; i>0; i--) {
                            count++;
                            if (currentSectionId[i]==="-") {
                                break;
                            }
                        }
                        var parentName = currentSectionId.substring(0, currentSectionId.length - count);
                        $parent = $('a[name=' + parentName + ']');
                    }


                    $navigationLinks.removeClass('is-active');
                    $navigationExpandLinks.not($parent).each(function(){
                        $(this).siblings('ul').slideUp();
                    });
                    $parent.siblings('ul').slideDown();
                    $navigationLink.addClass('is-active');
                    return false;
                }
            });
        },

        showCodeTab: function() {
            $('.code-tabs__tab').removeClass('is-active');
            $('.reference-col__tab').removeClass('is-active');

            $(this).addClass('is-active');
            $(`.js-lang-${$(this).attr('href').replace('#', '')}`).addClass('is-active');
        }
    }
};
