function sendMail(){
	let parms = {
	name : document.getElementById("name").value,
	email : document.getElementById("email").value,
	message : document.getElementById("message").value,
	}
	emailjs.send("service_2foz3jd","template_2841dpk",parms).then(alert("Email Sent!!"))
}