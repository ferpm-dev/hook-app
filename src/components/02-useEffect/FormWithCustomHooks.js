import React, { useState } from "react";

import "./effects.css";

export const FormWithCustomHooks = () => {
  const [formState, setFormState] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = formState;

  

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>FormWithCustomHooks</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mt-4"
          autoComplete="off"
          placeholder="tu nombre"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control mt-4"
          autoComplete="off"
          placeholder="tu email"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control mt-4"
          placeholder="******"
          value={password}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
