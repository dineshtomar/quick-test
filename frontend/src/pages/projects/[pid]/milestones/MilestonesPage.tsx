import PageMilestone from "../../../../components/Milestones/Listing";
import { Helmet } from "react-helmet-async";

export default function MilestonesPage() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="View already defined Milestone. You can view Milestones and testruns associated with them."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Milestones, Edit Milestones, Delete Milestone, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/milestones`}
        />
      </Helmet>

      <PageMilestone />
    </>
  );
}
