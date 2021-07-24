import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import LoggedInNav from "./Nav/LoggedInNav";

import {
  Login,
  Container,
  Button,
  Formgroup,
  Styledform,
  Labels,
  Inputs,
} from "../styles2/LoginStyles";

const BACKEND_API = process.env.REACT_APP_BACKEND;

export default function AddPosts(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [user_id] = useState(localStorage.getItem("id"));

  const onSubmit = (data) => {
    setLoading(true);
    axiosWithAuth()
      .post(`${BACKEND_API}/posts`, data)
      .then((res) => {
        console.log(res);
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
      <LoggedInNav />
      <Container>
        <Login>Add a Post</Login>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Styledform>
            <Formgroup>
              {/* Start of title field */}
              {/* <Labels htmlFor="title"> */}
              Title
              <Inputs
                type="text"
                name="title"
                placeholder="Add a title"
                {...register("title", {
                  required: true,
                  minLength: 3,
                })}
              />
              {/* </Labels> */}
              {errors.title && errors.title.type === "required" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Please enter a title
                </h2>
              )}
              {errors.title && errors.title.type === "minLength" && (
                <h2 style={{ color: "red", marginBottom: "30px" }}>
                  Title is too short
                </h2>
              )}
              {/* End of title Field */}
              {/* Start of body Field */}
              <Labels htmlFor="body">
                <span> </span>
                body
              </Labels>
              <Inputs
                type={"text"}
                placeholder="body"
                name="body"
                {...register("body", {
                  required: true,
                  minLength: 7,
                })}
              />
              {errors.body && errors.body.type === "required" && (
                <h3 style={{ color: "red", marginBottom: "30px" }}>
                  body is required
                </h3>
              )}
              {errors.body && errors.body.type === "minLength" && (
                <h3 style={{ color: "red", marginBottom: "30px" }}>
                  body is too short - 7 characters
                </h3>
              )}
              {/* End of body field  */}
              <Inputs
                type={"hidden"}
                name="user_id"
                defaultValue={user_id}
                {...register("user_id", {
                  required: true,
                })}
              />
            </Formgroup>

            <div className="footer">
              {!isLoading && <Button>Add post</Button>}

              {isLoading && (
                <>
                  <Button>
                    <i disabled={isLoading}>Adding post..</i>
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
