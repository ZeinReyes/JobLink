function expandCard(cardId, event) {
  event.preventDefault(); // Prevent default action of the button click event

  var card = document.getElementById(cardId);
  var button = card.querySelector('.card__button');
  var description = card.querySelector('.card__description');
  var applyButton = card.querySelector('.card__button2');

  if (card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      button.textContent = 'Description';
      description.style.display = 'none';
      applyButton.style.display = 'none'; // Hide apply button when description is hidden
  } else {
      card.classList.add('expanded');
      button.textContent = 'Close';
      description.style.display = 'block';
      applyButton.style.display = 'inline-block'; // Show apply button when description is visible
  }
}

function expandPost(postId, event) {
  event.preventDefault();
  var post = document.getElementById(postId);
  post.classList.toggle("expanded");
  var button = post.querySelector('.post__button');
  button.classList.toggle("expanded");
  // Change button text
  if (button.textContent === "Post Something") {
      button.textContent = "Close";
      showPostButton(); // Call showPostButton() when expanding the post
  } else {
      button.textContent = "Post Something";
      hidePostButton(); // Call hidePostButton() when closing the post
  }

  var postContent = post.querySelector('.post__con2');
  var gridContainer = post.querySelector('.grid-container');
  var postContentVisible = postContent.style.display === 'block';
  postContent.style.display = postContentVisible ? 'none' : 'block';
  gridContainer.style.display = postContentVisible ? 'none' : 'grid';
}

function showPostButton() {
  var postButton = document.querySelector('.post__button2');
  postButton.style.display = 'inline-block'; // Show the post button
}

function hidePostButton() {
  var postButton = document.querySelector('.post__button2');
  postButton.style.display = 'none'; // Hide the post button
}

document.addEventListener("DOMContentLoaded", function() {
  // Function to toggle between phrases
  function toggleHeadingText() {
      const jobAction = document.querySelector('.job-action');
      if (jobAction) {
          const currentText = jobAction.textContent;
          switch (currentText) {
              case "Find your job on":
                  jobAction.style.opacity = 0; // Fade out
                  setTimeout(function() {
                      jobAction.textContent = "Apply for a job on";
                      jobAction.style.opacity = 1; // Fade in
                  }, 500); // Wait for fade out animation to complete
                  break;
              case "Apply for a job on":
                  jobAction.style.opacity = 0; // Fade out
                  setTimeout(function() {
                      jobAction.textContent = "Post for a job on";
                      jobAction.style.opacity = 1; // Fade in
                  }, 500); // Wait for fade out animation to complete
                  break;
              case "Post for a job on":
                  jobAction.style.opacity = 0; // Fade out
                  setTimeout(function() {
                      jobAction.textContent = "Find your job on";
                      jobAction.style.opacity = 1; // Fade in
                  }, 500); // Wait for fade out animation to complete
                  break;
              default:
                  break;
          }
      }
  }

  // Call the function to toggle text every 5 seconds (5000 milliseconds)
  setInterval(toggleHeadingText, 5000);
});
