import React, { useCallback } from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <div className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter a Valid Title "
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Descriptiom"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Enter a Valid Description. "
        onInput={descriptionInputHandler}
      />
    </div>
  );
};

export default NewPlace;
