import React, { useState } from "react";
import * as XLSX from "xlsx";
import { addDataToModel, deleteData } from "./jsonToBackendApi";
import DisplayInfo from "./DisplayInfo";

const ExcelToJson = () => {
  const [file, setFile] = useState("");

  function filePathset(e) {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
  }

  const addData = (data) => {
    console.log("Adding admin data:", data);

    addDataToModel(data, "admin").then((response) => {
      if (response) {
        console.log("Data added successfully");
        setFile("");
      } else {
        console.log("Failed to add data");
      }
    });
  };

  const clearData = () => {
    deleteData("admin").then(() => {
      alert("Admin data deleted successfully!");
    });
  };

  function readFile() {
    if (file === "") {
      alert("Please select a file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });

      // Ensure the sheet named "Admin" exists
      if (wb.SheetNames.includes("Sheet1")) {
        const sheetName = "Sheet1";
        const XL_row_object = XLSX.utils.sheet_to_row_object_array(
          wb.Sheets[sheetName]
        );

        if (XL_row_object.length === 0) {
          alert("The Admin sheet is empty.");
          return;
        }

        addData(XL_row_object);
        console.log(XL_row_object);
        alert("Admin sheet data added successfully!");
      } else {
        alert('The uploaded file does not contain a sheet named "Admin".');
      }
    };

    reader.readAsBinaryString(file);
  }

  return (
    <div>
      <input type="file" id="file" onChange={(e) => filePathset(e)} />
      <button onClick={readFile}>Read File</button>
      <button onClick={clearData}>Clear Data</button>
      <DisplayInfo />
    </div>
  );
};

export default ExcelToJson;
