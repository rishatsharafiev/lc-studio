$(function() {
    var $sendForm =  $('#sendForm');

    $('#inputPhone').mask("+7 (999) 999-99-99", {
        placeholder:"+7 (000) 000-00-00"
    });

    $sendForm.click(send_mail);

    function validateEmail(email) {
        var re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z\s]{2,4}$/i;
        return re.test(email);
    }

    function check_email() {
        if( validateEmail( $input_email.val() ) ) {
            $input_email.css('border', '1px green solid');
            return true;
        } else if($input_email.val() == '') {
            $input_email.css('border', '1px rgb(238, 238, 238); solid');
            return false;
        }
        else {
            $input_email.css('border', '1px red solid');
            return false;
        }
    }

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
        }
    }
});
