import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Main:React.FC = () => {
    const [countries, setCountries] = useState<any>([])

    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сервера: ' + response.status);
        }
        return response.json(); 
      })
      .then(data => {
        setCountries(data)
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
    },[])

  return (
    <Container>
        <ul className='row'>
        {countries.map((country: any, id: number) => (
                <li className='col col-md-2' key={id}><Link to={`/CountryPage/${country.name.common}`}>{country.name.common}</Link></li>         
        ))}
    </ul>
  </Container>
  )
}

