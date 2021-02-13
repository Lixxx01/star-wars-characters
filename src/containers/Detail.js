import {useEffect, useState} from 'react'
import api from '../resources/api'

import {
    useParams
  } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState([])

    /*
    se ejecuta solo la primera vez cuando 
    se monta el componente
    similar componentDidMount,
    como también agregamos el id
    se ejecturá cada vez que cambie el id
    */
   useEffect(() => {
     console.log('h')
    api.get(`people/${id}`)
        .then(character => {
            setDetail(character.data)
            setLoading(false)
        })
    }, [id])

    return (
      <section className='list'>
          {loading ? 
              <p>loading...</p>
          : 
              <>
                <h2>{detail.name}</h2>
                <p>Height: {detail.height}</p>
                <p>Hair Color: {detail.hair_color}</p>
                <p>Mass: {detail.mass}</p>
                <p>Eye Color: {detail.eye_color}</p>
              </> 
          }
      </section>
  )
}