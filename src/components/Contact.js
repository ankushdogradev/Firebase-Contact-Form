import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, contactNo, message } = user;

    if (name && email && contactNo && message) {
      const res = await fetch(
        "https://fir-form-de76e-default-rtdb.firebaseio.com/react-firebase-contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            contactNo,
            message,
          }),
        }
      );

      if (res) {
        setUser({ name: "", email: "", contactNo: "", message: "" });
        alert("Data Stored Successfully");
      }
    } else {
      alert("Empty Fields not Allowed");
    }
  };

  const clear = () => {
    setUser({ name: "", email: "", contactNo: "", message: "" });
  };

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <form onSubmit={handleSubmit} method="POST">
                    <div className="app-form-group">
                      <input
                        autoComplete="off"
                        className="app-form-control"
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        placeholder="NAME"
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        autoComplete="off"
                        className="app-form-control"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        placeholder="EMAIL"
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        autoComplete="off"
                        className="app-form-control"
                        value={user.contactNo}
                        onChange={(e) =>
                          setUser({ ...user, contactNo: e.target.value })
                        }
                        placeholder="CONTACT NO"
                        required
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        autoComplete="off"
                        className="app-form-control"
                        value={user.message}
                        onChange={(e) =>
                          setUser({ ...user, message: e.target.value })
                        }
                        placeholder="MESSAGE"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button
                        type="reset"
                        onClick={clear}
                        className="app-form-button"
                      >
                        CANCEL
                      </button>
                      <button type="submit" className="app-form-button">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
