import { getRaceResult } from "../utils/handleFileData";
import { create } from "zustand";
import team_result_dir from "../data/team_result.csv";
import { random_color, handleTeamInfo } from "../utils";

export const useTeamInforStore = create((set, get) => ({
  list_team_info: [],
  list_year_info: [],
  list_team_result: [],
  list_pos_info: [],
  list_background_color: [],
  getListTeamInfoResult: async (team_name) => {
    const list_team_result = await getRaceResult(team_result_dir);
    const list_team_info = handleTeamInfo(list_team_result, team_name);
    let list_year_info = [];
    let list_pos_info = [];
    let list_background_color = [];
    list_team_info.forEach((item) => {
      list_year_info = [...list_year_info, item?.year];
      list_pos_info = [...list_pos_info, item?.POS];
      list_background_color = [...list_background_color, random_color()];
    });
    set({ list_background_color });
    set({ list_pos_info });
    set({ list_team_info });
    set({ list_year_info });
  },
}));
