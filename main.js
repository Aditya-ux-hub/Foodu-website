// slick slider effects js 
$(".slider-cards ").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: false,
  nextArrow: false,
});
$(".menu-cards").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: false,
  nextArrow: false,
});
$(".eight-screen ").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
});
// slick slider effects js 


// $grid.isotope({ filter: '.burger' });


//  Aos effects
AOS.init();

//  Aos effects 

// form  contact-us  get data 

var names = document.getElementById('names');
var emails = document.getElementById('emails');
var descriptions = document.getElementById('descriptions');
var btns = document.getElementById('btn-submit')

console.log(names);

const btnss = document.querySelectorAll('.hov-btns')
btnss.forEach(elem=>{
   elem.addEventListener('click', ()=>{
       if(elem.innerText == "Book A Table"){
         window.open('https://wa.me/918874631949?text=I want to book a table')
       } else if(elem.innerText == "Order Now"){
         window.open('https://wa.me/918874631949?text=I want to make a order')
       }
   })
})

const form = document.getElementById('contactform');

form.addEventListener('submit', function (e) {
  e.preventDefault() 
  const msg = `Name: ${names.value}\nEmail: ${emails.value}\nMessage: ${descriptions.value}`
  window.open(`https://wa.me/918874631949?text=${encodeURIComponent(msg)}`)
 })


// form  contact-us  get data 