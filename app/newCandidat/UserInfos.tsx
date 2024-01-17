"use client";
import { IoPersonAddOutline } from "react-icons/io5";
import Permis from "./Permis";

const UserInfos = () => {
  // L a b e l s    M a a a a p
  const labels = [
    { label: "Numero Contrat", id: "3" },
    { label: "Reference web", id: "4" },
    { label: "Nom francais", id: "5" },
    { label: "Nom Arabe", id: "6" },
    { label: "Lieu de naissance", id: "7" },
  ];
  // E   r   e   a  s
  const areas = [
    { label: "Adresse en Arabe" },
    { label: "Adresse en Francais" },
  ];
  //   user Infos
  const infos = [
    { label: "Email" },
    { label: "Telephone" },
    { label: "Langue" },
    { label: "Profession" },
  ];

  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2 m-0 p-5">
        <div key="CIN">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            CIN*
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div key="Date d'inscription">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date d'inscription
          </label>
          <input
            type="date"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DD/MM/YYYY"
            required
          />
        </div>
        {/* Infos Map */}
        {labels.map((label) => (
          <div key={label.id}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {label.label}
            </label>
            <input
              type="text"
              id={label.label}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={label.label}
              required
            />
          </div>
        ))}
        {/* Date Born */}
        <div key="Date naissance">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date naissance
          </label>
          <input
            type="date"
            id="Date naissance"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DD/MM/YYYY"
            required
          />
        </div>

        {/* Adresses */}

        {areas.map((area) => (
          <div key={area.label}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {area.label}
            </label>
            <textarea
              id={area.label}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={area.label}
            ></textarea>
          </div>
        ))}

        {/*       I n f o s    */}
        {infos.map((info) => (
          <div key={info.label}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {info.label}
            </label>
            <input
              type="text"
              id={info.label}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={info.label}
              required
            />
          </div>
        ))}
        {/* your image here */}
        <div key="">
          <label className="flex flex-col items-center justify-center w-[500px] h-64 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        {/*  f i n    d e   c o n t r a c t  */}

        <div key="Date Fin de contract">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date Fin de contract
          </label>
          <input
            type="date"
            id="Date Fin de contract"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DD/MM/YYYY"
            required
          />
        </div>
      </div>
      {/*     P e r m i s   S e c t i o n  */}

      <Permis />

      {/*   S u b m  i t   B u t t o n    */}
      <button
        type="submit"
        className=" ml-4 flex items-center justify-around text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-[120px] sm:w-120px px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <IoPersonAddOutline />
        Submit
      </button>
    </form>
  );
};

export default UserInfos;
