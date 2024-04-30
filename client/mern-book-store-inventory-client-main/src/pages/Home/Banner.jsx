import React, { useState, useEffect, useRef } from 'react';
import BannerCard from '../shared/BannerCard';

export const Banner = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchResult, setSearchResult] = useState('');
    const searchSuggestionsRef = useRef(null);

    useEffect(() => {
        // Fetch books from the backend when the component mounts
        fetchBooks();

        // Event listener to detect clicks outside of search suggestions
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:5000/all-books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        // Filter books based on the search query
        const query = e.target.value.toLowerCase();
        const filtered = books.filter(book => book.bookTitle.toLowerCase().includes(query));
        setSearchedBooks(filtered);
    };

    const handleSearch = () => {
        setSearchResult(searchedBooks.length > 0 ? 'Available' : 'Not available');
    };

    const handleBookClick = (bookTitle) => {
        setSearchQuery(bookTitle);
    };

    const handleClickOutside = (e) => {
        if (searchSuggestionsRef.current && !searchSuggestionsRef.current.contains(e.target)) {
            setSearchedBooks([]);
        }
    };

    return (
        <div className='bg-teal-100 px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 w-full max-w-7xl mx-auto'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-teal-100 w-full'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Buy and sell your books <span className='text-blue-700'>for the best prices</span></h1>
                    <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                    <div className="relative w-full" ref={searchSuggestionsRef}>
                        <input type="search" placeholder='Search a book here' className='py-2 px-2 rounded-s-sm w-full' onChange={handleSearchChange} value={searchQuery} />
                        {/* Display search suggestions */}
                        {searchedBooks.length > 0 && (
                            <ul className="absolute z-10 bg-white shadow-md rounded-md mt-2 w-full max-h-48 overflow-y-auto">
                                {searchedBooks.map(book => (
                                    <li key={book._id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleBookClick(book.bookTitle)}>{book.bookTitle}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 ml-2' onClick={handleSearch}>Search</button>
                    {/* Display search result */}
                    {searchResult && (
                        <div className="mt-2 p-4 bg-gray-100 rounded-md w-full">
                            <p>{searchResult}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
