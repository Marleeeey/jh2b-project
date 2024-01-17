import { info } from "console";
import Observation from "./Observation";

const Moniteur = () => {
  const infos = [
    {
      label: "Moniteur Theorique",
      choix: "Choissez le Moniteur Theorique",
      options: ["moniteur 1", "Monituer 2", "Monituer 3"],
    },
    {
      label: "Moniteur Pratique",
      choix: "Choissez le Moniteur Pratique",
      options: ["moniteur 1", "Monituer 2", "Monituer 3"],
    },
    {
      label: "Vehicule",
      choix: "Choissez Vehicule",
      options: ["Vehicule 1", "Vehicule 2", "Vehicule 3"],
    },
  ];
  return (
    <div className="m-0 p-5">
      <div className="m-0 p-5 w-full">
        <h1 className="font-bold border-b pb-5">Monituer/véhicule</h1>
      </div>
      <div className="m-0 p-5">
        <h3 className="font-bold text-red-500">(*) Chmap obligatoire</h3>
        <div className="mt-3 p-5 grid gap-6 mb-6 md:grid-cols-3">
          {infos.map((info) => (
            <div key={info.label}>
              <h1 className="mb-3 md:tracking-wide">{info.label}</h1>
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  {info.label}
                </option>
                {info.options.map((info) => (
                  <option>{info}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/*        o b s e r v a t i o n         S e c  t i o n    */}

      <div>
        <Observation />
      </div>
    </div>
  );
};

export default Moniteur;
