import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { appRoutes } from "../Utils/constants/page-routes";
import axiosService from "../Utils/axios";
import Button from "../Button";
import { FormikInput, FormikCheckbox } from "../Common/FormikInput";
import {
  validateRequiredEmail,
  validateRequiredFirstName,
  validateRequiredLastName,
  validateRequiredOrg,
} from "../Utils/validators";
import PopUp from "./Modal";
import { showError, showSuccess } from "../Toaster/ToasterFun";
import { ToastMessage } from "../Utils/constants/misc";
import { useFormSubmitWithLoading } from "../Utils/hooks/useFormSubmitWithLoading";
import { useTranslation } from "react-i18next";
// import { Helmet } from "react-helmet-async";
import bugplotLogo from "../../assets/images/bugplot-logo.svg";

const SignUp = () => {
  const { t } = useTranslation(["common"]);
  const navigate = useNavigate();
  const [showModal, toggleModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      showSuccess(ToastMessage.ALREADY_LOGGED_IN);
      navigate(`${appRoutes.DASHBOARD}`);
    }
  }, [navigate]);

  const signUpSchema = Yup.object().shape({
    firstName: validateRequiredFirstName(),
    lastName: validateRequiredLastName(),
    email: validateRequiredEmail(),
    org: validateRequiredOrg(),
    password: Yup.string()
      .required(t("Password is required"))
      .min(8, t("Password is too short - should be 8 chars minimum")),
    cnfpassword: Yup.string()
      .oneOf([Yup.ref("password")], t("Both passwords need to be same"))
      .required(t("Confirm Password is required")),
    termAndCondition: Yup.bool().oneOf(
      [true],
      t("Please accept Terms of Use & Privacy Policy")
    ),
  });

  const popUpProps = {
    toggleModal,
    headline: t("Registration Successful!"),
    text: t(
      "You have successfully registered on QuickTest. A confirmation email has been sent to your inbox. Please verify your email to continue."
    ),
    buttonText: t("OK"),
    linkText: "signin",
    customCss: "w-12",
  };

  const signUp = async (userObj: any) => {
    try {
      const resp = await axiosService.post("/auth/register", userObj);
      if (resp && resp.status === 201) {
        toggleModal(true);
      }
    } catch (err) {
      showError(err.response.data.message);
    }
  };

  const submitForm = async (values: typeof initialValues) => {
    const userObj = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    await signUp({ user: userObj, organization: values.org });
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    org: "",
    email: "",
    password: "",
    cnfpassword: "",
    termAndCondition: false,
  };

  const { onSubmitHandler, loading } = useFormSubmitWithLoading(submitForm);
  const [validation, setValidation] = useState(false);
  return (
    <>
      {showModal && <PopUp {...popUpProps} />}
      <div className="bg-gray-50 flex flex-col justify-center py-7 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <span onMouseDown={() => navigate("/")} className="cursor-pointer">
            <img
              className="mx-auto h-12 w-auto"
              src={bugplotLogo}
              alt="QuickTest"
              loading="eager"
              title="Quick Test Logo"
              width={48}
              height={48}
            />
          </span>
          <h2 className="mt-6 text-center text-xl 2xl:text-3xl font-extrabold text-gray-900">
            {t("Get started with Quick Test")}
          </h2>
        </div>
        <div className="mt-8 ml-3 mr-3 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
              onSubmit={onSubmitHandler}
            >
              {() => {
                return (
                  <Form
                    className="space-y-6"
                    action="#"
                    method="POST"
                    noValidate
                  >
                    <div>
                      <FormikInput
                        type="firstName"
                        name="firstName"
                        label={t("First Name")}
                        validation={validation}
                      />
                    </div>
                    <div>
                      <FormikInput
                        type="lastName"
                        name="lastName"
                        label={t("Last Name")}
                        validation={validation}
                      />
                    </div>
                    <div>
                      <FormikInput
                        type="email"
                        name="email"
                        label={t("Work Email")}
                        validation={validation}
                      />
                    </div>
                    <div>
                      <FormikInput
                        type="text"
                        name="org"
                        label={t("Organization")}
                        validation={validation}
                      />
                    </div>
                    <div>
                      <FormikInput
                        type="password"
                        name="password"
                        label={t("Password")}
                        validation={validation}
                      />
                    </div>
                    <div>
                      <FormikInput
                        type="password"
                        name="cnfpassword"
                        label={t("Confirm Password")}
                        validation={validation}
                      />
                    </div>
                    <FormikCheckbox
                      name="termAndCondition"
                      type="checkbox"
                      label={`${t("I agree to")}${" "}
                        <a href='${
                          process.env.REACT_APP_WEBSITE_DOMAIN_LINK
                        }/terms' class="hover:text-indigo-600" rel="noreferrer" target="_blank"><strong>${t(
                          "Terms of Use"
                        )}</strong></a>${" "}&${" "}
                        <a href='${
                          process.env.REACT_APP_WEBSITE_DOMAIN_LINK
                        }/privacypolicy' class="hover:text-indigo-600" rel="noreferrer" target="_blank"><strong>${t(
                          "Privacy Policy"
                        )}</strong></a>
                      `}
                      validation={validation}
                    />
                    <div>
                      <Button
                        id="sign-up"
                        onMouseDown={() => setValidation(true)}
                        type="submit"
                        loading={loading}
                        className={`w-full flex py-2 px-4`}
                      >
                        {t("Sign Up")}
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {t("Already have an account?")}{" "}
                    <Link to={appRoutes.SIGNIN_PAGE}>
                      <span className="font-medium text-indigo-600 hover:text-indigo-500">
                        {t("Login")}
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
