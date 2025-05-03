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
