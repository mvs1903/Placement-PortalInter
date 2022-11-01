
import {read,utils} from 'xlsx/xlsx.mjs';
// import XLSX from ".../dist/xlsx.core.min.js"


import push_data from './firebasenew';
function GetTableFromExcel(data) {
  ExcelToJSON(data);
 //Read the Excel File data in binary
 // var workbook = read(data);

 // //get the name of First Sheet.
 // var Sheet = workbook.SheetNames[0];

 // //Read all rows from First Sheet into an JSON array.
 // var excelRows = utils.sheet_to_row_object_array(workbook.Sheets[Sheet]);
 // console.log(excelRows)

}

var ExcelToJSON = function(file) {

    var reader = new FileReader();

    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        for(var i=0;i<XL_row_object.length;i++){
         // console.log(XL_row_object[i]["SAPID"]);
          push_data(XL_row_object[i],XL_row_object[i]["SAP ID"].toString());
        }
        

      })

    };

    reader.onerror = function(ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
  
};
export default GetTableFromExcel;