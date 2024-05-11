// // Search.jsx
// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// const SearchNull = ({ onSearch }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();

//     // const handleSearch = (event) => {
//     //     event.preventDefault();

//     //     fetch('http://127.0.0.1:8000/api/product/', {
//     //         method: 'GET',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({ searchQuery }),
//     //     })
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         onSearch(response.data); 
//     //         navigate('/catalogs');
//     //     })
//     //     .catch(error => {
//     //         console.error('Error fetching products:', error);
//     //     });
//         // ProductService.getProduct()
            
    
//     const handleSearch = (event) => {
//         event.preventDefault();
       
//         fetch('http://127.0.0.1:8000/api/product/', {
//             method: 'GET',
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
//         setSearchQuery(); // Устанавливаем значение name в searchQuery
//     }

//     return (
//         <Form  onSubmit={handleSearch}>
//             <button className='ss' onClick={handleSet} type='submit'>
//                 <Nav.Link href="#action2" onClick={handleSet}>Каталог</Nav.Link>
//             </button>
//         </Form>
//     );
// }

// export default SearchNull;
