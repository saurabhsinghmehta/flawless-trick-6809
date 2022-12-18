import React from "react";
import "../CSS/checkout.css";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../Assets/ProjectLogo.png";
function Checkout() {
  const navigate = useNavigate();

  const navigate_to = () => {
    navigate("/cart");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="navbar_checkout">
        <div className="CheckoutBotto">
          <button onClick={navigate_to} className="BackToCart">
            Back To Cart
          </button>
        </div>
        <div className="checkoutImg">
          <img src={ProjectLogo} alt="BFC_Logo" />
        </div>
        <div className="checkoutAccount">
          <div className="needHelp">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1073/1073801.png"
                alt="question mark"
              />
            </span>
            <span>Need Help?</span>
          </div>

          <div className="account">
            <span>
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                alt="accoutLogo"
                onClick={goToLogin}
              />
            </span>
            <span onClick={goToLogin}>Account</span>
          </div>
        </div>
      </div>
      <div className="master_checkout">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
            alt="red logo"
          />
        </div>
        <div className="checkout_checkout">
          <h1>CHECKOUT</h1>
          <div>
            <span>
              <img src="https://cdn-icons-png.flaticon.com/512/61/61457.png" />
            </span>
            <span className="secure">Secure Checkout</span>
          </div>
        </div>
        <div className="user_details">
          <div className="Heading_delivery">DELIVERY INFO</div>
          <div className="description">
            <div className="details_delivery">
              <div className="address_container">
                <div className="location_img">
                  <img
                    src="https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png"
                    alt="location logo"
                  />
                </div>
                <span className="address_title h1">
                  KFC Bengaluru - HSR Mall
                </span>
              </div>
              <span className="changeButton">
                <button className="h1">Change</button>
              </span>
            </div>
            <div className="address_details">
              Agara Bus stop, Agara Village, 1st Sector, HSR Layout, Bengaluru,
              Karnataka, India
            </div>
            <div className="address_container">
              <div className="location_img">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_7048.png"
                  alt="location logo"
                />
              </div>
              <span className="address_title h1">ACAP</span>
            </div>
          </div>
        </div>
        <div className="user_details">
          <div className="Heading_delivery">DELIVERY OPTION</div>
          <div className="description">
            <input type="radio" name="option" />
            <label for="age1">Leave at my door</label>
            <div style={{ marginBottom: "1rem" }}>
              To protect you and our team, we practice contactless delivery.
              Your driver will leave the order at your door, knock, step away,
              and wait at a safe distance for you to collect your food.
            </div>
            <input type="radio" name="option" />
            <label htmlFor="age1">Hand it to me</label>
            <hr style={{ marginTop: "1rem", color: "black" }} />
          </div>
        </div>
        <div className="user_details">
          <div className="Heading_delivery">CONTACT INFO</div>
          <div className="description">
            <div style={{ textAlign: "right", fontSize: "small" }}>
              Note: * Indicates required field
            </div>
            <div>
              <form action="">
                <input
                  style={{
                    marginBottom: "1rem",
                    width: "100%",
                    padding: "1rem",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid black",
                    paddingLeft: "0",
                  }}
                  type="text"
                  placeholder="Full Name*"
                />
                <br />
                <input
                  style={{
                    marginBottom: "1rem",
                    width: "100%",
                    padding: "1rem",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid black",
                    paddingLeft: "0",
                  }}
                  type="number"
                  placeholder="Phone Number*"
                />
                <br />
                <input
                  style={{
                    marginBottom: "1rem",
                    width: "100%",
                    padding: "1rem",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid black",
                    paddingLeft: "0",
                  }}
                  type="email"
                  placeholder="Email*"
                />
                <input
                  type="checkbox"
                  style={{
                    marginRight: "1rem",
                    textAlign: "justify",
                  }}
                />
                <label htmlFor="">
                  I want to know about the cool stuff at KFC on Email & SMS (I
                  know I can unsubscribe anytime).
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="user_details">
          <div className="Heading_delivery">PAYMENT</div>
          <div className="description">
            <div
              style={{
                textAlign: "right",
                fontSize: "small",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Add Payment Method
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
