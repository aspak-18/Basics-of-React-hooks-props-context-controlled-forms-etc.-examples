import React, { useState } from "react";

const Controlled2 = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log({ name: value });
    setFormData({ ...formData, [name]: value });
  };
  function formSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <br />
        <label htmlFor="">Email: </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <br />
        <label htmlFor="">Password: </label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Controlled2;
