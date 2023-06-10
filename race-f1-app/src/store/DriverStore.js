import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import driver_result_dir from '../data/driver_result.csv';

const handle_list_year = list_object => {
    let list_array_year = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.year && list_array_year.includes(obj_value?.year) === false){
            list_array_year = [...list_array_year, obj_value?.year];
        }
    });
    return list_array_year.sort((a, b) => {return b-a});
}

export const useDriverStore = create((set, get) => ({
    list_driver_result: [],
    selected_year: '',
    list_year: [],
    getListDriverResult: async () => {
        const list_driver_result = await getRaceResult(driver_result_dir);
        const list_year = handle_list_year(list_driver_result);
        const selected_year = list_year.slice(0)[0];
        set({ list_driver_result });
        set({ list_year });
        set({ selected_year });
    },
    setSelectedYear: (selected_year) => set({selected_year}),
}));