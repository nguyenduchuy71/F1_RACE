export const getRaceResult = async (path_data) => {
    let list_race_result = '';
    await fetch(path_data)
        .then( response => response.text() )
        .then( responseText => {
            list_race_result = responseText;
    });
    return csvFileToArray(list_race_result);
}

const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    const array_object = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    return array_object;
};