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

        if( $name.val() && $phone.val() ) {
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
            setTimeout(function() {
                $sendForm.removeAttr( 'data-dismiss' );
            }, 5000);
        }
    }
});
