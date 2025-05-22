/*this is for the search bar open and close */
function openSearch(){
    let search = document.getElementById('srch');
    search.style.display = 'flex';
}

function closeSearch(){
  let search = document.getElementById('srch');
    search.style.display = 'none';
}

function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageUrl = document.getElementById('imageUrl').value;
  
    if (!title || !content) {
      alert('Please enter both title and content.');
      return;
    }
  
    const postContainer = document.createElement('div');
    postContainer.className = 'post';
  
    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Blog Image';
      img.style = 'width: 100%; border-radius: 6px; margin-bottom: 10px;';
      postContainer.appendChild(img);
    }
  
    const postTitle = document.createElement('h2');
    postTitle.textContent = title;
  
    const postContent = document.createElement('p');
    postContent.textContent = content;
  
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postContent);
  
    const blogPosts = document.getElementById('blog-posts');
    blogPosts.insertBefore(postContainer, blogPosts.firstChild);
  
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('imageUrl').value = '';
  }