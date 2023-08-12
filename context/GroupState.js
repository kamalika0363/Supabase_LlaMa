import { useState } from "react";
import GroupContext from "./groupContext";
// import { db, storage } from "../../config/firebase";
// import { getDoc, doc } from "firebase/firestore";
// import { getDownloadURL, listAll, ref } from "firebase/storage";

const GroupState = (props) => {
  const [projects, setProjects] = useState([{name:"Dhruv"}]);
  // const [id, setId] = useState(0);
  // const [showSection, setShowSection] = useState(true);

  // const getProjectIds = async () => {
  //   const userId = localStorage.getItem("token");
  //   try {
  //     const data = await getDoc(doc(db, "users", userId));
  //     return data.data().list;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getProject = async (id) => {
  //   const data = await getDoc(doc(db, "projects", id));
  //   return { ...data.data(), id: data.id };
  // };

  // const getAllDocuments = async (id) => {
  //   const data = await listAll(ref(storage, `/${id}`));
  //   const temp = [];
  //   data.items.forEach((item) =>
  //     getDownloadURL(item).then((url) =>
  //       temp.push({ url: url, name: item._location.path_ })
  //     )
  //   );
  //   return temp;
  // };

  // const getProjects = async () => {
  //   const projectIds = await getProjectIds();
  //   await projectIds.map(async (projectId) => {
  //     const search = projects.find((project) => project.id == projectId);
  //     if (search === undefined) {
  //       const project = await getProject(projectId);
  //       project.project.document = await getAllDocuments(projectId);
  //       setProjects(projects.concat(project));
  //     }
  //   });
  // };

  return (
    <GroupContext.Provider
      value={{
         projects,
        // setProjects,
        // id,
        // setId,
        // getProjects,
        // showSection,
        // setShowSection,
        // setProjects,
      }}
    >
      {props.children}
    </GroupContext.Provider>
  );
};
export default GroupState;
