function validateForm() {
    var validForm = true;
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    
    $(".error").remove();
    
    if (name.length < 1 ) {
    $('#name').after('<span class="error">Name must be filled out</span>');
    validForm = false;
    }
    
    if (email.length < 1 ) {
    $('#email').after('<span class="error">Email must be filled out</span>');
        validForm = false;
    } else {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
            $('#email').after('<span class="error">Email must be valid</span>');
        }
    }
    
    if (message.length < 1) {
    $('#message').after('<span class="error">Message must be filled out</span>');
        validForm = false;
    }
    
    if (!validForm) {
        return false;
    }
}

    // $('#contactForm').submit(function(e) {
    //     e.preventDefault();
    //     var name = $('#name').val();
    //     var email = $('#email').val();
    //     var message = $('#message').val();

    //     $(".error").remove();

    //     if (name.length < 1) {
    //         $('#name').after('<span class="error">This field is required</span>');
    //     }
    //     if (email.length < 1) {
    //         $('#email').after('<span class="error">This field is required</span>');
    //     } else {
    //         var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //         var validEmail = regEx.test(email);
    //         if (!validEmail) {
    //             $('#email').after('<span class="error">Enter a valid email</span>');
    //         }
    //     }
    //     if (message.length < 1) {
    //         $('#message').after('<span class="error">This field is required</span>');
    //     }
    // });

    // $('form[id="contactForm"]').validate({
    //     rules: {
    //     name: 'required',
    //     email: {
    //         required: true,
    //         email: true,
    //     },
    //     message: 'required',
    //     },
    //     messages: {
    //     name: 'This field is required',
    //     email: 'Enter a valid email',
    //     message: 'Password must be at least 8 characters long'
    //     },
    //     submitHandler: function(form) {
    //     form.submit();
    //     }
    // });
