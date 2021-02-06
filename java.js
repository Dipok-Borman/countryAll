const countryArea = document.getElementById('countryArea');

function getCountrys() {
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => {

          for (let i = 0; i < data.length; i++) {
            const country = data[i];
            // console.log(country)

            const div = document.createElement('div');
            div.className = 'singleCountry';

            const h2 = document.createElement('h2');
            h2.className = 'name';
            h2.innerText = country.name;

            const h5 = document.createElement('h5');
            h5.className = 'capital';
            h5.innerText = 'Capital:' + " " + country.capital;

            const img = document.createElement('img');
            img.className = 'flagImg';
            img.src = country.flag;

            const h6 = document.createElement('h6');
            h6.className = 'area';
            h6.innerText = 'Area:' + " " + country.area + " sq.km";

            const h61 = document.createElement('h6');
            h61.className = 'area';
            h61.innerText = 'Population:'+" "+ country.population;
            
            const h62 = document.createElement('h6');
            h62.className = 'area';
            h62.innerText = 'Region:'+" "+ country.region;

            const h63 = document.createElement('h6');
            h63.className = 'area';
            h63.innerText = 'Timezones:'+" "+ country.timezones[0];

            const h64 = document.createElement('h6');
            h64.className = 'area';
            h64.innerText = 'Code:'+" "+ country.currencies[0].code;

            const h65 = document.createElement('h6');
            h65.className = 'area';
            h65.innerText = 'Currencies:'+" "+ country.currencies[0].name;

            const h66 = document.createElement('h6');
            h66.className = 'area';
            h66.innerText = 'Symbol:'+" "+ country.currencies[0].symbol;

            const h67 = document.createElement('h6');
            h67.className = 'area';
            h67.innerText = 'International:'+" "+ country.altSpellings[1];

            const h68 = document.createElement('h6');
            h68.className = 'area';
            h68.innerText = 'CallingCodes:'+" "+ country.callingCodes[0];
            
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(h5);
            div.appendChild(h6);
            div.appendChild(h61);
            div.appendChild(h62);
            div.appendChild(h63);
            div.appendChild(h64);
            div.appendChild(h65);
            div.appendChild(h66);
            div.appendChild(h67);
            div.appendChild(h68);





            countryArea.appendChild(div);
          }





        })
  }


  getCountrys();