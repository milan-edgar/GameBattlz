// Event listener for Subscribe button
document.querySelector('.subscribe-btn').addEventListener('click', () => {
    alert('Thank you for subscribing! More features coming soon.');
});

// Event listener for Sign In button
document.querySelector('.sign-in-btn').addEventListener('click', () => {
    alert('Sign In functionality will be available soon.');
});
function openChat() {
    document.getElementById("chat-box").style.display = "block";
}

function closeChat() {
    document.getElementById("chat-box").style.display = "none";
}
function sendMessage() {
    const messageInput = document.getElementById("chat-message-input");
    const messageText = messageInput.value;
    if (messageText.trim() !== "") {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message");
        messageContainer.innerText = messageText;
        
        document.getElementById("chat-messages").appendChild(messageContainer);
        messageInput.value = "";
    }
}