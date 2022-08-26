import { useParams } from "@solidjs/router";
import { Component, onMount, Show } from "solid-js";
import { listPlanet, planet } from "../stores/Planets";

const PlanetDetails: Component = () => {
    const params = useParams();

    onMount(() => {
        listPlanet(params.id);
    });

    console.log(planet)
    return (
        <Show
            when={Object.keys(planet).length !== 0}
            fallback={<div>Loading...</div>}
        >
            <div style="display: flex; justify-content: center; padding 20px">
                <div style="margin: 5px; border: 1px solid #bdbdbd; padding: 5px;">
                    <p> Name: {planet?.name}</p>
                    <p> Climate: {planet?.climate}</p>
                    <p> Terrain: {planet?.terrain}</p>
                    <p> Diameter: {planet?.diameter}</p>
                    <p> Population: {planet?.population}</p>
                    <p> Gravity: {planet?.gravity}</p>
                    <p>
                        {" "}
                        *Rotation Period: {planet?.rotation_period} <br />
                        <span style="font-size: 10px">
                            *The number of standard hours it takes for this
                            planet to complete a single rotation on its axis
                        </span>
                    </p>
                    <p>
                        {" "}
                        *Orbital Period: {planet?.orbital_period} <br />
                        <span style="font-size: 10px">
                            *The number of standard days it takes for this
                            planet to complete a single orbit of its local star.
                        </span>
                    </p>
                </div>
            </div>
        </Show>
    );
};

export default PlanetDetails;
