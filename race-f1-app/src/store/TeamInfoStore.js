import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import team_result_dir from '../data/team_result.csv';

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '0.9' + ')';
}

const handle_driver_info = (list_object, team_name) => {
    let list_team_info = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.TEAM === team_name){
            list_team_info = [...list_team_info, obj_value];
        }
    });
    return list_team_info.sort((a, b) => {return b?.year - a?.year});
}

export const useTeamInforStore = create((set, get) => ({
    list_team_info: [],
    list_year_info: [],
    list_team_result: [],
    list_pos_info: [],
    list_background_color: [],
    getListTeamInfoResult: async (team_name) => {
        const list_team_result = await getRaceResult(team_result_dir);
        const list_team_info = handle_driver_info(list_team_result, team_name);
        let list_year_info = [];
        let list_pos_info = [];
        let list_background_color = [];
        list_team_info.forEach((item) => {
            list_year_info = [...list_year_info, item?.year];
            list_pos_info = [...list_pos_info, item?.POS];
            list_background_color = [...list_background_color, random_rgba()]
        });
        set({ list_background_color });
        set({ list_pos_info });
        set({ list_team_info });
        set({ list_year_info });
    },
}));