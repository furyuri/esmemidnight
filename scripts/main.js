// Add thumbnail images to Insight page.
$('.post-list > li').each(function(){
    var $url = $(this).find('.thumbnail_url').html();
    $(this).find('.thumbnail_url').remove();
    var $alt = $(this).find('.thumbnail_alt').html();
    $(this).find('.thumbnail_alt').remove();
    
    if (typeof $url !== 'undefined') {
        var thumb_img = document.createElement('img');
        $(thumb_img).attr({
            src:$url,
            alt:$alt,
            class: 'post_thumb_img'
        });
        $(this).prepend(thumb_img);
    }
});

// Smooth Scrolling to Offerings anchor link.
$('#home-offerings-section').each(function(){
    $('#offerings-link').attr('href', '#home-offerings-section')
});
// Rest added via CSS: 'scroll-behavior: smooth'