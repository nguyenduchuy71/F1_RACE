import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import team_result_dir from '../data/team_result.csv';

const handle_list_year = list_object => {
    let list_array_year = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.year && list_array_year.includes(obj_value?.year) === false){
            list_array_year = [...list_array_year, obj_value?.year];
        }
    });
    return list_array_year.sort((a, b) => {return b-a});
}

export const useTeamStore = create((set, get) => ({
    list_team_result: [],
    selected_year: '',
    list_year: [],
    getListTeamResult: async () => {
        const list_team_result = await getRaceResult(team_result_dir);
        const list_year = handle_list_year(list_team_result);
        const selected_year = list_year.slice(0)[0];
        set({ list_team_result });
        set({ list_year });
        set({ selected_year });
    },
    setSelectedYear: (selected_year) => set({selected_year}),
}));