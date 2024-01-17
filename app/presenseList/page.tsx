import React from "react";
import { MdDateRange } from "react-icons/md";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import  TheResults  from './theResults/page';
import Thetable from './theTable/page';

const page = () => {
  const inputs = [
    { label: "Categorie", img: <VscTypeHierarchySub /> },
    { label: "Candidat", img: <IoMdPerson /> },
    { label: "Moniteur", img: <MdOutlineMonitor /> },
    { label: "Date", img: <MdDateRange /> },
  ];
  return (
    <div className="flex items-start flex-col md:w-full border h-[100vh]">
      <div className="border-b w-full m-0 p-5">
        <h3 className="font-bold">Liste Des presences</h3>
      </div>
      {/* use the Map methode */}
      <div className="flex flex-row items-center justify-start m-0 p-5 w-full">
        {inputs.map((liink) => (
          <div key={liink.label} className="flex flex-row items-center justify-between mr-5">
            {liink.img}
            <div className="relative ml-4" key={liink.label}>
              <input
                key={liink.label}
                name={liink.label}
                placeholder={liink.label}
                type="text"
                className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              />
              <label className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 ml-3">
                
              </label>
            </div>
          </div>
        ))}
        <button className="btn btn-success">Success</button>
      </div>
      <main className="flex flex-row items-center justify-start m-0 p-5 w-full">
        <TheResults />
      </main>
      <div className="flex flex-row items-center justify-start m-0 p-5 w-full">
        <Thetable />
      </div>
    </div>
    
  );
};

export default page;
