import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import race_result_dir from '../data/race_result.csv';

const update_list_year = list_object => {
    let list_array_year = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.year && list_array_year.includes(obj_value?.year) === false){
            list_array_year = [...list_array_year, obj_value?.year];
        }
    });
    return list_array_year.sort((a, b) => {return b-a});
}

export const useRaceStore = create((set, get) => ({
    list_race_result: [],
    selected_year: '',
    list_year: [],
    getListRaceResult: async () => {
        const list_race_result = await getRaceResult(race_result_dir);
        const list_year = update_list_year(list_race_result);
        const selected_year = list_year.slice(0)[0];
        set({ list_race_result });
        set({ list_year });
        set({ selected_year });
    },
    setSelectedYear: (selected_year) => set({selected_year}),
}));