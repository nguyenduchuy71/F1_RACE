const convertCSVFileToArray = (string) => {
  const headers = string.slice(0, string.indexOf("\r\n")).split(",");
  const rowData = string.slice(string.indexOf("\r\n") + 1).split("\n");
  const listData = rowData.map((i) => {
    const values = i.split(",");
    const obj = headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return obj;
  });
  return listData;
};

export const getRaceResult = async (path_data) => {
  let listRaceResult = "";
  await fetch(path_data)
    .then((response) => response.text())
    .then((responseText) => {
      listRaceResult = responseText;
    });
  return convertCSVFileToArray(listRaceResult);
};
