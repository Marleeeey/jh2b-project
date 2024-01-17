import { TiGroup } from "react-icons/ti";
import TableCandidatStorique from './tableCandidatStorique';

const page = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex items-center justify-between border-b m-0 p-5">
        <h1 className="font-bold text-red-500 tracking-tight">
          historique des candidats
        </h1>
        <button className="btn btn-outline btn-success mr-3">
          <TiGroup />
          Listes des candidats
        </button>
      </div>
      {/*                s e c o n d     S e c t i o n           */}
      <div className="m-0 p-5 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="mr-3">Affichage</h3>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Affichage
              </option>
              <option>10</option>
            </select>
            <h3 className="ml-3">élément</h3>
          </div>
          {/*             R e c h e r c h e               */}
          <div className="flex items-center">
            <h3>Recherche: </h3>
            <input
              type="text"
              placeholder="Recherche"
              className="input input-bordered w-full max-w-xs ml-3"
            />
          </div>
        </div>
        {/*    t h e     T a b l e    o f    h i s t o r  i q u e    T a b l e    */}
        <div className="mt-8">
            <TableCandidatStorique />
        </div>
      </div>
    </div>
  );
};

export default page;
