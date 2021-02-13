import { useEffect, useState } from "react"

import {
    Link
  } from "react-router-dom";


import api from '../resources/api'

export default function List() {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')

    /*
    se ejecuta solo la primera vez cuando 
    se monta el componente
    similar componentDidMount,
    pero también como agregamos la dependencia
    search se ejecutará cuando ejecutemos cualquier
    setSearch(), por eso cambia cuando tipeamos en el buscador
    */
    useEffect(() => {
        api.get(`people/?search=${search}`)
            .then(_charactes => {
                setCharacters(_charactes.data.results)
                setLoading(false)
            })
    }, [search])

    return (
        <section className='list'>
            {loading ? 
                <p>loading...</p>
            : 
                <>
                <div>
                    <input onChange={e => setSearch(e.target.value)} type="text" />
                </div>
                {characters.map((character, index) => 
                    <p>
                        <Link to={`character/${index+1}`}>{character.name}</Link>
                    </p>
                )}
                </> 
            }
        </section>
    )
}