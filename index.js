const bookcollection = document.getElementById('bookCollection');

bookcollection.innerHTML = localStorage.getItem('booksData');

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
    const hr = document.createElement('hr');
    div.id = id;
    pTitle.textContent = `Title: ${bookTitle}`;
    pAuthor.textContent = `Author: ${bookAuthor}`;
    rm.textContent = 'Remove'
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

function removeBook(e) {
  bookcollection.removeChild(e.target.parentElement);
  localStorage.setItem('booksData', bookcollection.innerHTML);
}

window.onload = () => {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addBook);
};
