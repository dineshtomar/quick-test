import Login from "../components/SignUp/Login";
import { Helmet } from "react-helmet-async";

export default function SignIn() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Already a user of Buglot! SignIn and start testing"
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Sign In, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/signin`}
        />
      </Helmet>

      <Login />
    </>
  );
}
