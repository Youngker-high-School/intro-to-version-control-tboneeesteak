// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {

    // 1. **Interactive News Section**: Toggle visibility of news content on button click
    const readMoreButtons = document.querySelectorAll('.news-item button');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newsContent = button.previousElementSibling; // Get the <p> tag with the news content
            if (newsContent.style.display === "none" || newsContent.style.display === "") {
                newsContent.style.display = "block";
                button.textContent = "Read Less"; // Change the button text
            } else {
                newsContent.style.display = "none";
                button.textContent = "Read More"; // Change the button text
            }
        });
    });

    // 2. **Dynamic Schedule**: Highlight upcoming games and display today's date
    const today = new Date();
    const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const scheduleItems = document.querySelectorAll('#schedule ul li');

    scheduleItems.forEach(item => {
        const gameDate = item.textContent.split(' - ')[1]; // Extract the date from the list item text
        if (gameDate === todayDate) {
            item.style.backgroundColor = "#f2d7d5"; // Highlight today's game
        }
    });

    // Display today's date in a designated area
    const dateElement = document.createElement('p');
    dateElement.textContent = `Today's Date: ${todayDate}`;
    document.querySelector('#home').appendChild(dateElement);

    // 3. **Live Score Update (Mocked)**: Simulate a live score update for the game
    let liveScore = 0; // Initial score
    const scoreElement = document.createElement('p');
    scoreElement.textContent = `Live Score: ${liveScore} - 0`;
    document.querySelector('#home').appendChild(scoreElement);

    setInterval(() => {
        liveScore++; // Increase the score by 1 every 5 seconds
        scoreElement.textContent = `Live Score: ${liveScore} - 0`;
    }, 5000); // Update score every 5 seconds

});

