// Sample news data
const newsData = [
    {
        title: "Breaking News: Global Summit in New York",
        description: "Leaders from around the world gather in New York to discuss climate change and global trade...",
        link: "#"
    },
    {
        title: "Technology Revolution: AI Making Waves",
        description: "AI technology is changing the way we live, from healthcare to self-driving cars...",
        link: "#"
    },
    {
        title: "Election Update: Key Moments from the Campaign Trail",
        description: "As the election draws near, candidates continue to battle for public support in major swing states...",
        link: "#"
    }
];

// Function to load news into the page
function loadNews() {
    const container = document.getElementById("news-container");

    newsData.forEach(news => {
        const newsItem = document.createElement("article");
        newsItem.classList.add("news-item");

        newsItem.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.description}</p>
            <a href="${news.link}">Read more</a>
        `;

        container.appendChild(newsItem);
    });
}

// Call the loadNews function when the page loads
window.onload = loadNews;
