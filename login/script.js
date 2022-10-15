const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

window.addEventListener("load",function(){

    document.querySelector(".pageloader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".pageloader").style.display="none";
    },600)    

});