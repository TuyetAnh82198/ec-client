import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { StyledForm, StyledContainer, StyledFormFooter } from "./styled";
import { API } from "../../../utils/constants";
import CirProgress from "../../../components/circularProgress/CircularProgress";
import handleResponse from "../../../utils/handleResponse";
import handleNavigate from "../../../utils/handleNavigate";

const Form = ({ pageTitle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputFields, setInputFields] = useState(["Email", "Password"]);
  const [inputs, setInputs] = useState({
    Email: "",
    Password: "",
  });
  const [gmail, setGmail] = useState("");

  useEffect(() => {
    if (pageTitle === "Register") {
      setInputFields((prev) => {
        return [...prev, "Fullname", "Phone"];
      });
      setInputs((prev) => {
        return { ...prev, Fullname: "", Phone: "" };
      });
    }
  }, []);

  const handleInputs = (e, field) => {
    setInputs((prevInputs) => {
      return { ...prevInputs, [field]: e.target.value };
    });
  };

  const navigate = useNavigate();
  const submitForm = (gmail) => {
    let fetchUrl;
    if (pageTitle === "Register" && gmail) {
      fetchUrl = process.env.REACT_APP_SERVER + API.USER.LOGIN;
    } else {
      fetchUrl =
        process.env.REACT_APP_SERVER + API.USER[pageTitle.toUpperCase()];
    }
    let body = {};
    if (gmail) {
      body.Gmail = gmail;
    } else {
      body.Email = inputs.Email;
      body.Password = inputs.Password;
      if (pageTitle === "Register") {
        body = {
          ...body,
          Fullname: inputs.Fullname,
          Phone: inputs.Phone,
          role: "client",
        };
      }
    }
    let headers = {
      "Content-Type": "application/json",
    };
    const isFirefox = navigator.userAgent.includes("Firefox");

    let fetchObject = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };
    if (pageTitle === "Login") {
      fetchObject = {
        ...fetchObject,
        headers: {
          ...headers,
          "X-Browser": isFirefox ? "Firefox" : "Non-Firefox",
        },
        credentials: "include",
      };
    }

    setIsLoading(true);
    fetch(fetchUrl, fetchObject)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (!data.err) {
          handleResponse(data, pageTitle, navigate);
        } else {
          handleNavigate.serverErr(navigate);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm("");
  };
  const handleInputBackground = (field) => {
    return field.trim().length !== 0 ? "#E8F0FE" : "inherit";
  };

  const handleGgLoginSuccess = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setGmail(decoded.email);
    submitForm(decoded.email);
  };
  const handleGgLoginFail = () => console.log("Login Failed");
  return (
    <>
      {isLoading && <CirProgress />}
      <StyledContainer>
        <StyledForm
          sx={{ width: { xs: "100%", sm: "56%", md: "40%", lg: "35%" } }}
        >
          <form onSubmit={handleSubmit}>
            <h3>{pageTitle}</h3>
            {inputFields.map((field, i) => (
              <TextField
                key={i}
                id={field}
                type={field === "Password" ? "password" : "text"}
                label={field}
                name={field}
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom:
                    i === inputFields.length - 1 ? "1rem" : "0.5rem",
                }}
                required
                value={inputs[field]}
                onChange={(e) => handleInputs(e, field)}
                inputProps={{
                  style: {
                    backgroundColor: handleInputBackground(inputs[field]),
                  },
                }}
              />
            ))}
            <StyledFormFooter>
              <GoogleOAuthProvider
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              >
                <GoogleLogin
                  onSuccess={handleGgLoginSuccess}
                  onError={handleGgLoginFail}
                ></GoogleLogin>
              </GoogleOAuthProvider>
              <Button type="submit" variant="contained">
                {pageTitle}
              </Button>
            </StyledFormFooter>
          </form>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

Form.propTypes = {
  pageTitle: PropTypes.string,
};
export default Form;
