function sendMail(contactForm) {
    emailjs.send("gmail", "template_3nbA1YQC", {
        "type_of_request":contactForm.subject.value,
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "project_request":contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}