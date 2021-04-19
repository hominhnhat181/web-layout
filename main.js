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



// ssssssssssssss
const accordionHeadingEls = document.querySelectorAll(".accordion__heading");

function accordion() {
    for (let item of accordionHeadingEls) {
        let accordionIcon = item.lastElementChild;

        item.addEventListener("click", function() {
            let accordionDetails = this.nextElementSibling;
            item.classList.toggle("accordion__heading--active");
            for (let item2 of accordionHeadingEls) {
                if (item2 != item) {
                    item2.nextElementSibling.style.maxHeight = null;
                    item2.lastElementChild.classList.remove("accordion__icon--turn");
                    item2.classList.remove('accordion__heading--active');
                }
            }

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