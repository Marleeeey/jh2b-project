"use client";

const tableCandidatStorique = () => {

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>CIN</th>
              <th>Declaration</th>
              <th>Nom</th>
              <th>Date d'inscription</th>
              <th>Categorie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          <tr key='1'>
                  <th>1</th>
                  <td>Test</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>testTestTest</td>
          </tr>
          {/* two colomn */}
          <tr key='2'>
                  <th>2</th>
                  <td>Test</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>TestTestTest</td>
                  <td>TestTest</td>
                  <td>TestTest</td>
                  <td>testTestTest</td>
          </tr>
          {/* three one */}
          <tr key='3'>
                  <th>3</th>
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

export default tableCandidatStorique;
