import AddUser from "../../../components/Users/addUser";
import { Helmet } from "react-helmet-async";

const UserAdd = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Add a new user to your existing projects."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, New User, Add User, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/settings/users/add`}
        />
      </Helmet>

      <AddUser />
    </div>
  );
};

export default UserAdd;
