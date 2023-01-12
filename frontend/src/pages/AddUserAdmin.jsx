import React, { useState } from "react";

import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import { useNavigate } from "react-router-dom";

function AddUserAdmin() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    user_type: "administrateur",
  });

  const handleNewUser = (position, value) => {
    const newUser = { ...user };
    newUser[position] = value;
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancelButton = () => {
    navigate("/users");
  };

  return (
    <div>
      <h1 className="text-center font-bold mt-5 mb-5 text-green-900">
        Add user
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-8">
          <InputTemplate
            textPlaceholder="Email"
            customWidth="w-72 border-2 border-500 rounded-lg"
            value={user.user_email}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            inputType="text"
            name="email"
          />
        </div>
        <div className="mb-8">
        <InputTemplate
            textPlaceholder="Password"
            customWidth="w-72 border-2 border-500 rounded-lg"
            value={user.user_email}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            inputType="text"
            name="password"
          />
          </div>
          <div className="mb-8">
        <InputTemplate
            textPlaceholder="Confirm password"
            customWidth="w-72 border-2 border-500 rounded-lg"
            value={user.user_email}
            onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            inputType="text"
            name="password"
          />
        </div>
        <div className="mb-8">
          <p className="flex justify-center mb-2">Role</p>
          <div className="flex justify-center">
            <select
              className="w-52 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm"
              name="user_role"
              onChange={(e) => handleNewUser(e.target.name, e.target.value)}
            >
              <option value="administrateur">Administrator</option>
              <option value="utilisateur">User</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
        <ButtonTemplate
            methodOnClick={handleCancelButton}
            buttonType="button"
            buttonText="Back"
            buttonStyle="bg-green-900 hover:bg-green-700 w-24 h-10 ml-3 rounded-lg text-white"
          />
          <button
            type="submit"
            className="bg-green-900 hover:bg-green-700 w-24 h-10 ml-3 rounded-lg text-white"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUserAdmin;
