document.getElementById('add-bookmark').addEventListener('click', function() {
    const name = document.getElementById('website-name').value;
    const url = document.getElementById('website-url').value;

    if (name && url) {
        
        const bookmarksList = document.querySelector('.bookmarks-list');
        const bookmarkCard = document.createElement('div');
        bookmarkCard.classList.add('bookmark-card');

        bookmarkCard.innerHTML = `
            <h3>${name}</h3>
            <a href="${url}" target="_blank">${url}</a>
            <div class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        bookmarksList.appendChild(bookmarkCard);

        
        document.getElementById('website-name').value = '';
        document.getElementById('website-url').value = '';
    }
});