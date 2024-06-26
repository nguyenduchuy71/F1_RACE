import React, { useEffect } from "react";
import { useDriverStore } from "../../stores/DriverStore";
import SelectBox from "../../components/SelectBox";
import BarChartElement from "../../components/BarChartElement";

const Drivers = () => {
  const [
    getListDriverResult,
    list_year,
    selected_year,
    setSelectedYear,
    list_winner_info,
    list_pts_info,
    list_background_color,
  ] = useDriverStore((state) => [
    state.getListDriverResult,
    state.list_year,
    state.selected_year,
    state.setSelectedYear,
    state.list_winner_info,
    state.list_pts_info,
    state.list_background_color,
  ]);

  useEffect(() => {
    getListDriverResult();
  }, [getListDriverResult]);

  return (
    <div className="my-4 px-4 flex flex-wrap justify-center">
      <div className="w-28 mb-5">
        <SelectBox
          listData={list_year}
          selectedData={selected_year}
          onSetSelectedData={setSelectedYear}
        />
      </div>
      <BarChartElement
        list_year_info={list_winner_info}
        list_pos_info={list_pts_info}
        list_background_color={list_background_color}
        axis={"x"}
        x_label={"Drivers"}
        y_label={"Points"}
        title={`The ranking of the drivers of the year ${selected_year}`}
      />
    </div>
  );
};

export default Drivers;
