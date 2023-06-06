// Create a carousel with Vue.js 

// Bonus:
// 1- On clicking a thumbnail, display the corresponding image in full size.
// 2- Apply autoplay to the slider: change the image automatically every 3 seconds.
// 3- When the mouse hovers over the slider, pause the autoplay and resume it when the mouse exits.

(() => {
const { createApp } = Vue;

createApp({

    // Status of the app (data) 
    data() {
        return {
            // Array of objects with the elements of the carousel 
            // Start creating an array of literal objects
            // Each object will have an image, title and description
            carousel:
            [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    index: 0
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    index: 1
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    index: 2
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    index: 3
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    index: 4
                }
            ], 

            // Index of the current element of the carousel
            activeIndex: 0,

            // Status of the autoplay of the carousel
            isAutoplayActive: false,
            isAutoplayReversed: false,
            autoplayInterval: null
        }  
    },

    // Method called when the component is mounted
    mounted() {
        const carouselElement = document.querySelector('#app');

        // Start the autoplay when the component is mounted
        this.startAutoplay();

        // Pause autoplay on mouseenter
        carouselElement.addEventListener('mouseenter', this.pauseAutoplay);  
        // Resume autoplay on mouseleave
        carouselElement.addEventListener('mouseleave', this.resumeAutoplay);
    },

    // Method called before the Vue component is unmounted
    beforeUnmount() {
        const carouselElement = document.querySelector('.carousel-container');
    
        // Remove event listeners to prevent memory leaks
        carouselElement.removeEventListener('mouseenter', this.pauseAutoplay);
        carouselElement.removeEventListener('mouseleave', this.resumeAutoplay);
    },

    // Methods of the app
    methods: {

        // Method to change the current element of the carousel to the previous one
        getPrevious() {
            // I need to take into account the edge case, what to do if I'm at the first element, and I want to go to the previous one, which will be the last element of the array

            // Check if the active index is at the first element
            if (this.activeIndex === 0) {
                // If so, set the active index to the last element of the carousel
                this.activeIndex = this.carousel.length - 1;
            }
            else {
                // If not at the first element, decrement the active index by 1
                this.activeIndex--;
            }
        },

        // Method to change the current element of the carousel
        getNext() {
            // I need to take into account the edge case, what to do if I'm at the last element, and I want to go to the next one, which will be the first element of the array

            // Check if the active index is at the last element
            if (this.activeIndex === this.carousel.length - 1) {
                // If so, set the active index to the first element of the carousel
                this.activeIndex = 0;
            }
            else {
                // If not at the last element, increment the active index by 1
                this.activeIndex++;
            }
        },

        // Method to check if item is active
        isActive(index) {
            return index === this.activeIndex;
        },

        // Method to change the current element of the carousel to the one clicked on the thumbnails
        goToThumbnailSlide(newIndex) {
            // Set the active index to the index of the thumbnail clicked
            this.activeIndex = newIndex;
        },

        // Method to change the current element of the carousel automatically
        toggleAutoPlay() {
            // The variable this.isAutoplayActive will toggle its value between true and false each time the line of code is executed. This allows to switch the activation of the autoplay by simply clicking the pause/resume play button.
            this.isAutoplayActive = !this.isAutoplayActive;

            // If the autoplay is not active, start the autoplay
            if (this.isAutoplayActive) 
            {
                this.startAutoplay();
            } 
            else // If the autoplay is active, stop the autoplay
            {
                this.stopAutoplay();
            }
        },

        // Method to change the current element order of the carousel automatically
        reverseAutoplay() {
            // The variable this.isAutoplayReversed will toggle its value between true and false each time the line of code is executed. This allows to switch the direction of the autoplay by simply clicking the reverse autoplay button.
            this.isAutoplayReversed = !this.isAutoplayReversed;
            // Reverse the order of the carousel
            this.carousel.reverse();
        
            // If the autoplay is not active, start the autoplay
            if (this.isAutoplayActive) 
            {
                this.startAutoplay();
            }
        },

        // Method to start the autoplay
        startAutoplay() {
            // Clear the interval to prevent multiple intervals running at the same time
            this.stopAutoplay();

            // Set the interval to change the current element of the carousel automatically
            this.autoplayInterval = setInterval(() => {
                // If the autoplay is reversed, get the previous element of the carousel
                // If not, get the next element of the carousel
                this.isAutoplayReversed ? this.getPrevious() : this.getNext();
            }, 3000);
        },
        
        // Method to stop the autoplay
        stopAutoplay() {
            // Clear the interval to prevent multiple intervals running at the same time
            clearInterval(this.autoplayInterval);
        },

        // Method to pause the autoplay
        pauseAutoplay() {
            // If the autoplay is active, stop the autoplay
            this.stopAutoplay();
        },

        // Method to resume the autoplay
        resumeAutoplay() {
            // If the autoplay is active, start the autoplay
            if (this.isAutoplayActive) 
            {
                this.startAutoplay();
            }
        },
    }

}).mount('#app')

})();
