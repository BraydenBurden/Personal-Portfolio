import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TextInput from "../BasicComponents/TextInput";
import TextArea from "../BasicComponents/TextArea";
import SubmitButton from "../BasicComponents/SubmitButton";

const Contact = (props) => {
  const [emailSent, setEmailSent] = useState(false);
  const [fName, setfName] = useState("");
  const [fNameNull, setfNameNull] = useState(false);
  const [lName, setlName] = useState("");
  const [lNameNull, setlNameNull] = useState(false);
  const [email, setEmail] = useState("");
  const [emailNull, setEmailNull] = useState(false);
  const [message, setMessage] = useState("");
  const [messageNull, setMessageNull] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (fName === "") {
      setfName("*First Name is required*");
      setfNameNull(true);
    } else if (lName === "") {
      setlName("*Last Name is required*");
      setlNameNull(true);
    } else if (email === "") {
      setEmail("*Email is required*");
      setEmailNull(true);
    } else if (message === "") {
      setMessage("*Message is required*");
      setMessageNull(true);
    } else {
      setEmailSent(true);

      emailjs
        .sendForm(
          "service_chavyvi",
          "template_vannq88",
          form.current,
          "cTl0w_mk1DkqWELAA"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${background})`,
        backgroundColor: "#a1a1a1",
        backgroundSize: "100%",
      }}
      id="Contact"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // padding: "1rem 5rem 4rem 5rem",
          padding:
            props.screenWidth >= 460
              ? "1rem 6rem 4rem 6rem"
              : "1rem 2rem 4rem 2rem",
          // backgroundColor: "rgba(100,100,100,0.6)",
          // boxShadow:
          //   "inset 0px 60px 40px -10px #a1a1a1, inset 0px -60px 40px -10px #a1a1a1",
        }}
      >
        {!emailSent ? (
          <>
            {/* <h1 style={{ textDecoration: "underline" }}>Contact Me</h1> */}
            <p style={{ alignSelf: "center" }}>
              Send me a email by filling out this form. I'll make sure to
              respond to you when I see it!
            </p>
            <form
              style={{
                boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                width: props.screenWidth >= 1260 ? "60%" : "100%",
                padding: "1rem",
                border: "1px solid #636363",
                borderRadius: "15px",
                backgroundColor: "rgba(117,117,117,0.8)",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
              ref={form}
              onSubmit={sendEmail}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: props.screenWidth >= 600 ? "row" : "column",
                  gap: "1rem",
                }}
              >
                <TextInput
                  valueNull={fNameNull}
                  setValueNull={setfNameNull}
                  value={fName}
                  setValue={setfName}
                  placeholder="First Name"
                  type="text"
                  label="fName"
                  inputWidth="100%"
                  width="100%"
                  height="1.5rem"
                />
                <TextInput
                  valueNull={lNameNull}
                  setValueNull={setlNameNull}
                  value={lName}
                  setValue={setlName}
                  placeholder="Last Name"
                  type="text"
                  label="lName"
                  inputWidth="100%"
                  width="100%"
                  height="1.5rem"
                />
                <TextInput
                  valueNull={emailNull}
                  setValueNull={setEmailNull}
                  value={email}
                  setValue={setEmail}
                  placeholder="Email"
                  type="email"
                  label="user_email"
                  inputWidth="100%"
                  width="100%"
                  height="1.5rem"
                />
              </div>

              <TextArea
                valueNull={messageNull}
                setValueNull={setMessage}
                value={message}
                setValue={setMessage}
                placeholder="Message"
                label="message"
                width="100%"
                height="10rem"
              />

              <SubmitButton type="submit" value="Send Email" />
            </form>
          </>
        ) : (
          <p style={{ alignSelf: "center" }}>
            Email has been sent. To send another email please refresh the page!
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
