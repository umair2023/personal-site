
const lists = document.querySelectorAll('.list');
function activeLink(){
    lists.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}
lists.forEach((item) =>
item.addEventListener("click", activeLink));
// =======================================================
// =======================================================
// show-hidebar
// =======================================================
const navigation = document.querySelector('.navigation');
const navigationId = document.querySelector('#navigationId');
const bar3 = document.querySelector('#show_hide_bar');
const main = document.querySelector('main');


document.onclick = function(e){
    if(e.target.id !== "show_hide_bar" && e.target.class !== "navigationId"){
        navigation.classList.remove('active1');
        main.classList.remove("blur");
        bar3.classList.remove("active1");
        
    }
}


bar3.addEventListener('click', function(){
    navigation.classList.toggle('active1');
    bar3.classList.toggle("active1");
    main.classList.toggle("blur");
})
// =======================================================
// =======================================================
// scroll section active js
// =======================================================
const sections = document.querySelectorAll("section");
const navli = document.querySelectorAll("header .navigation ul li")

window.addEventListener('scroll', ()=> {
    let current = "";
    // console.log(pageYOffset);

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeignt = section.clientHeight;
        if(pageYOffset >= (sectionTop -sectionHeignt / 4)){
            current = section.getAttribute("id")
        }


        // console.log(sectionTop)
    })
    navli.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })


    // console.log(current)
})











// =======================================================
// =======================================================
// work box
// =======================================================
const box = document.querySelectorAll(".box");

box.forEach((e) => {
    e.addEventListener('click', ()=> {
        e.classList.toggle('open')
        e.classList.toggle('rot')

        const icon = e.querySelector(".box_icon_1 i");
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
        
        window.addEventListener("scroll", function(){
            console.log("scroll");
            e.classList.remove('open')
            e.classList.remove('rot')
            // window.location.reload();
            const icon = e.querySelector(".box_icon_1 i");
            if (icon.className === 'fa-solid fa-minus'){
                icon.className = 'fa-solid fa-plus';
            }
            else{
                icon.className = 'fa-solid fa-plus';
            }
        });
        

    })
})

// =======================================================
// =======================================================
// all popup modal boxs
// =======================================================
const demoBtns = document.querySelectorAll(".work-link");
const servicesBtn = document.querySelectorAll(".service-link");


servicesBtn.forEach(function(btn){
    btn.onclick = function(){
        const modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
        
    }
})


demoBtns.forEach(function(btn){
    btn.onclick = function(){
        const modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
        
    }
})

const closeBtns = document.querySelectorAll(".modal-close-icon");
closeBtns.forEach(function(btn){
    btn.onclick = function(){
        const modal = btn.closest(".bg-popup").style.display = "none";
    }
})


window.onclick = function(e){
    if(e.target.className === "bg-popup"){
        e.target.style.display = "none";
    }
}

// =======================================
// =======================================
// testimonial
// =======================================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 35,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay:{
        delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2,
        },
    },
});









