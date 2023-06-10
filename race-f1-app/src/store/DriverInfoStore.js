import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import driver_result_dir from '../data/driver_result.csv';

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '0.9' + ')';
}

const handle_driver_info = (list_object, driver_name) => {
    let list_driver_info = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.DRIVER === driver_name){
            list_driver_info = [...list_driver_info, obj_value];
        }
    });
    return list_driver_info.sort((a, b) => {return b?.year - a?.year});
}

export const useDriverInfoStore = create((set, get) => ({
    list_driver_info: [],
    list_year_info: [],
    list_driver_result: [],
    list_pos_info: [],
    list_background_color: [],
    getListDriverInfoResult: async (driver_name) => {
        const list_driver_result = await getRaceResult(driver_result_dir);
        const list_driver_info = handle_driver_info(list_driver_result, driver_name);
        let list_year_info = [];
        let list_pos_info = [];
        let list_background_color = [];
        list_driver_info.forEach((item) => {
            list_year_info = [...list_year_info, item?.year];
            list_pos_info = [...list_pos_info, item?.POS];
            list_background_color = [...list_background_color, random_rgba()]
        });
        set({ list_background_color });
        set({ list_pos_info });
        set({ list_driver_info });
        set({ list_year_info });
    },
}));