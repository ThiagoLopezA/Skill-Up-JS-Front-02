import React from "react";

const Transactions = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <p>Monto</p>
          </th>
          <th>
            <p>Descripción</p>
          </th>
          <th>
            <p>Fecha</p>
          </th>
          </tr>
      </thead>
      <tbody>
        <tr>
         <td>
          <p>500</p>
         </td>
         <td>
          <p>Some transaction</p>
         </td>
         <td>
          <p>05/12/2022</p>
         </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transactions;
