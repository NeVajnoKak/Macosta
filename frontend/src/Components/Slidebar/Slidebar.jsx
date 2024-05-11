import React, { useState ,useEffect} from 'react';
import CategoryService from '../../API/Service/CategoryService/CategoryService';
import Search from '../Search/Search';

const Slidebar = ({onSearch}) => {
    const [category, setCategory] = useState([]); 
    const [subCategory, setSubCategory] = useState([]);

    useEffect(()=>{
        fetchCategory(); 
        fetchSubCategory();
    },[]);
    const fetchSubCategory = () => {
        // console.log("subcategory correctly")
        CategoryService.getSubCategory() 
            .then(response => {
                setSubCategory(response.data); 
            })
            .catch(error => {
                console.error('Error fetching subcategories:', error);
            });
    };

    const fetchCategory = () => {
        CategoryService.getCategory() 
            .then(response => {
                setCategory(response.data); 
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    };

    return (
      <>
      <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row justify-content-center">
                        {category.map(categoryItem => (
                            <div className="col mb-1" key={categoryItem.id}>
                                <div className="dropdown col mb-1" key={categoryItem.id}>
                                    <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {categoryItem.name}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {subCategory
                                            .filter(subCategoryItem => subCategoryItem.category === categoryItem.id)
                                            .map(filteredSubCategory => (
                                                <li key={filteredSubCategory.id}>
                                                    <div className="dropdown-item" href="#">
                                                        {/* <SearchSubCategory onSearch={onSearch} id = {filteredSubCategory.id}  name = {filteredSubCategory.name}  /> */}
                                                        <Search onSearch={onSearch} id={filteredSubCategory.id} type={"subcategory"} name={filteredSubCategory.name}></Search>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
      </>
    );
}

export default Slidebar;
