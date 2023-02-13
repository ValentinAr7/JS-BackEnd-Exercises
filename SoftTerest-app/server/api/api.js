 const host = 'http://localhost:3030';

 async function requester (method, url, data){
    const option = {
        method,
        headers: {}
    }

    if(data){
        option.headers['Content-Type' = 'Application/json'];
        option.body = JSON.stringify(body);
    }

    const response = await fetch (host + url, option)

 }