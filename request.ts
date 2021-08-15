const cloudscraper = require('cloudscraper')

export const request = query => {
    return cloudscraper({
        method: 'POST',
        url: 'https://api.opensea.io/graphql/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cookie': 'csrftoken=juk1zE6AC6c8QTnmqU6WWg17OSK5z5oMyfHjLzHDl2KBU3keYAiesPFSK9mpiAiF'
        },
        body: JSON.stringify(query)
    }).then(result => {
        return JSON.parse(result)
    })

};