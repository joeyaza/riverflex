$( "#subscribe" ).click((event) => {

	event.preventDefault();
  
  const emailAddress = $.trim($("input[name='email']").val()),
  	frm = $('#email-form');

  Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jazadehdel@gmail.com",
        Password : "a8606ed1-de36-4656-be5d-01aa31265a29",
        To : emailAddress,
        From : "info@riverflex.com",
        Subject : "Riverflex newsletter - please confirm your subscription",
        Body: `Hi, \n \n Thank you for subscribing to the Riverflex newsletter! To complete your subscription, please confirm by clicking on the link below.
        \n \n
        [url: http://eepurl.com/gnOenf]
			\n \n
			If you received this email by mistake, simply delete it. You won’t be subscribed if you don’t click the confirmation link above.
			\n \n
			Thanks,
			\n \n
			The Riverflex Team`
        }).then((message) => {

        	console.log(1, message);

        	Email.send({
	        Host : "smtp.elasticemail.com",
	        Username : "jazadehdel@gmail.com",
	        Password : "a8606ed1-de36-4656-be5d-01aa31265a29",
	        To : ["claudia.arena@riverflex.com", "jazadehdel@gmail.com"],
	        From : "info@riverflex.com",
	        Subject : "Birthday Sign-up:" + emailAddress,
	        Body: ""
	        }).then((message) => {

	        	console.log(2, message);

	        	$("#email-info").text("Thanks for signing up to the Riverflex newsletter");

	        });

        })


});
