$(document).ready(function () {
    $("#contact_form").submit(function (event) {
        event.preventDefault(); // Stop normal form submission

        // Get input values
        var name = $("#Name").val();
        var email = $("#Email").val();
        var subject = $("#Subject").val();
        var message = $("#Message").val();

        // ✅ Replace with your Google Form URL (must end with /formResponse)
        var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSc-hnyoIL3pI5Dp6t524mSoMDj7mabeFlhxz_GHJHcguP3qSA/formResponse";

        // ✅ Replace with your actual Google Form entry IDs
        var data = new FormData();
        data.append("entry.856552114", name);    // Full Name Field
        data.append("entry.416083448", email);   // Email Field
        data.append("entry.1402652593", subject); // Subject Field
        data.append("entry.533288431", message); // Message Field

        // Send data to Google Forms
        fetch(googleFormURL, {
            method: "POST",
            body: data,
            mode: "no-cors"
        }).then(() => {
            $("#myModal").css("display", "block"); // Show success modal
            $("#contact_form")[0].reset(); // Reset form fields
        }).catch(error => console.error("Error:", error));
    });
});

// Function to close modal
function closeModal() {
    $("#myModal").css("display", "none");
}
