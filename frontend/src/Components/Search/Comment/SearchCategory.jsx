// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const SearchCategory = ({ onSearch,id}) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = (event) => {
//         event.preventDefault();
       
//         fetch('http://127.0.0.1:8000/api/search/product/category/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ searchQuery }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             onSearch(data);
//             navigate('/catalogs');
//         })
//         .catch(error => {
//             console.error('Error sending search query to backend:', error);
//         });
//     };

//     const handleSet = () => {
//         setSearchQuery(id); 
//     }

//     return (
//         <Form  onSubmit={handleSearch}>
//             <button className="btn btn-outline-dark mt-auto" type="submit" onClick={handleSet}>
//                 Подробнее
//             </button>
//         </Form>
//     );
// }

// export default SearchCategory;
