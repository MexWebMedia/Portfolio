$(document).ready(function() {

    //Smooth scrolling to target attribute
    $('a[href^="#HeaderWrapper"], a[href^="#AboutWrapper"], a[href^="#PortfolioWrapper"], a[href^="#SkillsWrapper"], a[href^="#ContactWrapper"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    //Toggles the navbar hamburger menu animations
    $('#BurgerIcon').click(function() {
        $('#BurgerNav').fadeToggle("slow", "linear");
        $('#BurgerIcon').toggleClass('Rotation');
        $('#BurgerIcon').toggleClass('fas fa-times');
        $('.MenuIcon').toggleClass('BurgerBackground');
    });

    //Toggles the gallery for the first project
    $('#GuitarGallery').click(function() {
        $('.GuitarSlider').fadeToggle("slow", "linear");
        $('.GuitarSlider').toggleClass('VisibleGallery');
    });

    //Toggles the gallery for the second project
    $('#WitcherGallery').click(function() {
        $('.WitcherSlider').fadeToggle("slow", "linear");
        $('.WitcherSlider').toggleClass('VisibleGallery');
    });

    //Button to exit the gallery
    $('.CloseGallery').click(function() {
        $('.WitcherSlider, .GuitarSlider').fadeOut("slow", "linear");
        $('.WitcherSlider, .GuitarSlider').removeClass('VisibleGallery');
    });

    //Slider function to apply the active class to the next slide (Witcher Project)
    $(document).ready(function() {
        $('.next').on("click", function() {
            var nextWitcherImg = $('img.WitcherActive').next('.WitcherSlider img');

            if(nextWitcherImg.length == 0) {
                nextWitcherImg = $('.WitcherSlider img:first');
            }
            $('img.WitcherActive').removeClass('WitcherActive');
            nextWitcherImg.addClass('WitcherActive');
        });
    });

    //Slider function to apply the actice class to the previous slide (Witcher Project)
    $(document).ready(function() {
        $('.prev').on("click", function() {
            var prevWitcherImg = $('img.WitcherActive').prev('.WitcherSlider img');

            if(prevWitcherImg.length == 0) {
                prevWitcherImg = $('.WitcherSlider img:last');
            }
            $('img.WitcherActive').removeClass('WitcherActive');
            prevWitcherImg.addClass('WitcherActive');
        });
    });

    //Slider function to apply the active class to the next slide (Guitar Project)
    $(document).ready(function() {
        $('.next').on("click", function() {
            var nextGuitarImg = $('img.GuitarActive').next('.GuitarSlider img');

            if(nextGuitarImg.length == 0) {
                nextGuitarImg = $('.GuitarSlider img:first');
            }
            $('img.GuitarActive').removeClass('GuitarActive');
            nextGuitarImg.addClass('GuitarActive');
        });
    });

    //Slider function to apply the active class to the previous slide (Guitar Project)
    $(document).ready(function() {
        $('.prev').on("click", function() {
            var prevGuitarImg = $('img.GuitarActive').prev('.GuitarSlider img');

            if(prevGuitarImg.length == 0) {
                prevGuitarImg = $('.GuitarSlider img:last');
            }
            $('img.GuitarActive').removeClass('GuitarActive');
            prevGuitarImg.addClass('GuitarActive');
        });
    });

    //Fade in animation for a return to top button
    $(window).scroll(function() { 
        if ($(this).scrollTop() >= 50) { 
            $('#return_to_top').fadeIn(200);
        } 
        else {
            $('#return_to_top').fadeOut(200);
        }
    });

    //Smooth scroll animation when clicking the return to top button
    $('#return_to_top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        },  1200);
    });

    //Detects the window scroll and adds two classes to the navbar, one to change the font size and the other for the sticky dark background.
    $(window).scroll(function() {
        var stickyBar = $(this).scrollTop();

        if (stickyBar > $('#AboutWrapper').offset().top - ($(window).height() / 1)) {
            $('Nav ul').addClass('StickyBar');
            $('#DesktopNav li').addClass('ReSize');
        } else {
            $('Nav ul').removeClass('StickyBar');
            $('#DesktopNav li').removeClass('ReSize');
        }
        //Parallax effect for the text in the header, change the number for the desired speed effect.
        $('#HeadingText').css({
            'transform' : 'translate(0px, ' + stickyBar / 4 + '%)'
        });
        //Parallax effect for the text in the header, change the number for the desired speed effect.
        $('#AboutContainer').css({
            'transform' : 'translate(0px, ' + stickyBar / 2 + '%)'
        });
    });

    //Detects the window height and if the top of the container is visible in the viewport it will trigger a fade in animation for each element
    $(window).scroll(function(){
            var wScroll = $(this).scrollTop();

            if (wScroll > $('#SkillsContainer').offset().top - ($(window).height() / 1.1)) {
                $('#SkillsContainer div').each(function(i) {
                    setTimeout(function() {
                        $('#SkillsContainer div').eq(i).addClass('visible');
                }, 250 * (i+1));
            });
        }
    });
});