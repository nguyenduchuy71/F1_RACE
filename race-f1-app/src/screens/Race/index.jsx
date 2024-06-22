import React, { useEffect } from "react";
import { useRaceStore } from "../../stores/RaceStore";
import SelectBox from "../../components/SelectBox";
import InputSearch from "../../components/InputSearch";
import TableData from "../../components/TableData";
import dateImg from "../../images/date.png";
import bikerImg from "../../images/biker.png";
import teamImg from "../../images/team.png";

export default function Race() {
  const [
    list_race_result,
    getListRaceResult,
    list_year,
    selected_year,
    setSelectedYear,
    list_winner,
    selected_winner,
    setSelectedWinner,
    list_car,
    selected_car,
    setSelectedCar,
    search_text,
    setSearchText,
  ] = useRaceStore((state) => [
    state.list_race_result,
    state.getListRaceResult,
    state.list_year,
    state.selected_year,
    state.setSelectedYear,
    state.list_winner,
    state.selected_winner,
    state.setSelectedWinner,
    state.list_car,
    state.selected_car,
    state.setSelectedCar,
    state.search_text,
    state.setSearchText,
  ]);

  useEffect(() => {
    getListRaceResult();
  }, [getListRaceResult]);

  return (
    <div>
      <div className="w-full mx-auto my-4 px-4 text-gray-800 lg:w-1/2">
        <InputSearch search_text={search_text} setSearchText={setSearchText} />
        <div className="grid gap-x-4 mt-4 lg:grid-flow-col">
          <div className="grid-cols-12 mb-4 bg-white/60 rounded-lg lg:grid-cols-4">
            <div className="flex justify-center py-2">
              <img
                src={dateImg}
                alt="date-img"
                className="w-10 h-10 object-cover"
              />
            </div>
            <SelectBox
              listData={list_year}
              selectedData={selected_year}
              onSetSelectedData={setSelectedYear}
            />
          </div>
          <div className="grid-cols-12 mb-4 bg-white/60 rounded-lg lg:grid-cols-4">
            <div className="flex justify-center py-2">
              <img
                src={bikerImg}
                alt="biker-img"
                className="w-10 h-10 object-cover"
              />
            </div>
            <SelectBox
              listData={list_winner}
              selectedData={selected_winner}
              onSetSelectedData={setSelectedWinner}
            />
          </div>
          <div className="grid-cols-12 mb-4 bg-white/60 rounded-lg lg:grid-cols-4">
            <div className="flex justify-center py-2">
              <img
                src={teamImg}
                alt="team-img"
                className="w-10 h-10 object-cover"
              />
            </div>
            <SelectBox
              listData={list_car}
              selectedData={selected_car}
              onSetSelectedData={setSelectedCar}
            />
          </div>
        </div>
      </div>

      <div className="w-3/4 shadow-md mx-auto my-4 overflow-x-scroll">
        <TableData
          listData={list_race_result.filter(
            (row) => selected_year === row.year,
          )}
        />
        {/* <table className="w-full rounded-md border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              {HEADERS_TABLE.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-auto">
            {list_race_result &&
              list_race_result.map((value, index) => {
                if (value.year === selected_year) {
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {value?.["GRAND PRIX"]}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{value?.DATE}</td>
                      <td className="px-6 py-4 cursor-pointer">
                        <Link to={`/bikers/${value?.WINNER}`}>
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                            {value?.WINNER}
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4 flex cursor-pointer">
                        <Link to={`/teams/${value?.CAR}`}>
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                            {value?.CAR}
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{value?.LAPS}</td>
                      <td className="px-6 py-4 text-gray-500">{value?.TIME}</td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table> */}
      </div>
    </div>
  );
}
