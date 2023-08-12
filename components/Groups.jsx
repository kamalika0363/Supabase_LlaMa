"client"
import React from "react";
import groupContext from "../context/GroupState";
import { useContext } from "react";

const Groups = () => {
  const context = useContext(groupContext);
  const {  projects } = context;
  console.log(projects);
  const newProject = async () => {
    console.log("done");
  };

  return (
    <div className="md:w-[4vw] w-[14vw] h-[100vh] bg-[#161B21] border-r-2 border-gray-800">
      {projects?.map((project, idx) => (
        <div
          key={project.id}
          className={`${id === idx ? "border-l-2" : "border-l-0"}`}
        >
          <div
            onClick={() => {
              setId(idx);
            }}
            className={`md:w-[3vw] md:h-[3vw] h-[12vw] w-[12vw] ${
              id === idx ? "rounded-xl" : "rounded-full"
            } hover:rounded-xl bg-[#FF0385] md:mx-[0.5vw] mx-[1vw] md:my-[0.5vw] my-[1vh] rounded-full flex justify-center items-center`}
          >
            {project.project.name.split(" ")[0][0]}
          </div>
        </div>
      ))}
      <div
        onClick={newProject}
        className="md:w-[3vw] md:h-[3vw] h-[12vw] w-[12vw] bg-gray-600 border-[1px] outline-1 md:mx-[0.5vw] mx-[1vw] md:my-[0.5vw] my-[1vh] rounded-full flex justify-center items-center"
      >
        <img className="w-6" src=".././plus.png" alt="Add" />
      </div>
    </div>
  );
};


export default Groups;