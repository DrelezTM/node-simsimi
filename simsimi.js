import { error } from "console";
import fetch from "node-fetch";

async function getFetch(message, language) {
    let lang = language == undefined ? "en" : language;
    if (message !== undefined) {
        try {
            let link = `https://api.simsimi.net/v2/?text=${message}&lc=${lang}`;
            let api = await fetch(link);
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
        let statusCode = api.status;
        let statusText = api.statusText;
        return { code: statusCode, text: statusText };
    } catch(error) {
        return error;
    }
}

async function getResponse(message, language) {
    try {
        let api = await (await getFetch(message, language)).json();
        return api;
    } catch(error) {
        return error;
    }
}

async function simSimi(message, language) {
    let status = await getStatus(message, language);
    let response = await getResponse(message, language);
    let data = {
        message: message,
        response: response.success,
        language: language,
        status: {
            code: status.code,
            text: status.text
        }
    }
    return data;
}

export default simSimi;
