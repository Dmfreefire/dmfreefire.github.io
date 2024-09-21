document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const fullName = document.getElementById('full-name').value;
    const instagramId = document.getElementById('instagram-id').value;
    const whatsappNumber = document.getElementById('whatsapp-number').value;
    const tournamentType = document.querySelector('input[name="tournament-type"]:checked').value;

    // Simulate form submission success
    console.log(`Full Name: ${fullName}`);
    console.log(`Instagram ID: ${instagramId}`);
    console.log(`WhatsApp Number: ${whatsappNumber}`);
    console.log(`Tournament Type: ${tournamentType}`);

    // Show confirmation message
    document.getElementById('confirmation-message').innerText = "Registration successful! Thank you for joining.";
});
