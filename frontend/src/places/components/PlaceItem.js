import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css";


const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={PlaceItem.title} />
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;


/*
In CSS, the double hyphen -- is commonly used as part of a naming convention called "BEM" (Block Element Modifier). BEM is a methodology for naming and organizing CSS classes in a way that promotes maintainability and modularity in web development.

In BEM, a class name is typically structured as follows:

Block: A standalone entity that is meaningful on its own. In the provided example, the block is "button."
Element: A part of a block that has no standalone meaning and is semantically tied to its block. In your example, it might be an "element" within the "button" block, such as "danger."
Modifier: A flag on a block or element that changes the appearance or behavior. In your example, the --danger is a modifier that indicates a specific styling or behavior for a button with a "danger" state.
So, button--danger can be interpreted as a modifier class for a button element, indicating a special styling or behavior associated with a "danger" state. This allows for clear and structured styling, making it easier to understand the purpose and variations of different elements in the codebase. */