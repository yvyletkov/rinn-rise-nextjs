export default async function request(data,
                                      method = 'POST',
                                      url = 'https://team.upro-dev.ml/forms/notify/') {

    const headers = {'Content-Type': 'application/json;charset=utf-8'};

    let init = {
        method: method,
        headers: headers
    }

    if (method === 'POST') {
        init = {
            ...init,
            body: JSON.stringify(data),
        }
    }

    return await fetch(`${url}`, init);
};