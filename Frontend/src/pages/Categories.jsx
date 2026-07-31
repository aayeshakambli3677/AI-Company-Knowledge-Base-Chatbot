import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories/");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load categories");
    }
  };

  const addCategory = async () => {
    if (!name || !description) {
      alert("Please enter category name and description");
      return;
    }

    try {
      const response = await api.post("/categories/", {
        name,
        description,
      });

      setCategories([...categories, response.data]);
      setName("");
      setDescription("");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.detail ||
        "Failed to add category"
      );
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) {
      return;
    }

    try {
      await api.delete(`/categories/${id}`);

      setCategories(
        categories.filter((category) => category.id !== id)
      );

      alert("Category deleted successfully");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.detail ||
        "Failed to delete category"
      );
    }
  };

  return (
    <div className="category-container">

      <h1>📂 Categories</h1>

      <div className="add-category">

        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addCategory}>
          Add Category
        </button>

      </div>

      <div className="category-list">

        {categories.map((category) => (

          <div
            className="category-card"
            key={category.id}
          >

            <h2>{category.name}</h2>

            <p>{category.description}</p>

            <button
              onClick={() => deleteCategory(category.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;