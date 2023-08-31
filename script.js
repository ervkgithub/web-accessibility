$(document).ready(function(){
    $('.list-group-item-action').on('click', function(e){
        e.preventDefault();
        $('.list-group-item-action').removeClass("active");
        let panel_id = $(this).attr("href");
        console.log(panel_id);
        $(".content").removeClass("active");
        $(panel_id).addClass("active");
    $(this).addClass('active');
    });
    });

    