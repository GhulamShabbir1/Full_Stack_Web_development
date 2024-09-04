// script.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    
    const doc = new jsPDF();

    doc.text(20, 20, `First Name: ${firstName}`);
    doc.text(20, 30, `Last Name: ${lastName}`);
    doc.text(20, 40, `Email: ${email}`);

    doc.save('signup_data.pdf');
});

// Load jsPDF library (you can add this to the head of your HTML file or load via CDN)
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
