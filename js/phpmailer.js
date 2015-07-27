$(function() {
    var $sendForm =  $('#sendForm'),
        $thanks = $('#thanks');

    $('#inputPhone').mask("+7 (999) 999-99-99", {
        placeholder:"+7 (000) 000-00-00"
    });

    $sendForm.click(send_mail);

    function send_mail() {
        var
            $name = $('#inputName'),
            $phone = $('#inputPhone');

        if( $name.val().length > 0 && $phone.val().length == 18) {
            var formData = {
                name: $name.val(),
                phone: $phone.val(),
            };
            $.ajax({
                url:'phpmailer.php',
                type:'POST',
                data:'jsonData=' +JSON.stringify(formData),
                success: function(res) {
                }
            });
            $sendForm.attr('data-dismiss', 'modal');
            $sendForm.attr('data-target', "#thanks");
            setTimeout(function() {
                $sendForm.removeAttr( 'data-target' );
                $sendForm.removeAttr( 'data-dismiss' );
            }, 500);
        }
    }
});
