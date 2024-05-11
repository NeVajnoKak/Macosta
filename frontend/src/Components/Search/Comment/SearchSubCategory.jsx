// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const SearchSubCategory = ({ onSearch,id, name }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = (event) => {
//         event.preventDefault();
       
//         fetch('http://127.0.0.1:8000/api/search/product/subCategory/', {
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
//         setSearchQuery(id); // Устанавливаем значение name в searchQuery
//     }

//     return (
//         <Form className="d-flex me-2" onSubmit={handleSearch}>
//             <button  type="submit" onClick={handleSet}>
//                 {name}
//             </button>
//         </Form>
//     );
// }

// export default SearchSubCategory;
