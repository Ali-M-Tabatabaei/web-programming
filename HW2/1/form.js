$('#next1').click(function(){
    // Validation code here
    $('#step1').hide();
    $('#step2').show();
    $('#progress').css('width', '33%');
});

$('#next2').click(function(){
    // Validation code here
    $('#step2').hide();
    $('#step3').show();
    $('#progress').css('width', '66%');
});

$('#prev1').click(function(){
    $('#step2').hide();
    $('#step1').show();
    $('#progress').css('width', '0');
});

$('#prev2').click(function(){
    $('#step3').hide();
    $('#step2').show();
    $('#progress').css('width', '33%');
});

$('#submit').click(function(){
    // Validation code here
    // If validation is successful, you can submit data
    $('#progress').css('width', '100%');
    alert('Form submitted successfully!');
});