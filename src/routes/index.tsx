import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';


export default component$(() => {

  const pokemonId = useSignal(1); //
  const imageBack = useSignal(false);
  const isVisibleaqui = useSignal(true);
  const changePokemonId = $((value:number) =>{
    if ((pokemonId.value + value)<= 0) return;

    pokemonId.value += value;
    isVisibleaqui.value = true;
    
  })
  
  return (
    <>
      <span class="text-2xl">Buscador Simple</span>

      <span class="text-9xl">{pokemonId}</span>

      {/*  */}
      <PokemonImage id = {pokemonId.value} backImage = {imageBack.value} isVisible= {isVisibleaqui.value}/>

      <div class="mt-2">
        <button onClick$={() => changePokemonId(-1)} class = "btn btn-primary mr-2">Anterior</button>
        <button onClick$={() => changePokemonId(+1)} class = "btn btn-primary mr-2">Siguiente</button>
        <button onClick$={() => imageBack.value = !imageBack.value} class = "btn btn-primary mr-2">Voltear</button>
        <button onClick$={() => isVisibleaqui.value = !isVisibleaqui.value} class = "btn btn-primary mr-2">Revelar</button>
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
