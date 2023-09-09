
const nav_menu = document.querySelector(".contact-nav .menu");
const secNav_sm = document.querySelector(".sec-nav_sm");
const closeMenu = document.querySelector(".close-menu");
const search_Icon = document.querySelector("#search-icon");
const search_page = document.querySelector(".search-page");
const cancelSearch_page = document.querySelector(".cancel-search-page");
const listLinks = document.querySelector(".main-links-sm .list-links");
const listLinks_i = document.querySelector("#direct");
const hidenLinks_sm = document.querySelector(".hiden-links-sm");

listLinks.addEventListener("click", function(e) {
    e.currentTarget.classList.toggle("active");
    hidenLinks_sm.classList.toggle("active");
    listLinks_i.classList.toggle("active");
})

nav_menu.addEventListener("click", () =>{
    secNav_sm.classList.add("active");
    disableScroll()
});
closeMenu.addEventListener("click", () =>{
    secNav_sm.classList.remove("active");
    enableScroll()
});
search_Icon.addEventListener("click", () =>{
    search_page.classList.add("active");
    disableScroll()
});
cancelSearch_page.addEventListener("click", () =>{
    search_page.classList.remove("active");
    enableScroll()
});

const mainlinks_left= document.querySelectorAll(".main-links-left-menu");
const hiden_ul = document.querySelector(".hiden-ul");

mainlinks_left.forEach(el =>{
    el.addEventListener("click", function(e){
        e.currentTarget.nextElementSibling.classList.toggle("active");
    })
})
// filter input

function filterList(){
    const linksInput = document.querySelector(".links-input input");
    const filter = linksInput.value.toLowerCase();
    const hidenLinks = document.querySelectorAll(".hiden-ul .hiden-links");

    hidenLinks.forEach((item) =>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = "./content/views/cars-page.html";
        }else{
            item.style.display = "none";
        }
    })
}
// slider 
const rightbtn = document.querySelector(".slider .right")
const leftbtn = document.querySelector(".slider .left")
const carousel = document.querySelector(".box-slider")
let sliderimge2 = document.querySelectorAll(".box-slider .imge").length

function Right(){
    const sliderimge = carousel.querySelector(".box-slider .imge").offsetWidth+15;
    carousel.scrollLeft += rightbtn.id === "left" ? -sliderimge : sliderimge;
}
function Left(){
    const sliderimge = carousel.querySelector(".box-slider .imge").offsetWidth+15;
    carousel.scrollLeft -= rightbtn.id === "right" ? -sliderimge : sliderimge;
}
// feedback 
const feedBox = document.querySelectorAll(".feed-box");
const feed_hidenBox = document.querySelectorAll(".hiden-box");
const feed_input = document.querySelectorAll(".hiden-box input");
const buttons = document.querySelectorAll(".buttons .btn");
const submitBtn = document.querySelectorAll(".submit");
const closeFeedback = document.querySelector(".close-feedback");
const feedbackBtn = document.querySelector(".feedback");
const feedbackContainer = document.querySelector(".feedback-container");

feed_input.forEach(el =>{
    el.addEventListener("input", () =>{
        if(feed_input.value !== ""){
            el.parentElement.lastElementChild.children[0].classList.add("active");
        }else{
            el.parentElement.lastElementChild.children[0].classList.remove("active");
        }

        // console.log(el.parentElement.lastElementChild.children[0]);
    })

})

feedBox.forEach(box =>{
    box.addEventListener("click", function(){
        feedBox.forEach(el =>{
            el.style.display = "none"
        })
        feed_hidenBox.forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(this.dataset.opinion).forEach(element =>{
            element.style.display = "block"
        })
    })
})

buttons.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        feed_input.forEach(input =>{
            input.value = "";
        })
        feed_hidenBox.forEach(element => {
            element.style.display = "none";
        });
        feedBox.forEach(el =>{
            el.style.display = "block"
        })
    })
})
feedbackBtn.addEventListener("click", ()=>{
    feedbackContainer.classList.add("active");
    disableScroll()
})

closeFeedback.addEventListener("click", () =>{
    feedbackContainer.classList.remove("active");
    enableScroll()
})
window.onclick = function(e){
    if(e.target == feedbackContainer){
        feedbackContainer.classList.remove("active");
        enableScroll()
    }
}
// DisableScroll
function disableScroll() {
    // Get the current page scroll position
    scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

// EnableScroll
function enableScroll() {
    window.onscroll = function() {};
}

// footer
const span = document.querySelector('.footer_span');
const spanDate = new Date();
const year = spanDate.getFullYear();

span.innerHTML = year;

