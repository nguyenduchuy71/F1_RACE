import { getRaceResult } from '../lib/getRaceResult';
import { create } from 'zustand';
import race_result_dir from '../data/race_result.csv';

const handle_list_year = list_object => {
    let list_array_year = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.year && list_array_year.includes(obj_value?.year) === false){
            list_array_year = [...list_array_year, obj_value?.year];
        }
    });
    return list_array_year.sort((a, b) => {return b-a});
}

const handle_list_winner = list_object => {
    let list_array_winner = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.WINNER && list_array_winner.includes(obj_value?.WINNER) === false){
            list_array_winner = [...list_array_winner, obj_value?.WINNER];
        }
    });
    list_array_winner = [...list_array_winner, 'ALL']
    return list_array_winner.sort((a, b) => {return a-b});
}

const handle_list_car = list_object => {
    let list_array_car = [];
    list_object.forEach((obj_value) => {
        if(obj_value?.CAR && list_array_car.includes(obj_value?.CAR) === false){
            list_array_car = [...list_array_car, obj_value?.CAR];
        }
    });
    list_array_car = [...list_array_car, 'ALL']
    return list_array_car.sort((a, b) => {return a-b});
}

export const useRaceStore = create((set, get) => ({
    list_race_result: [],
    selected_year: '',
    selected_winner: '',
    selected_car: '',
    list_year: [],
    list_car: [],
    list_winner: [],
    getListRaceResult: async () => {
        const list_race_result = await getRaceResult(race_result_dir);
        const list_year = handle_list_year(list_race_result);
        const list_winner = handle_list_winner(list_race_result);
        const list_car = handle_list_car(list_race_result);
        const selected_year = list_year.slice(0)[0];
        const selected_winner = 'ALL';
        const selected_car = 'ALL';
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
            race_object => race_object?.year === selected_year);

        if (get().selected_winner && get().selected_winner !== 'ALL'){
            list_race_result = list_race_result.filter(
                race_object => race_object?.WINNER === get().selected_winner);
        }
        if (get().selected_car && get().selected_car !== 'ALL'){
            list_race_result = list_race_result.filter(
                race_object => race_object?.CAR === get().selected_car);
        }
        set({ selected_year });
        set({ list_race_result });
    },
    setSelectedWinner: async (selected_winner) => {
        let list_race_result = await getRaceResult(race_result_dir);
        if(selected_winner && selected_winner !== 'ALL')
        {
            list_race_result = list_race_result.filter(
                race_object => race_object?.WINNER === selected_winner);
        }
        if (get().selected_car && get().selected_car !== 'ALL'){
            list_race_result = list_race_result.filter(
                race_object => race_object?.CAR === get().selected_car);
        }
        set({ selected_winner });
        set({ list_race_result });
    },
    setSelectedCar: async (selected_car) => {
        let list_race_result = await getRaceResult(race_result_dir);
        if(selected_car && selected_car !== 'ALL')
        {
            list_race_result = list_race_result.filter(
                race_object => race_object?.CAR === selected_car);
        }
        if (get().selected_winner && get().selected_winner !== 'ALL'){
            list_race_result = list_race_result.filter(
                race_object => race_object?.WINNER === get().selected_winner);
        }
        set({ selected_car });
        set({ list_race_result });
    },
}));