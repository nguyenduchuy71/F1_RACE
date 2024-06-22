import { getRaceResult } from "../utils/handleFileData";
import { create } from "zustand";
import race_result_dir from "../data/race_result.csv";
import { handleListYear, handleListWinner, handleListCar } from "../utils";

export const useRaceStore = create((set, get) => ({
  list_race_result: [],
  selected_year: "",
  selected_winner: "",
  selected_car: "",
  search_text: "",
  list_year: [],
  list_car: [],
  list_winner: [],
  getListRaceResult: async () => {
    const list_race_result = await getRaceResult(race_result_dir);
    const list_year = handleListYear(list_race_result);
    const list_winner = handleListWinner(list_race_result);
    const list_car = handleListCar(list_race_result);
    const selected_year = list_year.slice(0)[0];
    const selected_winner = "ALL";
    const selected_car = "ALL";
    set({ list_race_result });
    set({ list_year });
    set({ list_winner });
    set({ list_car });
    set({ selected_year });
    set({ selected_winner });
    set({ selected_car });
  },
  setSelectedYear: async (selected_year) => {
    let list_race_result = await getRaceResult(race_result_dir);
    list_race_result = list_race_result.filter(
      (race_object) => race_object?.year === selected_year,
    );

    if (get().selected_winner && get().selected_winner !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.WINNER === get().selected_winner,
      );
    }
    if (get().selected_car && get().selected_car !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.CAR === get().selected_car,
      );
    }
    set({ selected_year });
    set({ list_race_result });
  },
  setSelectedWinner: async (selected_winner) => {
    let list_race_result = await getRaceResult(race_result_dir);
    if (selected_winner && selected_winner !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.WINNER === selected_winner,
      );
    }
    if (get().selected_car && get().selected_car !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.CAR === get().selected_car,
      );
    }
    set({ selected_winner });
    set({ list_race_result });
  },
  setSelectedCar: async (selected_car) => {
    let list_race_result = await getRaceResult(race_result_dir);
    if (selected_car && selected_car !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.CAR === selected_car,
      );
    }
    if (get().selected_winner && get().selected_winner !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.WINNER === get().selected_winner,
      );
    }
    set({ selected_car });
    set({ list_race_result });
  },
  setSearchText: async (search_text) => {
    let list_race_result = await getRaceResult(race_result_dir);
    if (search_text) {
      search_text = search_text.toLowerCase();
      list_race_result = list_race_result.filter(
        (race_object) =>
          race_object?.CAR?.toLowerCase()?.includes(search_text) ||
          race_object?.WINNER?.toLowerCase()?.includes(search_text) ||
          race_object?.LAPS?.toLowerCase()?.includes(search_text) ||
          race_object?.DATE?.toLowerCase()?.includes(search_text) ||
          race_object?.["GRAND PRIX"]?.toLowerCase()?.includes(search_text),
      );
    }
    if (get().selected_car && get().selected_car !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.CAR === get().selected_car,
      );
    }
    if (get().selected_winner && get().selected_winner !== "ALL") {
      list_race_result = list_race_result.filter(
        (race_object) => race_object?.WINNER === get().selected_winner,
      );
    }
    set({ search_text });
    set({ list_race_result });
  },
}));
