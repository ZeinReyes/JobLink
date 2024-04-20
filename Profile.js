document.addEventListener("DOMContentLoaded", function() {
    var resumeLink = document.getElementById("resumeLink");
    var popupContainer = document.getElementById("popupContainer");
    var backButton = document.getElementById("backButton");

    // Add event listener to show pop-up container when the link is clicked
    resumeLink.addEventListener("click", function() {
        popupContainer.style.display = "block";
        popupContainer.classList.add("show"); // Add "show" class
    });

    // Add event listener to hide pop-up container when the back button is clicked
    backButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
        popupContainer.classList.remove("show"); // Remove "show" class
    });
});
