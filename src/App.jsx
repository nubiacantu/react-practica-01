import { Buscador } from './Buscador';
import { GridGifs } from './GridGifs';
import { useSearchGifs } from './useSearchGifs';
function App() {
  const nombre = 'Nubia';

  const {valorInput, onSubmit, onChange, gifs, estaCargando} = useSearchGifs()

  return (
    <>
    <div>
      <h1>Hola {nombre}</h1>
      <Buscador 
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {
        estaCargando ? 
          (<h2>Cargando...</h2>) :
          (
            <GridGifs
              gifs={gifs}
            />
          )
      }
      
      

    </div>
   
    </>
  )
}

export default App
