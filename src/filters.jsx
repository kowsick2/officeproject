import React, { useState } from 'react';

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    size: [],
    brand: [],
    discount: [],
    color: [],
    material: [],
  });

  const handleCheckboxChange = (type, value) => {
    setSelectedFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  return (
    <div className="filterContainer">
      <hr style={{ width: "290px", position: "relative", right: "70px", top: "60px" }} />
      <h2>Filters</h2>

      <div className="filterSection">
        <h2>Men</h2>
        {['T-Shirts & Polos', 'Shirts', 'Jeans', 'Trousers & Chinos', 'Shorts'].map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('category', item)}
            />
            {item}
          </label>
        ))}
      </div>
      <hr style={{ width: "290px", position: "relative", right: "70px", top: "10px" }} />

      <div className="filterSection">
        <h2>Size</h2>
        {['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL'].map((size) => (
          <label key={size}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('size', size)}
            />
            {size}
          </label>
        ))}
      </div>

      <div className="filterSection">
        <h3>Brand</h3>
        {[
          'Abhishit', 'Aditi Wasan', 'Aero Armour', 'Aatman', 
          'Wales Bonner', 'Leather', 'Aangan', 'Arvind'
        ].map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('brand', brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div className="filterSection">
        <h3>Discount</h3>
        {['70% and above', '60% and above', '50% and above', '40% and above'].map((discount) => (
          <label key={discount}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('discount', discount)}
            />
            {discount}
          </label>
        ))}
      </div>

      <div className="filterSection">
        <h3>Color</h3>
        {[
          'Red', 'Gray', 'Brown', 'Green', 'Purple', 
          'Yellow', 'Blue', 'Olive', 'Black'
        ].map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('color', color)}
            />
            {color}
          </label>
        ))}
      </div>

      <div className="filterSection">
        <h3>Material</h3>
        {[
          'Cotton', 'Polyester', 'Silk', 'Metal', 
          'Nylon', 'Acetate', 'Leather', 'Polycotton', 'Denim'
        ].map((material) => (
          <label key={material}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('material', material)}
            />
            {material}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
