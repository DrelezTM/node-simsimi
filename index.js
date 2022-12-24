const axios = require('axios');

async function getFetch(message, language) {
    let lang = !language ? "en" : language;
    try {
        let url = `https://api.simsimi.net/v2/?text=${message}&lc=${lang}`;
        let api = await axios(url);
        return api;
    } catch(error) {
        return error;
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
    if (message) {
        let lang = ["vn","en","ph","zh","ch","ru","id","ko","ar","ms","fr","ja","es","de","pt","ml","si","tr"];
        let checkLanguage = lang.includes(language) ? language : 'en';
        let res_status = await getStatus(message, checkLanguage);
        let status = await res_status;
        let res_data = await getResponse(message, checkLanguage);
        let response = await res_data?.success;
        let data = {
            message: message,
            response: response,
            language: checkLanguage,
            status: {
                code: status.code,
                text: status.text
            }
        }
        return data;
    } else {
        console.error('\n[!] Enter message first!\nTrouble? : https://github.com/DrelezTM/node-simsimi/issues');
        return;
    }
}

module.exports = simSimi;
