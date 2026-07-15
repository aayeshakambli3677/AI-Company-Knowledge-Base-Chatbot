import React, { useState } from "react";
import "./Categories.css";


function Categories() {


  const [categories, setCategories] = useState([

    {
      id: 1,
      name: "AI Documents",
      description: "AI related documents"
    },

    {
      id: 2,
      name: "Company Files",
      description: "Company information"
    }

  ]);


  const [name, setName] = useState("");



  const addCategory = () => {


    if(!name){
      return;
    }


    const newCategory = {

      id: categories.length + 1,

      name: name,

      description: "New Category"

    };


    setCategories([
      ...categories,
      newCategory
    ]);


    setName("");

  };




  const deleteCategory = (id) => {


    setCategories(

      categories.filter(
        (category)=> category.id !== id
      )

    );

  };



  return (

    <div className="category-container">


      <h1>
        📂 Categories
      </h1>


      <div className="add-category">


        <input

          type="text"

          placeholder="Enter category name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

        />


        <button onClick={addCategory}>
          Add Category
        </button>


      </div>




      <div className="category-list">


      {
        categories.map((category)=>(


          <div 
          className="category-card"
          key={category.id}
          >


            <h2>
              {category.name}
            </h2>


            <p>
              {category.description}
            </p>


            <button
            onClick={()=>deleteCategory(category.id)}
            >
              Delete
            </button>


          </div>


        ))
      }


      </div>


    </div>

  );

}


export default Categories;