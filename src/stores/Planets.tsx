import { createResource, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { mande } from "mande";

const api = mande("https://swapi.dev/api/");

interface Planet {
    name?: string;
    climate?: string;
    terrain?: string;
    diameter?: string;
    population?: string;
    gravity?: string;
    rotation_period?: string;
    orbital_period?: string;
}

export const listPlanets = async (search?: string) => {
    try {
        setPlanets([]);
        //@ts-ignore
        const { results } = await api.get(
            `planets/${search ? `?search=${search}` : ""}`
        );
        console.log(results);
        setPlanets(
            results.map((item: { url: string }) => ({
                ...item,
                id: item.url.substring(
                    item.url.length - 2,
                    item.url.length - 1
                ),
            }))
        );
    } catch (error) {
        console.log(error);
    }
};

export const listPlanet = async (id: string) => {
    try {
        const response: object = await api.get(`/planets/${id}/`);
        setPlanet({...response});
    } catch (error) {
        console.log(error);
    }
};

export const [planets, setPlanets] = createStore<Array<any>>([]);
export const [planet, setPlanet] = createStore<Planet>({});
