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
    event.preventDefault(); // Prevent default action of the button click event

    var post = document.getElementById(postId);
    var button = post.querySelector('.post__button');
    var content = post.querySelector('.post__content');

    if (post.classList.contains('expanded')) {
        post.classList.remove('expanded');
        button.textContent = 'Post Something';
        content.style.display = 'none';
    } else {
        post.classList.add('expanded');
        button.textContent = 'Close Post';
        content.style.display = 'block';
    }
}
