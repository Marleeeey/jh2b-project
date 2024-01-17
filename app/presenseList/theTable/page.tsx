"use client";

const page = () => {
  // Call the Api

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Heure Debut</th>
              <th>Heure Fin</th>
              <th>Categorie</th>
              <th>Moniteur</th>
              <th>Candidats</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          <tr key='1'>
                  <th>Test</th>
                  <td>Test</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>testTestTest</td>
          </tr>
          {/* colone Two */}
          <tr key='2'>
                  <th>Test</th>
                  <td>Test</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>testTestTest</td>
          </tr>
          {/* three colomn */}
          <tr key='1'>
                  <th>Test</th>
                  <td>Test</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>testTestTest</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
