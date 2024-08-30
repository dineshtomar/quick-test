import EditMany from "../../../../../../components/TestCase/EditMany";
import { Helmet } from "react-helmet-async";

export default function Comp() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Edit Multiple TestCases on Quick Test. Add Titles, Sections, write preconstions, expected result, add priority."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Test Cases, Edit Multiple Test Cases, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/edit-multiple-testcases`}
        />
      </Helmet>

      <EditMany />
    </>
  );
}
