import React from 'react'
import CategoryButton from './CategoryButton'
import { useState } from "react";
const ProjectCategories = ({ categories, onFilterProjects }) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat);
        onFilterProjects(activeCat)
    }
    return (
        <div className='portfolio__categories'>
            {
                categories?.map((category) => {
                    return <CategoryButton key={category} category={category} 
                    className={`btn cat__btn ${activeCategory === category ? 'primary' : "white"}`} onChangeCategory={()=>changeCategoryHandler(category)}></CategoryButton>
                })
            }
        </div>
    )
}

export default ProjectCategories