/*this is for the search bar open and close */
function openSearch(){
    let search = document.getElementById('srch');
    search.style.display = 'flex';
}

function closeSearch(){
  let search = document.getElementById('srch');
    search.style.display = 'none';
}

/*this is to change the quantity number and to remove the cart item. */
function changeQuantity(amount) {
  const num = document.getElementById('totalnum');
  let count = parseInt(num.textContent) + amount;
  num.textContent = count;

  let item = document.getElementById('item');
  if (count < 1) {
    item.style.display = 'none';
  }
}

function remove(){
  let item = document.getElementById('items');
  item.style.display = 'none';
}

/*this is for making image slide */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

/*this is for to show the details of description*/
function myFunction(){
    var specInfo = document.getElementById("more");
    var buttonText = document.getElementById("myBtn");

    if(specInfo.style.display === "none"){
        specInfo.style.display = "inline";
        buttonText.innerHTML = "<h4>Specifications &gt;</h4>";
    }
    else{
        specInfo.style.display = "none";
        buttonText.innerHTML = "<h4>Specifications &gt;</h4>";
    }
}

/*this is for to show the details of shipping and return*/
function shippingFunction(){
    var specInfo = document.getElementById("shipping");
    var buttonText = document.getElementById("myButton");

    if(specInfo.style.display === "none"){
        specInfo.style.display = "inline";
                buttonText.innerHTML = "<h4>Shopping & Returns &gt;</h4>";
    }
    else{
        specInfo.style.display = "none";
        buttonText.innerHTML = "<h4>Shopping & Returns &gt;</h4>";
    }
}

/*this is for showing or adding the item in the cart*/
function addToCart(){
  alert("Product added to the cart.")
  let item = document.getElementById('item');
  item.style.display = 'grid';
}

/*this is for showing or adding the item in the wishlist*/
function addToWishList(){
  alert("Product added to the wishlist.")
  let item = document.getElementById('items');
  item.style.display = 'grid';
}

/*this is for to add post in the review*/
function addReview(){
  const user = document.getElementById('userName');
  const star = document.getElementById('star');
  const review = document.getElementById('title');
  const img = document.getElementById('image');
  const time = new Date();

  if (!user.value || !review.value){
    alert("Please enter both username and review.");
    return;
  }

  const postContainer = document.createElement('div');
  postContainer.className = 'post';

  const userContainer = document.createElement('div');
  userContainer.className = 'userName';

  const reviewAndImage = document.createElement('div');
  reviewAndImage.className = 'review-image';

  const date = document.createElement('div');
  date.className = 'date';

  postContainer.appendChild(userContainer);
  postContainer.appendChild(reviewAndImage);
  postContainer.appendChild(date);

  if(img.value){
    const image = document.createElement('img');
    image.src = img.value;
    reviewAndImage.appendChild(image);
  }

  const postUser = document.createElement('h3');
  postUser.textContent = user.value;

  const postStar = document.createElement('div');
  const starCount = star.value || 0;
  postStar.innerHTML = '<ion-icon name="star"></ion-icon>'.repeat(starCount);
  reviewAndImage.appendChild(postStar);

  const postReview = document.createElement('p');
  postReview.textContent = review.value;

  const postDate = document.createElement('h4');
  postDate.textContent = time.toLocaleDateString();

  userContainer.appendChild(postUser);
  reviewAndImage.appendChild(postReview);
  date.appendChild(postDate);

  const reviewPosts = document.getElementById('review-post');
  reviewPosts.insertBefore(postContainer,reviewPosts.firstChild);

  document.getElementById('userName').value = '';
  document.getElementById('star').value = '';
  document.getElementById('title').value = '';
  document.getElementById('image').value = '';
}