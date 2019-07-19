

import Api from "../api/ApiExample"

const action = () => {
    Api.getExample('configuration/countries')
    .then(response => 
        console.log('RESPONSE', response)
    )
    .catch(err => {
    console.log(err)
    })
    return 'example'
}