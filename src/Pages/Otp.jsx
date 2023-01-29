import React from "react";
import { Link, Navigate } from "react-router-dom";
import ProjectLogo from "../Assets/ProjectLogo.png";
import { useNavigate } from "react-router-dom";
import { ConfirmationResult } from "firebase/auth";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [redirectto, setRedirectto] = useState(false);
  const toast=useToast();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // alert("Signin successfull");
        toast({
          title: "Signin Successfull",
          status: "success",
          duration: 2000,
          isClosable: true,
          position:"top"
        });
        setRedirectto(true);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        // alert("Signin faild");
        toast({
          title: "Signin Failed",
          status: "success",
          duration: 2000,
          isClosable: true,
          position:"top"
        });
        setRedirectto(false);
      });
  };
  if (redirectto) {
    navigate("/");
  }

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
        WE JUST TEXTED YOU
      </h1>
      <div style={{ fontSize: ".9rem", marginTop: "2rem" }}>
        Please enter the verification code we just sent to your Number
      </div>
      <div
        style={{
          fontSize: ".9rem",
          marginTop: "1rem",
          textDecoration: "underline",
        }}
      >
        <a href="/login">Different Number?</a>
      </div>
      <div style={{ fontSize: ".9rem", marginTop: "1rem" }}>
        Enter OTP Here 👇🏼
      </div>
      <form onSubmit={onSubmitOTP}>
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
            justifyContent: "center",
            display: "flex",
            outline: "none",
            fontSize: ".8rem",
            color: "red",
            marginLeft: "20%",
            // display: "flex",
            // justifyContent: "center",
          }}
          onChange={handleChange}
          type="number"
          name="otp"
          placeholder="Enter OTP"
          required
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
            marginLeft: "22%",
            marginRight: "20%",
          }}
        />

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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Otp;
