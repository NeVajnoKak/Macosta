import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Search = ({ onSearch,id,type,name}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
       
        fetch('http://127.0.0.1:8000/api/search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchQuery,  searchType}),
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

    const handleSet = () => {
        setSearchQuery(id); 
        setSearchType(type);
    }

    return (
        <Form  onSubmit={handleSearch}>
            <button className="btn btn-outline-dark mt-auto" type="submit" onClick={handleSet}>
                {name == null ? "Подробнее" : name }
                {/* Подробнее */}
            </button>
        </Form>
    );
}

export default Search;
