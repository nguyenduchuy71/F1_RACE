export const handleListYear = (payload) => {
  let listYear = [];
  payload.forEach((item) => {
    if (item?.year && !listYear.includes(item?.year)) {
      listYear = [...listYear, item?.year];
    }
  });
  return listYear.sort((a, b) => {
    return b - a;
  });
};

export const handleListWinner = (payload) => {
  let listWinner = [];
  payload.forEach((item) => {
    if (item?.WINNER && !listWinner.includes(item?.WINNER)) {
      listWinner = [...listWinner, item?.WINNER];
    }
  });
  listWinner = listWinner.sort((a, b) => {
    return a.localeCompare(b);
  });
  return ["ALL", ...listWinner];
};

export const handleListCar = (payload) => {
  let listCar = [];
  payload.forEach((value) => {
    if (value?.CAR && !listCar.includes(value?.CAR)) {
      listCar = [...listCar, value?.CAR];
    }
  });
  listCar = listCar.sort((a, b) => {
    return a.localeCompare(b);
  });
  return ["ALL", ...listCar];
};

export const handleTeamInfo = (payload, nameTeam) => {
  let listTeamInfo = [];
  payload.forEach((value) => {
    if (value?.TEAM === nameTeam) {
      listTeamInfo = [...listTeamInfo, value];
    }
  });
  return listTeamInfo.sort((a, b) => {
    return b?.year - a?.year;
  });
};

export const handleDriverInfo = (payload, driverName) => {
  let listDriverInfo = [];
  payload.forEach((value) => {
    if (value?.DRIVER === driverName) {
      listDriverInfo = [...listDriverInfo, value];
    }
  });
  return listDriverInfo.sort((a, b) => {
    return b?.year - a?.year;
  });
};
