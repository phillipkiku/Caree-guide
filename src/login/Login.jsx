import React, { useContext, useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import config from "../.config";
import { UserContext } from "../context.jsx/UserContext";
import axios from "axios";

function Login() {
  const { initializeUser } = useContext(UserContext);
  const [formType, setFormType] = useState("login");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    console.log("Data being sent:", jsonData); // Log the data being sent for debugging

    try {
      const res = await axios.post(
        `${config.apiBackend}/api/auth/local/register`,
        jsonData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Server response:", res.data);

      if (res.data.error) {
        setMessage(res.data.error.message);
        return;
      }

      if (res.data.jwt && res.data.user) {
        setMessage("Successful Registration.");
        await initializeUser(jsonData.email, jsonData.password);
        navigate("/");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const login = async (event) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    console.log("Data being sent:", jsonData); // Log the data being sent for debugging

    try {
      const res = await axios.post(
        `${config.apiBackend}/api/auth/local`,
        jsonData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Server response:", res.data);

      if (res.data.error) {
        setMessage(res.data.error.message);
        return;
      }

      if (res.data.jwt && res.data.user) {
        setMessage("Successful Login.");
        await initializeUser(jsonData.identifier, jsonData.password);
        navigate("/");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const toggleFormType = () => {
    setFormType((prevType) => (prevType === "login" ? "register" : "login"));
    setMessage(null);
  };

  return (
    <>
      <div class="text-xl text-white bg-linear-to-b from-blue-400 to-cyan-200 h-240 items-center justify-around flex border">
        <div class=" p-[3rem] w-[30%] justify-items-center text-center ">
          <h1 class="text-[3rem] font-bold text-[#B22222]">
            Welcome <br />
            to <br />
            CareeGuide
          </h1>
          <p class="text-black p-[2rem]">
            We are glad to have you join us make transformational change.
          </p>
        </div>
        <div
          className="form"
          class=" justify-items-center bg-black/80 w-[60%] text-center rounded-[3rem] p-[4rem]"
        >
          {message && <p className="errorMessage">{message}</p>}
          <form onSubmit={formType === "login" ? login : register}>
            <h1>{formType === "login" ? "Login" : "Register"}</h1>
            {formType === "register" && (
              <>
                <TextInput
                  label="Username"
                  placeholder="Your username"
                  name="username"
                  className="textInput"
                />
                <br />
              </>
            )}
            <TextInput
              type="email"
              label="Email"
              placeholder="your@email.com"
              name={formType === "login" ? "identifier" : "email"}
              className="textInput"
            />
            <br />
            <TextInput
              type="password"
              label="Password"
              placeholder="Your password"
              name="password"
              className="textInput"
            />
            <br />
            <div className="group1">
              <Button type="submit">
                {formType === "login" ? "Login" : "Register"}
              </Button>
              <Button variant="light" onClick={toggleFormType}>
                {formType === "login"
                  ? "Switch to Register"
                  : "Switch to Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
