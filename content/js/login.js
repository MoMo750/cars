const mainLogin_btn = document.querySelectorAll(".main_login .tittle a");
const loginBox = document.querySelectorAll(".login-box"); 
const line_login = document.querySelector(".line"); 

mainLogin_btn.forEach(element =>{
    element.addEventListener("click", function(){
        mainLogin_btn.forEach(el =>{
            el.classList.remove("active")
        })
        this.classList.add("active")
        loginBox.forEach(el =>{
            el.classList.remove("active")
        })

        document.querySelectorAll(this.dataset.link).forEach(ele =>{
            ele.classList.toggle("active")
        })
    })
})

mainLogin_btn.forEach((link) =>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        let linkWidth = link.clientWidth;
        let offsetlink = link.offsetLeft;

        line_login.style.width = `${linkWidth}px`;
        line_login.style.transform = `translateX(${offsetlink}px)`;
        console.log(line_login.style.width);

    })
})