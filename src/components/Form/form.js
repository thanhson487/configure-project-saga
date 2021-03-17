import React from "react";
function Form(props) {
  const onChange = (e) => {
    const data = e.target.value;
    console.log(data);
  };

  return <input onChange={onChange} />;
}

export default Form;
