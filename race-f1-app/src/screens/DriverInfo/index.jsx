import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDriverInfoStore } from "../../store/DriverInfoStore";
import BarChartElement from "../../components/BarChartElement";

export default function DriverInfo() {
  const location = useLocation();
  const driver_name = location.pathname
    .split("/")
    .slice(-1)[0]
    .split("%20")
    .join(" ");
  const [
    list_driver_info,
    list_year_info,
    list_pos_info,
    list_background_color,
    getListDriverInfoResult,
  ] = useDriverInfoStore((state) => [
    state.list_driver_info,
    state.list_year_info,
    state.list_pos_info,
    state.list_background_color,
    state.getListDriverInfoResult,
  ]);
  useEffect(() => {
    getListDriverInfoResult(driver_name);
  }, [getListDriverInfoResult, driver_name]);

  return (
    <div className="m-4 min-h-screen rounded-lg bg-white flex flex-col">
      <div className="text-center p-2 mb-2 border border-gray-200 shadow-md">
        <h2 className="text-lg">
          {driver_name} - {list_driver_info[0]?.NATIONALITY}
        </h2>
      </div>
      <BarChartElement
        list_year_info={list_year_info}
        list_pos_info={list_pos_info}
        list_background_color={list_background_color}
        axis={"y"}
        x_label={"Positions"}
        y_label={"Years"}
        title={"Driver's positioning over the years"}
      />
      ;
    </div>
  );
}
