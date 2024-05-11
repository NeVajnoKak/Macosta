import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchProduct = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
       
        fetch('http://127.0.0.1:8000/api/search/product/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchQuery }),
        })
        .then(response => response.json())
        .then(data => {
            onSearch(data);
            navigate('/catalog');
        })
        .catch(error => {
            console.error('Error sending search query to backend:', error);
        });
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Form className="d-flex me-2" onSubmit={handleSearch}>
            <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button className="btn btn-outline-light" type="submit">
                Search
            </button>
        </Form>
    );
}

export default SearchProduct;
