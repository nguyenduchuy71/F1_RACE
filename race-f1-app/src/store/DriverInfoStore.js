import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import driver_result_dir from '../data/driver_result.csv';
import { random_rgba, handle_driver_info } from '../utils/Utils';

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