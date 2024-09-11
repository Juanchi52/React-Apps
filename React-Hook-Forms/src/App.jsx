import './App.css'
import {useForm} from "react-hook-form"
import validador from './validador'

function App() {
  const {register,handleSubmit, formState:{errors}, watch, setFocus, resetField} = useForm()
  const obtenerValores =(data) => {
    resetField('telefono')
    setFocus('telefono')
  }

  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className='pregunta'>
          <label htmlFor='nombre'>Nombre:</label>
          <input id="nombre" placeholder='Escribe tu nombre' autoFocus 
          {...register('nombre',
          {
            required:true,
            maxLength:15
          }
          )}/>
        </div>
        {errors.nombre?.type === "required" && 
        <div className='aviso'>El nombre de usuario es obligatorio</div>}

        {errors.nombre?.type === "maxLength" && 
        <div className='aviso'>El maximo son 15 caracteres</div>}

        <div className='pregunta'>
          <label htmlFor='edad'>Edad:</label>
          <input id="edad" type = "number" placeholder='Escribe tu edad' 
          {...register('edad',
          {
            min:1,
            max:100
          })}/>
        </div>

        {errors.edad?.type === "min" && 
        <div className='aviso'>El minimo es 1</div>}
        {errors.edad?.type === "max" && 
        <div className='aviso'>El minimo es 100</div>}

        <div className='pregunta'>
          <label htmlFor='email'>Email:</label>
          <input id="email" placeholder='Escribe tu email' 
          {...register('email',
          {
            pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
          })}/>
        </div>
        {errors.email?.type === "pattern" && 
        <div className='aviso'>El correo tiene una sintaxis erronea</div>}

        <div className='pregunta'>
          <label htmlFor='telefono'>Telefono:</label>
          <input type = "number" id="telefono" placeholder='Escribe tu telefono' 
          {...register('telefono',
          {
            validate:validador
          })}/>
        </div>
        {errors.telefono?.type === "validate" && 
        <div className='aviso'>El telefono tiene que ser fijo y de la ciduad en la que vivas</div>}

        <div >
          <input  type='submit'/>
        </div>
      </form>
      <div>
        {
        watch('nombre') && 
        <div className='resumen'>Me llamo <strong>{watch('nombre')}</strong>
        {watch('edad') && <span> y tengo {watch('edad')} años</span>}
        </div>
        } 
        </div>
    </>
  )
}

export default App
