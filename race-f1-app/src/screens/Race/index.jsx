import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRaceStore } from "../../store/RaceStore";
import SelectBox from "../../components/SelectBox";
import SelectWinner from "./components/SelectWinner";
import SelectCar from "./components/SelectCar";
import InputSearch from "./components/InputSearch";

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
  }, [
    getListRaceResult,
    setSelectedWinner,
    setSelectedYear,
    setSelectedCar,
    setSearchText,
  ]);

  return (
    <div className="my-4 px-4 min-h-screen flex justify-center flex-row items-stretch flex-wrap-reverse">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mr-5 flex-grow">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                GRAND PRIX
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                DATE
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                WINNER
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                TEAM
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                LAPS
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                TIME
              </th>
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
                        <Link to={`/drivers/${value?.WINNER}`}>
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
        </table>
      </div>
      <div className="max-h-min flex flex-col items-stretch">
        <InputSearch search_text={search_text} setSearchText={setSearchText} />
        <div className="bg-white/60 flex flex-col p-1 rounded-lg mt-4">
          <p className="text-gray-700">Select a year:</p>
          <SelectBox
            listyear={list_year}
            selectedYear={selected_year}
            onSetSelectedYear={setSelectedYear}
          />
        </div>
        <div className="bg-white/60 flex flex-col p-1 rounded-lg mt-4">
          <p className="text-gray-700">Select a driver:</p>
          <SelectWinner
            listwinner={list_winner}
            selectedWinner={selected_winner}
            onSetSelectedWinner={setSelectedWinner}
          />
        </div>
        <div className="bg-white/60 flex flex-col p-1 rounded-lg mt-4">
          <p className="text-gray-700">Select a team:</p>
          <SelectCar
            listcar={list_car}
            selectedCar={selected_car}
            onSetSelectedCar={setSelectedCar}
          />
        </div>
      </div>
    </div>
  );
}
