import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import team_result_dir from '../data/team_result.csv';

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '0.9' + ')';
}

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
    list_pts_info: [],
    list_background_color: [],
    getListTeamResult: async () => {
        let list_team_result = await getRaceResult(team_result_dir);
        const list_year = handle_list_year(list_team_result);
        const selected_year = list_year.slice(0)[0];
        let list_pts_info = [];
        let list_background_color = [];
        let list_winner_info = [];
        list_team_result.sort((a, b) => {return b?.PTS - a?.PTS});
        list_team_result.forEach((item) => {
            if(item?.year === selected_year){
                list_winner_info = [...list_winner_info, item?.TEAM];
                list_pts_info = [...list_pts_info, item?.PTS];
                list_background_color = [...list_background_color, random_rgba()];
            }
        });
        set({ list_winner_info });
        set({ list_team_result });
        set({ list_pts_info });
        set({ list_background_color });
        set({ list_year });
        set({ selected_year });
    },
    setSelectedYear: (selected_year) => {
        let list_pts_info = [];
        let list_background_color = [];
        let list_winner_info = [];
        get().list_team_result.forEach((item) => {
            if(item?.year === selected_year){
                list_winner_info = [...list_winner_info, item?.TEAM];
                list_pts_info = [...list_pts_info, item?.PTS];
                list_background_color = [...list_background_color, random_rgba()];
            }
        });
        set({ list_winner_info });
        set({ list_pts_info });
        set({ list_background_color });
        set({ selected_year });
    },
}));