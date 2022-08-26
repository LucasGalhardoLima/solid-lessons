import {
    Component,
    createEffect,
    createSignal,
    For,
    onMount,
} from "solid-js";
import { listPlanets, planets } from "../stores/Planets";

const Home: Component = () => {
    const [search, setSearch] = createSignal('');
    onMount(() => {
        listPlanets();
    });
    createEffect(() => {
      listPlanets(search())
    })
    return (
        <div>
            <button onClick={() => listPlanets()}>List Planets</button>
            <input type="text" onInput={(e) => setSearch(e.currentTarget.value)} />
            <div style="display: flex; justify-content: center; padding 20px">
                <For each={planets} fallback={<div>Loading...</div>}>
                    {(planet: {
                        name: string;
                        climate: string;
                        terrain: string;
                        id: number;
                    }) => (
                        <div style="margin: 5px; border: 1px solid #bdbdbd; padding: 5px;">
                            <p>Name: {planet.name}</p>
                            <p> Climate: {planet.climate}</p>
                            <p> Terrain: {planet.terrain}</p>
                            <a
                                href={`/planet/${planet.id}`}
                                style="color: yellow"
                            >
                                Details
                            </a>
                        </div>
                    )}
                </For>
            </div>
        </div>
    );
};

export default Home;
