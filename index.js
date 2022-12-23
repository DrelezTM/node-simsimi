const axios = require('axios');

async function getFetch(message, language) {
    let lang = language == undefined ? "en" : language;
    if (message !== undefined) {
        try {
            let url = `https://api.simsimi.net/v2/?text=${message}&lc=${lang}`;
            let api = await axios(url);
            return api;
        } catch(error) {
            return error;
        }
    } else {
        return 0;
    }
}

async function getStatus(message, language) {
    try {
        let api = await getFetch(message, language);
        let statusCode = await api.status;
        let statusText = await api.statusText;
        return { code: statusCode, text: statusText };
    } catch(error) {
        return error;
    }
}

async function getResponse(message, language) {
    try {
        let api = await getFetch(message, language);
        let data = await api.data;
        return data;
    } catch(error) {
        return error;
    }
}

async function simSimi(message, language) {
    let res_status = await getStatus(message, language);
    let status = await res_status;
    let res_data = await getResponse(message, language);
    let response = await res_data.success;
    let data = {
        message: message,
        response: response,
        language: language,
        status: {
            code: status.code,
            text: status.text
        }
    }
    return data;
}

module.exports = simSimi;
