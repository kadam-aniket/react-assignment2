import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Project Name',          field: 'name' },
      { title: 'Project Manager',       field: 'Project_Manager' },
      { title: 'Week end Date',         field: 'weekenddate', type: 'date' },
      { title: 'Overall Project Status',field: 'birthCity',
        lookup: { 34: 'Red', 63: 'Green', 64:'Yellow' }, }
    ],
    data: [
        { name: 'API',        Project_Manager: 'Manager1', weekenddate: 1-2-1994,  birthCity: 63 },
        { name: 'UNGERBOECK', Project_Manager: 'Manager2', weekenddate: 2-3-1994,  birthCity: 64 },
        { name: 'SRAI',       Project_Manager: 'Manager3', weekenddate: 4-5-2017,  birthCity: 34 },
        { name: 'EYC',        Project_Manager: 'Manager1', weekenddate: 6-7-2017,  birthCity: 64 },
        { name: 'SMAI',       Project_Manager: 'Manager3', weekenddate: 8-9-2017,  birthCity: 34 },
        { name: 'SIAI',       Project_Manager: 'Manager2', weekenddate: 2-1-1994,  birthCity: 63 },
        { name: 'API',        Project_Manager: 'Manager1', weekenddate: 3-2-1994,  birthCity: 64 },
        { name: 'UNGERBOECK', Project_Manager: 'Manager2', weekenddate: 4-5-2017,  birthCity: 34 }
    ],
  });

  return (
    <div>
        <div className="margin">
        <Button variant="contained" color="primary"  href="/wsr">
            Add New
        </Button>
        </div>
    <MaterialTable
      title="WSR"
      columns={state.columns}
      data={state.data}
      editable={{
        
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
          
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  </div>
  );
}

