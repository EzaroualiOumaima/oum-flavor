"use client";
import React, { FormEvent, useState } from "react";
import axios from "axios";

export default function Page() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    ingredients: "",
    category: "",
    image: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("price", formData.price);
      data.append("ingredients", formData.ingredients);
      data.append("category", formData.category);
      data.append("image", formData.image);
      await axios.post("/api/dishes", data);
      alert("Data Sent")
      setFormData({
        title: "",
        price: "",
        ingredients: "",
        category: "",
        image: "",
      });
    } catch (err) {
      alert("An error has occurred");
      return console.log(err);
    }
  };

  return (
    <div className="h-screen bg-black flex items-start justify-center pt-80">
      <input
        type="text"
        placeholder="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border border-red-600"
      />
      <input
        placeholder="price"
        type="text"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <input
        placeholder="ingredients"
        type="text"
        value={formData.ingredients}
        onChange={(e) =>
          setFormData({ ...formData, ingredients: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <input
        type="file"
        className="text-white"
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
      />

      <button onClick={handleSubmit} className="text-white border border-white">
        Send
      </button>
    </div>
  );
}
