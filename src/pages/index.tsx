import React, { useEffect, useState, useCallback, FormEvent, useRef } from 'react'
import api from '../services/api'
import Link from 'next/link'
import { } from 'next/router'

import { Container, Content, PeopleContainer, PersonContainer } from '../styles/Pages/Index/styles'

interface People {
  name: string;
  gender: string;
  race: string;
  height: string
}

const Home = () => {
  const [people, setPeople] = useState<People[]>([])
  const [heroName, setHeroName] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    api.get('/people').then(response => {
      setPeople(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  const searchByName = useCallback(async (e: FormEvent) => {
    e.preventDefault()

    api.get('/')
  }, [heroName])

  return (
    <Container>

      <Content>
        <h1>App Twitch With Next.js</h1>

        <form ref={formRef} onSubmit={searchByName}>

          <input type="text" name="name" onChange={(e) => { setHeroName(e.target.value) }} />

          <button type="submit">Procurar</button>
        </form>

        <PeopleContainer>
          {people.map(person => (
            <PersonContainer key={person.name}>
              <Link href={`/person/:${person.name}`} as={`/person/${person.name}`} >
                <a>
                  <h2>{person.name}</h2>
                  <ul>
                    <li>Genero: <strong>{person.gender}</strong>
                    </li>
                    <li>Raça: <strong>{person.race}</strong></li>
                    <li>Altura: <strong>{person.height}</strong></li>
                  </ul>
                </a>
              </Link>
            </PersonContainer>
          ))}
        </PeopleContainer>
      </Content>

    </Container>
  )
}

export default Home
