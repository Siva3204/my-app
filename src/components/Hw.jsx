import React, { useState } from "react";

function FormSubmitter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the formData to a server
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      E-mail:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmitter;
