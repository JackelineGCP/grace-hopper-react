import React, { Component } from 'react';

import './css/aside.css';
import './css/main.css';

class Aside extends Component {
  render() {
    return (
      <aside className="abstract">
        <table className="biopic">
          <thead>
            <tr>
              <th colSpan={2} className="head-table">Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td colSpan={3} ><img src="http://wikis.fdi.ucm.es/ELP/images/6/6b/Gracehopper.jpg" alt="Grace Hopper"></img></td>
            </tr>
            <tr>
              <th colSpan={2}>Información Personal</th>
            </tr>
            <tr>
              <th>Nacimiento</th>
              <td>9 de diciembre de 1906</td>
            </tr>
            <tr>
              <th>Fallecimiento</th>
              <td>1 de enero de 1992</td>
            </tr>
            <tr>
              <th>Nacionalidad </th>
              <td>Estadounidence</td>
            </tr>
          </tbody>
        </table>
      </aside>
    );
  }
}

export default Aside;
