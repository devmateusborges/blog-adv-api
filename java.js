const axios = require('axios');

const prompt = 'Olá, gostaria de pedir uma pizza.';
const model = 'davinci';
const apiKey = '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';

axios({
    method: 'post',
    url: `https://api.openai.com/v1/completions`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    data: {
        prompt,
        model,
        max_tokens: 50,
        n: 1,
        stop: '\n',
        temperature: 0.5,
    },
})
    .then(response => {
        const text = response.data.choices[0].text;
        console.log(text);
    })
    .catch(error => {
        console.error(error);
    });