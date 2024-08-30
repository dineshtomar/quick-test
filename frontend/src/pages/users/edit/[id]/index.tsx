import AddUser from "../../../../components/Users/addUser";
import { Helmet } from "react-helmet-async";

const UserEdit = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Edit the details of an already added member/user here"
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Users, Edit Users, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/settings/users/:id/edit`}
        />
      </Helmet>

      <AddUser />
    </div>
  );
};

export default UserEdit;
