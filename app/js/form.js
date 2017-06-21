var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email", "Please enter a valid email address");
frmvalidator.addValidation("message","req","Please provide a message");