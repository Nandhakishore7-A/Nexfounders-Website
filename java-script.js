
/* =================================
   SCROLL REVEAL
================================= */

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
});


/* =================================
   STICKY IMAGE STORYTELLING
================================= */

const storyItems = document.querySelectorAll(".story-item");
const storyImages = document.querySelectorAll(".story-image");

const storyObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const index = entry.target.dataset.story;

                storyItems.forEach(item => {
                    item.classList.remove("active");
                });

                storyImages.forEach(image => {
                    image.classList.remove("active");
                });

                entry.target.classList.add("active");

                const activeImage = document.querySelector(
                    `.story-image[data-image="${index}"]`
                );

                if (activeImage) {
                    activeImage.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.5
    }
);

storyItems.forEach(item => {
    storyObserver.observe(item);
});


/* =================================
   SMOOTH NAVIGATION
================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
