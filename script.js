const apiKey = 'QyqOOuJk9ImIVPmjSqv5aybRAMpEgd8Omwl1Kzu8'; // Replace with your actual API key

async function fetchQuote() {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        
        // Check if the response is OK
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        
        // The API returns an array, get the first quote
        return {
            text: data[0].quote,
            author: data[0].author,
        };
    } catch (error) {
        console.error("Error fetching quote:", error);
        return {
            text: "An error occurred while fetching the quote.",
            author: "Unknown"
        };
    }
}

async function displayQuote() {
    const { text, author } = await fetchQuote();
    document.getElementById("quote").textContent = text;
    document.getElementById("author").textContent = `- ${author}`;
}

document.getElementById("new-quote").addEventListener("click", displayQuote);

// Display the first quote on page load
displayQuote();
