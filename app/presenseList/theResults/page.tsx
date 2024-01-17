

const Page = () => {
  return (
    <div className="flex space-x-6 justify-start  w-full h-20 border-b ">
      <h3 className="text-bold mt-3">Affichage :</h3>
      <select className="select select-success w-full max-w-xs" defaultValue="TEST">
        <option disabled value="TEST">
          TEST
        </option>
        <option value="test1">test1</option>
        <option value="test2">test2</option>
      </select>
      <h3 className="text-bold mt-3">Elements</h3>
      <div className="flex pl-20 space-x-8">
        <h3 className="font-bold mt-3">Recherche</h3>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Page;
