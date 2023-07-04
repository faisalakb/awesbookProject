const bookcollection = document.getElementById('bookCollection');

function removeBook(e) {
  const bookDiv = e.target.parentElement;
  bookDiv.parentNode.removeChild(bookDiv);
  localStorage.setItem('booksData', bookcollection.innerHTML);
}

function attachRemoveBookEventListeners() {
  const removeButtons = document.getElementsByClassName('remove');
  for (let i = 0; i < removeButtons.length; i += 1) {
    removeButtons[i].addEventListener('click', removeBook);
  }
}

function addBook() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const inputElemnet = document.getElementsByTagName('input');
  const id = new Date().getTime();
  if (bookTitle === '' || bookAuthor === '') {
    alert('Please enter the information');
  } else {
    const div = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const rm = document.createElement('button');
    rm.classList.add('remove');
    const hr = document.createElement('hr');
    div.id = id;
    pTitle.textContent = `Title: ${bookTitle}`;
    pAuthor.textContent = `Author: ${bookAuthor}`;
    rm.textContent = 'Remove';

    // Attach the event listener for the delete button to the newly created 'rm' button
    rm.addEventListener('click', removeBook);

    div.appendChild(pTitle);
    div.appendChild(pAuthor);
    div.appendChild(rm);
    div.appendChild(hr);
    bookcollection.appendChild(div);
    for (let i = 0; i < inputElemnet.length; i += 1) {
      inputElemnet[i].value = '';
    }
    localStorage.setItem('booksData', bookcollection.innerHTML);
  }
}

window.onload = () => {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addBook);

  // Attach the event listeners to existing 'rm' buttons after loading the page
  attachRemoveBookEventListeners();

  // Recreate the book collection from localStorage
  bookcollection.innerHTML = localStorage.getItem('booksData');

  // Attach the event listeners to newly created 'rm' buttons in the book collection
  attachRemoveBookEventListeners();
};
