import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {

  const pokemonId = useSignal(1); //
  const changePokemonId = $((value:number) =>{
    if ((pokemonId.value + value)<= 0) return;

    pokemonId.value += value;
  })

  return (
    <>
      <span class="text-2xl">Buscador Simple</span>

      <span class="text-9xl">{pokemonId}</span>

      <img 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
      alt="Pokemon Sprite" 
      style={{with:'200px'}}
      height={200}
      width={200}
      />

      <div class="mt-2">
        <button onClick$={() => changePokemonId(-1)} class = "btn btn-primary mr-2">Anterior</button>
        <button onClick$={() => changePokemonId(+1)} class = "btn btn-primary">Siguiente</button>

      </div>

    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'Esta es mi primera aplicacion de qwik',
    },
  ],
};
