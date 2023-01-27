import React from "react";
import { useState } from "react";
import ProjectLogo from "../Assets/ProjectLogo.png";
import firebase from "../Components/firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/UserAuthContext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signin, googleSignin } = UserAuth();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signin(email, password);
      alert("Login Succesfull");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      await googleSignin();
      navigate("/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Lato, sansSerif",
        margin: "10vh 33% auto 25%",
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
        LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR E-MAIL!
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
          type="Password"
          name="Password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <hr
          style={{
            position: "relative",
            top: "2px",
            paddingLeft: "2px",
            border: "none",
            height: "1px",
            background: "black",
            marginBottom: "26px",
            marginLeft: "15px",
            marginRight: "20px",
          }}
        /> */}

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
          Let's Go
        </button>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "0",
            // paddingLeft: "2px",
            border: "none",
            height: "1px",
            background: "#676565",
            width: "49%",
            color: "gray",
            paddingRight: "3px",
            marginBottom: ".9rem",
          }}
        ></div>
      </div>
      <button
        style={{
          width: "50%",
          color: "white",
          fontSize: ".9rem",
          //   padding: "1rem 3rem",
          borderRadius: "10px",
          marginBottom: ".9rem",
        }}
        onClick={handleGoogleSignin}
      >
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
          alt="Google"
        />
      </button>

      <div>
        Don't have an account?{" "}
        <a href="/userRegister" style={{ textDecoration: "underline" }}>
          Click me
        </a>
      </div>
      <button
        style={{
          backgroundColor: "transparent",
          color: "black",
          border: "1px solid black",
          fontSize: ".9rem",
          padding: ".9rem 5rem",
          borderRadius: "50px",
          marginBottom: "3rem",
          marginTop: "3rem",
        }}
        onClick={goToHome}
      >
        Skip, Continue As Guest
      </button>
    </div>
  );
};

export default UserLogin;
