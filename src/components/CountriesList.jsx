import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
  const [hover, setHover] = useState();

  const hoverCountry = (e) => {
    setHover(e.target.innerText);
  };

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries && (
        <ul className="list-group">
          {countries.map((country) => (
            <Link key={country.cca3} to={`/${country.cca3}`}>
              <li
                className={
                  hover === `${country.flag} ${country.name.common}`
                    ? 'list-group-item active'
                    : 'list-group-item'
                }
                onMouseEnter={(e) => hoverCountry(e)}
                key={country.name.common}
              >
                {country.flag} {country.name.common}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
