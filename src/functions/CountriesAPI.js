
const getCountries = (state) => {
    fetch('https://restcountries.com/v3.1/all')
        .then((respose) => respose.json())
        .then((data) => {
            state(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
}

const getRegions = (state) => {
    fetch('https://restcountries.com/v3.1/all')
        .then((respose) => respose.json())
        .then((data) => {
            const uniqueIds = [];

            const uniqueEmployees = data.filter(country => {
                const isDuplicate = uniqueIds.includes(country.region);
            
                if (!isDuplicate) {
                    uniqueIds.push(country.region);
            
                    return true;
                }
            
                return false;
            });
            
            state(uniqueEmployees.map(country => country.region));
        })
        .catch((err) => {
            console.log(err.message);
        });
}

const getRegion = (state, regionName) => {
    fetch('https://restcountries.com/v3.1/region/' + regionName)
    .then((respose) => respose.json())
    .then((data) => {
        state(data)
    })
    .catch((err) => {
        console.log(err.message);
    });
}

export {
    getCountries, getRegions, getRegion
}