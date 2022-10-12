
// let slideIndex = 1;    // telling the index number of pictures
// showSlides(slideIndex);  // showslides will be pictures indexs, let er slideidex k showslide dia new name dia push kora hoiese , but keno? amra ki slideindex diai function creat korte partam na?

// // now creating showslides function
// function showSlides(n){
//   // slides er kaj suru
//   let slides = document.querySelectorAll(".mySlides") ;
//   let slidesArr =Array.from(slides);

//   if (n > slidesArr.length){   // jodi 1 er theke myslides er leng boro hoi tahole protita slide er jonno index number 1 diba
//     slideIndex = 1
//   }

//   if(n < 1){  // jodi n=1 er theke 1 boro hoi tahole tumi slide er index number(0) slide er lenght(1) diba
//     slideIndex = slidesArr.length
//     }

//   slidesArr.map((item) => {
//     item.style.display = 'none';
//   });
//   slidesArr[slideIndex - 1].style.display = "block";

//   // slide er kaj sesh
//   // dots start

//   let dot = document.querySelectorAll(".dot");
//   let dotArr = Array.from(dot); //converting into array

//   dotArr.map((items) => {
//     items.className = items.className.replace(" active", "")
//   })
//   dot[slideIndex - 1].className += (" active")

//  // dot er kaj sesh

// }
//  // this function is created for prev/next button
// function plusSlides(n){    
//     showSlides(slideIndex = slideIndex + n)  // 1 = 1+1= 2 , 2 = 2+1 =3
// }

// //this function is created fot dots
// function currentSlide (n){   
//     showSlides (slideIndex = n)    // if 1 = 1 , 2 =2 index etc
// }


// let slideErIndexNumber = 1 
// slideDekha(slideErIndexNumber); 
// function slideDekha (slideNUmber){
//     let slideErnam = document.querySelectorAll(".mySlides");
//     let slideErArray = Array.from(slideErnam);

//     slideErArray.map((item) => {
//         item.style.display = 'none';
//     });

//         if(slideNUmber > slideErArray.length ){
//             slideErIndexNumber = 1
//         }
//         if(slideNUmber < 1){
//         slideErIndexNumber = slideErArray.length
//         }

//     slideErArray[slideErIndexNumber - 1].style.display = "block"

//     //dots
//     let dot = document.querySelectorAll(".dot");
//     let dotErArray = Array.from(dot);

//         dotErArray.map((item) => {
//             item.className = item.className.replace(" active", "")
//         });

//     dotErArray[slideErIndexNumber - 1] += (" active");
// }  
// function plusSlides(n){
//     slideDekha (slideErIndexNumber += n)
// }
// function currentSlide(n){
//     slideDekha (slideErIndexNumber = n)
// }

// clear coding -- >>
let slideIndex = 1;
 showSlides(slideIndex);

function showSlides(n){
    // slides
    let slides = document.querySelectorAll(".mySlides");
    let slideArr = Array.from(slides);

        slideArr.map((item) => {
            item.style.display = "none";
        });

        if( n > slideArr.length ){
            slideIndex = 1
        }
        if(n < 1 ){
            slideIndex = slideArr.length
        }
    slideArr[slideIndex - 1].style.display = "block";

    // dots
   let dot = document.querySelectorAll(".dot");
   let dotArr = Array.from(dot);
     dotArr.map((item) => {
        item.className = item.className.replace(" active", "");
     }) 
    dot[slideIndex - 1].className += (" active")

}
// prev/next
function plusSlides(n){
    showSlides(slideIndex += n)
}

// dots
function currentSlide(n){
    showSlides(slideIndex = n)
}