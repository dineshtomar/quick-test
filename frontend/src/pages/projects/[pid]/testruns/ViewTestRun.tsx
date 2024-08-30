import Dashboard from "../../../../components/TestRun/ViewDashboard";
import { Helmet } from "react-helmet-async";

export default function Comp() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Here You can view a specific Test Run and Test Cases associated with them."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/testruns/:id/test-results`}
        />
      </Helmet>

      <Dashboard />
    </>
  );
}
