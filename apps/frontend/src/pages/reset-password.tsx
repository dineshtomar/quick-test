import ResetPasswordForm from "../components/ResetPassword/ResetPassword";
import { Helmet } from "react-helmet-async";

export default function ResetPassword() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Password reset link sent to your email."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Reset Password, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/reset-password`}
        />
      </Helmet>

      <div>
        <ResetPasswordForm />
      </div>
    </>
  );
}
