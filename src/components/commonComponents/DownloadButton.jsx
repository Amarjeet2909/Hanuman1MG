import React from "react";
import "../../components/hrManagement/Employees.css";
import { CSVLink } from "react-csv";
const DownloadButton = ({rowData,fileName}) => {
  return (
    <div>
      <CSVLink
        data={rowData}
        filename={fileName+".csv"}
        target="_blank"
      >
        <button className=" px-4 py-2 button-text">Download CSV</button>
      </CSVLink>
    </div>
  );
};

export default DownloadButton;
