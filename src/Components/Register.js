import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import {
  Login,
  Container,
  Button,
  Body,
  Formgroup,
  Styledform,
  Labels,
  Inputs,
  PwdContainer,
  PwdImage,
} from "../styles2/LoginStyles";

import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";
import Nav from "./Nav/Nav";

const BACKEND_API = process.env.REACT_APP_BACKEND;

export default function RegisterForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    axiosWithAuth()
      .post(`${BACKEND_API}/api/auth/register`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("first_name", res.data.user.first_name);
        props.history.push("/dashboard");
      })
      .catch(handleErrors);
  };
  function handleErrors(err) {
    if (err.response) {
      alert("There was a problem", err.response.status);
      return <h1>'There was a problem', {err.response.status}</h1>;
    } else if (err.request) {
      console.log("There was a big problem with the request");
    } else {
      console.log("error", err.message);
    }
  }

  return (
    <div>
      <Nav />
      <Container>
        <Login>Register</Login>
        <Body>Create a unique username and password.</Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styledform>
            <Formgroup>
              First Name
              <Inputs
                type="text"
                name="first_name"
                placeholder="First Name"
                {...register("first_name", {
                  required: true,
                  minLength: 1,
                  maxLength: 24,
                })}
              />
              {errors.first_name && errors.first_name.type === "required" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Please enter your first name
                </h2>
              )}
              Last Name
              <Inputs
                type="text"
                name="last_name"
                placeholder="Last Name"
                {...register("last_name", {
                  required: true,
                  minLength: 1,
                  maxLength: 24,
                })}
              />
              {errors.last_name && errors.last_name.type === "required" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Please enter your last name
                </h2>
              )}
              Phone Number
              <small>Format: 123456789</small>
              <Inputs
                type="text"
                name="telephone"
                placeholder="Phone"
                {...register("telephone", {
                  required: true,
                  minLength: 9,
                  maxLength: 24,
                })}
              />
              {errors.telephone && errors.telephone.type === "required" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Phone number error - not enough digits
                </h2>
              )}
              {errors.telephone && errors.telephone.type === "minLength" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Phone number error - not enough digits
                </h2>
              )}
              {/* Start of UserName field */}
              {/* <Labels htmlFor="username"> */}
              Select a User Name
              <Inputs
                type="text"
                name="username"
                placeholder="username"
                {...register("username", {
                  required: true,
                  minLength: 3,
                  maxLength: 7,
                })}
              />
              {/* </Labels> */}
              {errors.username && errors.username.type === "required" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Please enter a username
                </h2>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Username is too short
                </h2>
              )}
              {errors.username && errors.username.type === "maxLength" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Username is too long
                </h2>
              )}
              {/* End of UserName Field */}
              {/* Start of Password Field */}
              <Labels htmlFor="password">
                <span> </span>
                Choose a Password
              </Labels>
              <PwdContainer>
                <Inputs
                  type={isRevealPwd ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 7,
                    maxLength: 7,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <h3 style={{ color: "red", marginBottom: "30px" }}>
                    Password is required
                  </h3>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <h3 style={{ color: "red", marginBottom: "30px" }}>
                    Password is too short - 7 characters
                  </h3>
                )}
                {/* End of password field  */}
                <PwdImage
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </PwdContainer>
            </Formgroup>

            <div className="footer">
              {!isLoading && <Button>Register</Button>}

              {isLoading && (
                <>
                  <Button>
                    <i disabled={isLoading}>Registering..</i>
                  </Button>

                  <p>Please allow a few seconds while server wakes up</p>
                </>
              )}
            </div>
          </Styledform>
        </form>
      </Container>
    </div>
  );
}
