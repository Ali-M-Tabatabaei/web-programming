$(document).ready(function(){
    $('.parent').click(function(){
        var selectedChild = $(this).next('.child');
        
        // Close all first-level items except for the selected one
        $('.child').not(selectedChild).slideUp();
        
        // Toggle the selected first-level item
        selectedChild.slideToggle();
    });
    $('.sub-parent').click(function(){
        var selectedChild = $(this).next('.sub-child');
        
        // Close all first-level items except for the selected one
        $('.sub-child').not(selectedChild).slideUp();
        
        // Toggle the selected first-level item
        selectedChild.slideToggle();
    });
});
