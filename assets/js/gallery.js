document.querySelectorAll('.filter-button').forEach(button => { //filter-button is the class name of the buttons, and we are selecting all of them. 
    button.addEventListener('click', () => {//adding an event listener to each button. 
        const filter = button.dataset.filter; //filter is the name of the variable that we are using to represent the data-filter attribute of each button. dataset is the data attribute of the button, and filter is the name of the data attribute.

        // Remove 'active' class from all buttons
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button. 
        button.classList.add('active');

        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block'; //block is the display property of the item.
            } else {
                item.style.display = 'none'; //none is the display property of the item. 
            }
        });
    });
});