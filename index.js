const axios = require('axios');

async function simSimi(message, language) {
    if (message == undefined) {
        console.error('\n[!] Enter message first!\nTrouble? : https://github.com/DrelezTM/node-simsimi/issues');
        return;
    } else {
        let lang_text = !language ? "en" : language;
        let lang_support = ["vn","en","ph","zh","ch","ru","id","ko","ar","ms","fr","ja","es","de","pt","ml","si","tr"];
        let lang_check = lang_support.includes(lang_text) ? "en" : language;
        try {
            let url = `https://api.simsimi.net/v2/?text=${message}&lc=${lang_check}`;
            let api = await axios(url);
            let response = {
                message: message,
                response: api.data.success,
                language: lang_check,
                status: { code: api.status, text: api.statusText }
            }

            return response;
        } catch (error) {
            return;
        }
    }
}

module.exports = simSimi;
