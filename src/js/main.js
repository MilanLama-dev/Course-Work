/*this is for the search bar open and close */
function openSearch(){
    let search = document.getElementById('srch');
    search.style.display = 'flex';
}

function closeSearch(){
  let search = document.getElementById('srch');
    search.style.display = 'none';
}

function bar_open() {
    document.getElementById("mySidebar").style.width = "250px";
}

function bar_close() {
    document.getElementById("mySidebar").style.width = "0";
}