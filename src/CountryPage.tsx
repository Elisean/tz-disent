import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export const CountryPage = () => {
    const {id} = useParams();
    const [country, setCountry] = useState<any>([])

    useEffect(()=>{
      fetch(`https://restcountries.com/v3.1/name/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сервера: ' + response.status);
        }
        return response.json(); 
      })
      .then(data => {
        setCountry(data)
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
    },[])
  
  return (
    <Container>
    {country.map((data: any, id: number) => (
        <ul key={id}>
            <li>
               <img src={data.coatOfArms.svg ?? data.coatOfArms.png} alt="flag" />
            </li>
            <li>
                Country:  {data.name?.common}
            </li>
            <li>
                Official:  {data.name?.official}
            </li>
            <li>
                Continents:  {data.continents}
            </li>
            <li>
                languages:  {Object.values(data.languages).join(', ')}
            </li>
            <li>
                Currencies: {Object.keys(data.currencies)}
            </li>
            <li>
                Region: {data.region}
            </li>
            <li>
                Timezones: {data.timezones}
            </li>
            <li>
                Subregion: {data.subregion}
            </li>
            <li>
                Currencies: {Object.keys(data.demonyms).join(', ')}
            </li>
        </ul>
))}
    </Container>
  )
}


