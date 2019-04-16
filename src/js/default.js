$( "#subscribe" ).click((event) => {

	event.preventDefault();
  
  const emailAddress = $.trim($("input[name='email']").val()),
  	frm = $('#email-form');

  Email.send({
		SecureToken : "48d87b79-17ab-4e67-a892-1d0bca16f4a1",
        To : emailAddress,
        From : "info@riverflex.com",
        Subject : "Riverflex newsletter - please confirm your subscription",
        Body: `Hi,
        \n
        Thank you for subscribing to the Riverflex newsletter! To complete your subscription, please confirm by clicking on the link below.
        \n
        [url: http://eepurl.com/gnOenf]
		\n
		If you received this email by mistake, simply delete it. You won’t be subscribed if you don’t click the confirmation link above.
		\n
		Thanks,
		\n
		The Riverflex Team`
        }).then((message) => {
         	console.log(1, message);

        	Email.send({
			SecureToken : "48d87b79-17ab-4e67-a892-1d0bca16f4a1",
	        To : "claudia.arena@riverflex.com",
	        From : "info@riverflex.com",
	        Subject : "Birthday Sign-up:" + emailAddress,
	        Body: ""
	        }).then((message) => {

	        	console.log(2, message);

	        	$("#email-info").text("Thanks for signing up to the Riverflex newsletter");

	        });

        })


});
