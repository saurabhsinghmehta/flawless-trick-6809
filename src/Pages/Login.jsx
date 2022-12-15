import React from "react";
import { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import ProjectLogo from "../Assets/ProjectLogo.png";
import firebase from "../Components/firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setName(e.target.value);
  };

  //   console.log(name);

  const configureCaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
      },
      auth
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + name;
    console.log("phoneNumber is", phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        console.log("OTP has been send");
        setRedirect(true);
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("OTP not send");
        setRedirect(false);
      });
  };

  if (redirect) {
    navigate("/otp");
  }
  const goToHome = () => {
    navigate("/");
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
        LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
      </h1>

      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <div
          style={{
            justifyContent: "left",
            display: "flex",
            padding: "2rem 1rem 0.5rem",
          }}
        >
          <label style={{ fontSize: ".9rem" }}>Phone Number*</label>
        </div>
        <input
          style={{
            width: "100%",
            padding: "0 1rem 0.5rem",
            justifyContent: "left",
            display: "flex",
            outline: "none",
            fontSize: ".8rem",
            color: "red",
          }}
          type="number"
          name="mobile"
          placeholder="Phone Number"
          maxLength="10"
          required
          onChange={handleChange}
        />
        <hr
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
        />

        <div style={{ fontSize: ".8rem", marginBottom: "2rem" }}>
          By “logging in to KFC”, you agree to our{" "}
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
            backgroundColor: "black",
            color: "#d8d8d8",
            fontSize: ".9rem",
            padding: "1rem 3rem",
            borderRadius: "50px",
            marginBottom: "3rem",
          }}
        >
          Send Me a Code
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
            top: "4px",
            // paddingLeft: "2px",
            border: "none",
            height: "1px",
            background: "#676565",
            width: "40%",
            color: "gray",
            paddingRight: "3px",
          }}
        ></div>
        <div style={{ paddingLeft: ".7rem", paddingRight: ".7rem" }}>or</div>
        <div
          style={{
            position: "relative",
            top: "4px",
            // paddingLeft: "2px",
            border: "none",
            height: "1px",
            background: "#676565",
            width: "40%",
            // marginBottom: "26px",
            paddingLeft: "3px",
            // marginRight: "20px",
          }}
        ></div>
      </div>
      <button
        style={{
          backgroundColor: "transparent",
          color: "black",
          border: "1px solid black",
          fontSize: "1rem",
          padding: ".9rem 12rem",
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

export default Login;
