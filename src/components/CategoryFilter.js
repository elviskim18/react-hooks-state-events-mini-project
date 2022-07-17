import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [isSelected, setIsSelected] = useState(false)


  function handleClick (id){
    categories.map((category, index) => {
      if(index === id){
        setIsSelected(!isSelected)
      }
    })
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) =>{
        return <button  key={index}  className={isSelected? "selected" : ""}>{category}</button>
      })}
      

    </div>
  );
}

export default CategoryFilter;
