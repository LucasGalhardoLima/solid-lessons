import { createResource, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { mande } from "mande";

const api = mande("https://swapi.dev/api/");

export const listPlanets = async (search?: string) => {
    try {
        setPlanets([]);
        //@ts-ignore
        const { results } = await api.get(
            `planets/${search ? `?search=${search}` : ""}`
        );
        console.log(results);
        setPlanets(results.map((item: { url: string; }) => ({
          ...item,
          id: item.url.substring(
              item.url.length - 2,
              item.url.length - 1
          )
        })));
    } catch (error) {
        console.log(error);
    }
};

export const [planets, setPlanets] = createStore<Array<any>>([]);
