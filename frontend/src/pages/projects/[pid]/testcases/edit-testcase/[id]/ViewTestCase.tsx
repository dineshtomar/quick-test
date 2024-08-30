import TestView from "../../../../../../components/TestCase/TestView";
import { Helmet } from "react-helmet-async";

export default function Comp() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="View already defined test cases for Quick Test."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Test Cases, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/testcases/:id/testcase`}
        />
      </Helmet>

      <TestView />
    </>
  );
}
