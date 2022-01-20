import MaterialTable from "material-table";
import { getIcon } from "./MethodLib";
import { NameAnchor } from "./NameAnchor";

const History = ({ history }) => {
  //define Material Table columns
  const columns = [
    {
      title: "Game id",
      field: "gameId",
      align: "left",
    },
    {
      title: "Player 1",
      field: "playerA.name",
      align: "left",
      render: (rowData) => <NameAnchor name={rowData.playerA.name} />,
    },
    {
      title: "Details",
      align: "center",
      headerStyle: { textAlign: "center" },
      render: (rowData) => (
        <span>
          {getIcon(rowData.playerA.played)} : {getIcon(rowData.playerB.played)}
        </span>
      ),
    },
    {
      title: "Player 2",
      field: "playerB.name",
      align: "right",
      render: (rowData) => <NameAnchor name={rowData.playerB.name} />,
    },
  ];

  //configurate Material Table
  const options = {
    search: false,
    filtering: false,
    showTitle: false,
    showFirstLastPageButtons: false,
    pageSizeOptions: [5],
    sorting: false,
    tableLayout: "fixed",
    draggable: false,
    headerStyle: {
      background: "#638bb7",
    },
  };

  return (
    <MaterialTable
      columns={columns}
      data={history}
      options={options}
      localization={{
        pagination: { labelDisplayedRows: "{from}-{to}" },
      }}
      components={{
        Toolbar: () => null,
      }}
      style={{
        width: "80vw",
        margin: "1rem auto",
        fontSize: "0.9rem",
      }}
    />
  );
};

export default History;
