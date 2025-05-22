/*this is for the search bar open and close */
function openSearch(){
    let search = document.getElementById('srch');
    search.style.display = 'flex';
}

function closeSearch(){
  let search = document.getElementById('srch');
    search.style.display = 'none';
}

function option_open() {
    var filtermenu = document.getElementById("jsfilter");
    let width = filtermenu.getBoundingClientRect().width;
    if(width == 0){
        document.getElementById("jsfilter").style.width = "250px";
    }
    else{
        document.getElementById("jsfilter").style.width = "0px";
    }
}
