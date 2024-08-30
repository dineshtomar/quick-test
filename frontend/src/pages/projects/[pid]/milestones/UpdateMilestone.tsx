import EditMilestone from "../../../../components/Milestones/AddEditMilestone";
import { Helmet } from "react-helmet-async";

const UpdateMilestone = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Edit Milestones page for Quick Test. You can edit your existing test cases here, add or remove description etc."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Milestones, Edit Milestones, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/milestones/:id/edit-milestone`}
        />
      </Helmet>

      <EditMilestone editMilestone={true} />
    </>
  );
};

export default UpdateMilestone;
