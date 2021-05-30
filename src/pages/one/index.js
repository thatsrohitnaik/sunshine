import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from '../../components/table/';
import schema from './table-schema/table-one';
import rowData from './table-data/table-one';
import Stepper from '../../components/stepper/';
import Steps from '../../components/stepper/stepper-one';
import Panel from '../../components/panel/';
import NavBar from '../../components/nav/';
import BasicTable from '../../components/table/basic';
import infoSchema from './table-schema/table-info';
import './style.css';

const PageOne = () => {
  return (
    <div className="">
      <NavBar />
      <div className="gutterSpace">
        <ul class="nav nav-tabs">
          <li className="" style={{ float: 'right' }}>
            <a data-toggle="tab" href="#">
              SAR SETTING
            </a>
          </li>
          <li className="active" style={{ float: 'right' }}>
            <a data-toggle="tab" href="#dsDetail">
              DS DETAILS
            </a>
          </li>
        </ul>
        {infoData ? (
          <BasicTable schema={infoSchema} rowData={infoData} />
        ) : null}
      </div>
      <Stepper steps={Steps} />
      <Panel />
      {rowData ? <Table schema={schema} rowData={rowData} /> : null}
    </div>
  );
};

export default PageOne;