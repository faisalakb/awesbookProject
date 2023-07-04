function addBook() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookcollection = document.getElementById('bookCollection');
  const inputElemnet = document.getElementsByTagName('input');
  const id = new Date().getTime();
  if (bookTitle === '' || bookAuthor === '') {
    alert('Please enter the information');
  } else {
    const book = `
      <div id="${id}">
        <p>Title: ${bookTitle}<br>Author: ${bookAuthor}</p>
        <button type="button" onclick="removeBook(${id})">Remove</button>
        <hr/>
      </div>`;
    bookcollection.innerHTML += book;
    for (let i = 0; i < inputElemnet.length; i += 1) {
      inputElemnet[i].value = '';
    }
    localStorage.setItem('booksData', bookcollection.innerHTML);
  }
}

function removeBook(e) {
  const bookDel = document.getElementById('bookCollection');
  const delId = document.getElementById(e);
  bookDel.removeChild(delId);
  localStorage.setItem('booksData', bookDel.innerHTML);
}

window.onload = () => {
  const addBtn = document.getElementById('addBtn');
  addBtn.addEventListener('click', addBook);
  const rm = removeBook;
  console.log(rm);
};
