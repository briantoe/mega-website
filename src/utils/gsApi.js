import axios from "axios";

async function getSheetData(spreadsheetId, sheet, apiKey) {
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheet}?key=${apiKey}`;
  console.log(apiUrl);
  try {
    let retVal = [];
    const response = await axios.get(apiUrl);
    console.log("here");
    const values = response.data.values;
    if (values.length) {
      console.log("Data:");
      values.forEach((row) => {
        console.log(row);
      });
      retVal = values;
    } else {
      console.log("No data found.");
    }
    return retVal;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getMembers(spreadsheetId, sheet, apiKey) {
  return getSheetData(spreadsheetId, "member", apiKey);
}

async function getHomepage(spreadsheetId, sheet, apiKey) {
  return getSheetData(spreadsheetId, "homepage", apiKey);
}

export { getSheetData, getMembers, getHomepage };
