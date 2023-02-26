// Creates an array for accordion sections
const accordions = document.querySelectorAll(".accordion");

// Loops over the accordion array
accordions.forEach((accordion) => {
    const header = accordion.querySelector(".acc-header");
    
    // Event Listener for accordion expansion functionality
    header.addEventListener('click', () => {
        // Loops over the array again to remove the "active" class if another panel is clicked. (One panel open at a time.)
        accordions.forEach(item => {
            if(item != accordion){
                item.classList.remove("active");
            }
        });
        accordion.classList.toggle("active");
    })
});

