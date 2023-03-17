import { useState } from 'react';
import Pokemon from '../api/pokemon';

const CardWelcome = ({setPokemon}) => {

    let name = ''
    const [noData, setNoData] = useState(true)

    const searchPokemon = async (name) => {
        const res = await Pokemon.getPokemon(name)
        setPokemon(res.data)
    }

    const data = (event) => {
        name = event.target.value
    
        if( name !== '' ){
            setNoData(false)
        } else {
            setNoData(true)
        }
    }

    return (
        <>
            <div className="card welcomeCard">
                <div className="card-body">
                    <h5>Bienvenido entrenador</h5>
                    <label className="form-label">Elije a tu Pokemon del día:</label>
                    <input type='text'  className="form-control inputPokemon" onChange={data}/><br/>
                    <button className="btn btn-primary" onClick={() => searchPokemon(name)} disabled={noData}>Buscar</button>
                </div>
            </div>
        </>
    )
}

export default CardWelcome;