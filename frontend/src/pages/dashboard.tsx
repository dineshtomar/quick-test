import UserDashboard from "../components/Home/UserDashboard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token") ? true : false);
    setLoading(false);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Dashboard page or home page of Quick Test. You can see your active and favorite projects, and keep track of the progress you've made in those projects."
        />
        <meta
          name="keywords"
          content="Quick Test, Test Cases, Test Runs, ToDo, Test Case Reports, Jira, Dashboard, Projects"
        />
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN_LINK}/dashboard`}
        />
      </Helmet>
      {loading ? (
        <div className=" flex justify-center items-center content-center m-56">
          <Loader />
        </div>
      ) : null}

      {isLoggedIn ? (
        <div className="flex flex-col grow">
          <UserDashboard />
        </div>
      ) : null}
    </>
  );
};

export default Dashboard;
