
  function hide(element) {
        element.remove();
    }
    //How could you add a textarea in place of that button? and then input that into a new class that would be called d3 (definition #3)
    function logOut(element) {
        if (element.innerText == "Login"){
        element.innerText = "Logout";
    }   
        else{
        element.innerText = "Login";
        }
    }
     