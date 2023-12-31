function about_me_func() {
    var x = document.getElementById("about_me");
    if(x.style.display == "block"){
        x.style.display = "none"; 
    } else {
        x.style.display = "block"; 
    }
}

setTimeout(function() {
    document.querySelector('.name').style.display = 'none';
    document.querySelector('.name2 span2:nth-child(1)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(2)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(3)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(4)').style.display = 'inline-block';
    document.querySelector('.name2 span2:nth-child(5)').style.display = 'inline-block';
  }, 2500);

