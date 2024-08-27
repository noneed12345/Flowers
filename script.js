document.getElementById('flower').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.style.transition = 'transform 0.5s ease';
    message.style.transform = 'translateY(-100px)';
    const text = document.getElementById('text');
    text.style.display='none';
});
document.getElementById('flower').addEventListener("click", function() {
    this.src = "Picture2.png"; // Change to extinguished candle image
    // setTimeout(function() {
    //     window.location.href = "newpage.html"; // Redirect to another page
    // }, 0); // Wait for 1 second before redirecting
});
