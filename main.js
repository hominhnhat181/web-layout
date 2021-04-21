$('.object_logo .col-flex').slick({
    speed: 300,
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
document.querySelector('#megax').addEventListener("click", function() {
    document.querySelector('.top_header').style.display = "none";
});


// drop
const accordionHeadingEls = document.querySelectorAll(".accordion__heading");

function accordion() {
    for (let item of accordionHeadingEls) {
        let accordionIcon = item.lastElementChild;
        item.addEventListener("click", function() {
            let accordionDetails = this.nextElementSibling;

            for (let item2 of accordionHeadingEls) {
                if (item2 != item) {
                    item2.nextElementSibling.style.maxHeight = null;
                    item2.lastElementChild.classList.remove("accordion__icon--turn");
                    item2.classList.remove('accordion__heading--active');

                    // item2.classList.remove('show--active');
                }
            }
            item.classList.toggle("accordion__heading--active");

            accordionIcon.classList.toggle("accordion__icon--turn");
            if (accordionDetails.style.maxHeight != 0) {
                accordionDetails.style.maxHeight = null;
            } else {
                accordionDetails.style.maxHeight = accordionDetails.scrollHeight + "px";
            }
        });
    }
}
accordion();
// asr
// document.querySelector('#search').addEventListener("click", function() {
//     document.querySelector('.mid__menu').style.display = "none";
//     document.querySelector('.input-group').style.display = "block";
// });
// search
function search() {
    document.querySelector('.search__container').style.display = "block";
    document.querySelector('.mid__menu-object').style.display = "none";

}
$('.accordion__heading').click(function() {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});