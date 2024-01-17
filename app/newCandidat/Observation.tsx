const Observation = () => {
  return (
    <div>
      <div className="border-b m-0 p-5">
        <h1 className="font-bold md:tracking-wide">Observation</h1>
      </div>
      <div>
        <textarea
          placeholder="Observation"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-5"
        ></textarea>
      </div>
    </div>
  );
};

export default Observation;
