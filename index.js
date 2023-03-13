const core = require('@actions/core');
const axios = require('axios');

try {
    /*
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);*/
    axios({
        method: 'get',
        url: core.getInput('reg-address')
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    })
} catch (error) {
    core.setFailed(error.message);
}