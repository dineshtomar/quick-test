import AddTestCase from "../../../../../../components/TestCase/AddTestCase";
import { Helmet } from "react-helmet-async";

const CreateTest = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Create a TestCase for Quick Test Project. Add Titles, Sections, write preconstions, expected result, add priority."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Milestones, Create New Milestones, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/create-testcase`}
        />
      </Helmet>

      <AddTestCase />
    </>
  );
};

export default CreateTest;
