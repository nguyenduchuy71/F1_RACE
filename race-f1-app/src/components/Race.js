import React, { useState, useEffect } from 'react'
import SelectBox from './SelectBox';
import { useRaceStore } from '../store/RaceStore';

function Race() {
  const [list_race_result, getListRaceResult, list_year, selected_year, setSelectedYear] = useRaceStore((state) => [
    state.list_race_result,
    state.getListRaceResult,
    state.list_year,
    state.selected_year,
    state.setSelectedYear,
  ]);
  useEffect(() => {
    getListRaceResult();
  }, [getListRaceResult]);

  return (
    <div className="m-4 flex justify-center flex-row items-stretch flex-wrap-reverse">
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mr-5 flex-grow">
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">GRAND PRIX</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">DATE</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">WINNER</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">CAR</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">LAPS</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">TIME</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {list_race_result && list_race_result.map((value) => 
                {
                    if(value.year === selected_year){
                        return (
                            <tr className="hover:bg-gray-50">
                            <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{value?.["GRAND PRIX"]}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-gray-700">{value?.DATE}</td>
                            <td className="px-6 py-4">
                                <span
                                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    {value?.WINNER}
                                </span>
                            </td>
                            <td className="px-6 py-4 flex">
                                <span
                                    className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                    >
                                    {value?.CAR}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-700">{value?.LAPS}</td>
                            <td className="px-6 py-4 text-gray-500">{value?.TIME}</td>
                        </tr>
                        )
                    }
                }
            )}
        </tbody>
    </table>
    </div>
    <div className="mb-5">
        <SelectBox listyear={list_year} selectedYear={selected_year} onSetSelectedYear={setSelectedYear} />
    </div>
</div>
  )
}

export default Race