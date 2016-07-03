document.body.onmousemove = function (){
    setTimeout(function(){
        console.log("hi");
        $('*').css("cursor", "auto");

    }, 1000);
};
