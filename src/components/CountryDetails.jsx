import { Link, useParams } from 'react-router-dom';
import data from '../countries.json';

export const CountryDetails = () => {
  const params = useParams();

  const getCountryByCca3 = (code) => {
    return data.find((country) => country.cca3 === code);
  };
  const country = getCountryByCca3(params.cca3);

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>
              {country.capital.length > 1 ? 'Capitals' : 'Capital'}
            </td>
            {!country.capital.length && <td>None</td>}
            {country.capital.map((capital) => (
              <td key={capital}>{capital}</td>
            ))}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.length === 0 && <li>None</li>}
                {country.borders.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>
                      {getCountryByCca3(border).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
