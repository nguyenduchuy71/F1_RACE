export const handle_list_year = (list_object) => {
  let list_array_year = [];
  list_object.forEach((obj_value) => {
    if (
      obj_value?.year &&
      list_array_year.includes(obj_value?.year) === false
    ) {
      list_array_year = [...list_array_year, obj_value?.year];
    }
  });
  return list_array_year.sort((a, b) => {
    return b - a;
  });
};

export const handle_list_winner = (list_object) => {
  let list_array_winner = [];
  list_object.forEach((obj_value) => {
    if (
      obj_value?.WINNER &&
      list_array_winner.includes(obj_value?.WINNER) === false
    ) {
      list_array_winner = [...list_array_winner, obj_value?.WINNER];
    }
  });
  list_array_winner = [...list_array_winner, "ALL"];
  return list_array_winner.sort((a, b) => {
    return a - b;
  });
};

export const handle_list_car = (list_object) => {
  let list_array_car = [];
  list_object.forEach((obj_value) => {
    if (obj_value?.CAR && list_array_car.includes(obj_value?.CAR) === false) {
      list_array_car = [...list_array_car, obj_value?.CAR];
    }
  });
  list_array_car = [...list_array_car, "ALL"];
  return list_array_car.sort((a, b) => {
    return a - b;
  });
};

export const handle_team_info = (list_object, team_name) => {
  let list_team_info = [];
  list_object.forEach((obj_value) => {
    if (obj_value?.TEAM === team_name) {
      list_team_info = [...list_team_info, obj_value];
    }
  });
  return list_team_info.sort((a, b) => {
    return b?.year - a?.year;
  });
};

export const handle_driver_info = (list_object, driver_name) => {
  let list_driver_info = [];
  list_object.forEach((obj_value) => {
    if (obj_value?.DRIVER === driver_name) {
      list_driver_info = [...list_driver_info, obj_value];
    }
  });
  return list_driver_info.sort((a, b) => {
    return b?.year - a?.year;
  });
};
