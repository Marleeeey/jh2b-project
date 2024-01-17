import Moniteur from "./Moniteur";

const Permis = () => {
  const selections = [
    {
      header: "Type de formation",
      options: ["formation1", "formation2", "formation3"],
    },
    {
      header: "Choissez Categorie",
      options: ["Categorie1", "Categorie2", "Categorie3"],
    },
  ];
  const infos = [
    { header: "Montant" },
    { header: "NombreHP" },
    { header: "NombreHT" },
  ];

  return (
    <div className="m-0 p-5">
      <div className="border-b">
        <h1 className="font-bold p-5">Permis</h1>
      </div>
      <div className="m-0 p-5">
        <h1 className="text-red-500 font-bold">(*) Champ obligatoire</h1>
      </div>
      {/* i n p u t s S e c t i o n s */}
      <div className="grid gap-6 mb-6 md:grid-cols-2 m-0 p-5">
        {selections.map((selection) => (
          <div key={selection.header}>
            <h1>{selection.header}</h1>
            <select className="select select-ghost w-full max-w-xs">
              <option value="" disabled selected>
                Pick an option
              </option>
              {selection.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        {infos.map((info) => (
          <div key={info.header}>
            <h1>{info.header}</h1>
            <input
              type="text"
              placeholder={info.header}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        ))}
      </div>
      <div className="m-0 p-5">
        <h1 className="font-bold">posséde de permis</h1>

        {/*    h e  h a v e   p e r m i s   */}

        <div className="flex items-center mt-4">
          <h3 className="mr-4">Oui</h3>
          <input type="checkbox" className="checkbox checkbox-lg" />
        </div>
        {/* Dont have it */}
        <div className="flex items-center mt-4">
          <h3 className="mr-4">No</h3>
          <input type="checkbox" className="checkbox checkbox-lg" />
        </div>
      </div>
      <Moniteur />
    </div>
  );
};

export default Permis;
