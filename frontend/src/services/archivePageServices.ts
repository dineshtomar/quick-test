import axiosService from "../components/Utils/axios";

export const getArchiveProjects = () => {
  const resp = axiosService.get(`organizations/archive/projects`);
  return resp;
};
