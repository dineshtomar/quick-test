import AddMilestone from "../../../../components/Milestones/AddEditMilestone";
import { Helmet } from "react-helmet-async";

const CreateMilestone = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Create a Milestone for Quick Test Project."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Milestones, Create New Milestone, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/projects/:pid/create-milestone`}
        />
      </Helmet>

      <AddMilestone />
    </>
  );
};

export default CreateMilestone;
