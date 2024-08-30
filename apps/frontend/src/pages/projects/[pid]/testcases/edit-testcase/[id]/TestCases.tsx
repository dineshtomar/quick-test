import TestCaseList from "../../../../../../components/TestCase/TestCaseList";
import { Helmet } from "react-helmet-async";

export default function TestCasePage(props: any) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="View already defined Test Cases. You can view Test Cases, their expected result with preconditions and all other necessary details associated with them."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Runs, ToDo, Test Case Reports, Jira, Test Cases, Edit Test Cases, Delete Test Cases, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/testcases`}
        />
      </Helmet>

      <TestCaseList
        projectName={props?.projectName}
        selectedData={props?.selectedData}
      />
    </>
  );
}
