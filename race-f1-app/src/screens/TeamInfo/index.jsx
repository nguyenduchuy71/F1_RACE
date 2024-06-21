import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTeamInforStore } from "../../store/TeamInfoStore";
import BarChartElement from "../../components/BarChartElement";

function TeamInfo() {
  const location = useLocation();
  const nameTeam = location.pathname
    .split("/")
    .slice(-1)[0]
    .split("%20")
    .join(" ");
  const [
    list_year_info,
    list_pos_info,
    list_background_color,
    getListTeamInfoResult,
  ] = useTeamInforStore((state) => [
    state.list_year_info,
    state.list_pos_info,
    state.list_background_color,
    state.getListTeamInfoResult,
  ]);
  useEffect(() => {
    getListTeamInfoResult(nameTeam);
  }, [getListTeamInfoResult, nameTeam]);

  return (
    <div className="m-4 min-h-screen rounded-lg bg-white flex flex-col">
      <div className="text-center p-2 mb-2 border border-gray-200 shadow-md">
        <h2 className="text-lg">{nameTeam}</h2>
      </div>
      <BarChartElement
        list_year_info={list_year_info}
        list_pos_info={list_pos_info}
        list_background_color={list_background_color}
        axis={"y"}
        x_label={"Positions"}
        y_label={"Years"}
        title={"Team's positioning over the years"}
      />
      ;
    </div>
  );
}

export default TeamInfo;
