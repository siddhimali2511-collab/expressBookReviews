const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// 1. Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

// 2. Get book by ISBN
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

// 3. Get books by author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(
            `${BASE_URL}/author/${encodeURIComponent(author)}`
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

// 4. Get books by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(
            `${BASE_URL}/title/${encodeURIComponent(title)}`
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getAllBooks();
getBooksByISBN(1);
getBooksByAuthor("Jane Austen");
getBooksByTitle("Pride and Prejudice");