import React from "react";
import { useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import ProjectLogo from "../Assets/ProjectLogo.png";
import firebase from "../Components/firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/UserAuthContext";
import { async } from "@firebase/util";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/userlogin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Lato, sansSerif",
        margin: "10vh 33% auto 25%",
        // border: "1px solid red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span> Sign In / Sign up</span>
      <div
        style={{
          padding: "1%",
          margin: "2% 0",
          /* width: 28%; */
          /* margin: auto; */
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Link to="/">
          <img
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            src={ProjectLogo}
            alt="BFC"
            width="70px"
          />
        </Link>
      </div>

      <h1
        style={{
          display: "flex",
          fontFamily: "Oswald, sansSerif",
          fontSize: "1.3rem",
          padding: "3rem, 3rem",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        Hello User Please Sign-up!
      </h1>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div id="sign-in-button"></div>
        <div
          style={{
            justifyContent: "left",
            display: "flex",
            padding: "2rem 1rem 0.5rem",
          }}
        >
          {/* <label style={{ fontSize: ".9rem" }}>Phone Number*</label> */}
        </div>
        <input
          style={{
            width: "100%",
            padding: "0 1rem 0.5rem",
            justifyContent: "left",
            display: "flex",
            outline: "none",
            fontSize: "1rem",
            color: "red",
            borderBottom: "1px solid black",
            marginBottom: "1rem",
          }}
          type="email"
          name="email"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{
            width: "100%",
            padding: "0 1rem 0.5rem",
            justifyContent: "left",
            display: "flex",
            outline: "none",
            fontSize: "1rem",
            color: "red",
            borderBottom: "1px solid black",
            marginBottom: "1rem",
          }}
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={{ fontSize: ".8rem", marginBottom: "2rem" }}>
          By “logging in to BFC”, you agree to our{" "}
          <a
            style={{ fontSize: ".9rem", textDecoration: "underline" }}
            href="https://online.kfc.co.in/privacyPolicy"
            target="blank"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            style={{
              fontSize: ".9rem",
              color: "black",
              textDecoration: "underline",
            }}
            href="https://online.kfc.co.in/terms-and-conditions"
            target="blank"
          >
            {" "}
            Terms & Conditions.
          </a>
        </div>
        <button
          style={{
            width: "50%",
            backgroundColor: "#4185f4",
            color: "white",
            fontSize: ".9rem",
            padding: "1rem 3rem",
            borderRadius: "10px",
            marginBottom: ".9rem",
          }}
        >
          SIGN UP
        </button>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>

      <div>
        Already have an account?{" "}
        <a href="/userlogin" style={{ textDecoration: "underline" }}>
          Click me
        </a>
      </div>
    </div>
  );
};

export default UserRegister;
