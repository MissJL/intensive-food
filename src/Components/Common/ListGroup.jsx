import React from "react";

function ListGroup({ categories, onCategory }) {
  return (
    <span>
      <ul className="list-group container-sm">
        {categories.map((category) => (
          <li
            key={category.name}
            className={
              category.isActive ? "list-group-item active" : "list-group-item"
            }
            onClick={() => onCategory(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </span>
  );
}

export default ListGroup;
