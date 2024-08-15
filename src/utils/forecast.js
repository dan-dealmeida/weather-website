const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.pirateweather.net/forecast/vMl1hbz0grKls2PwwYo4eExQCTAohas6/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const celsiusTemp = Math.round((body.currently.temperature - 32) * 5 / 9);
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + celsiusTemp + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast