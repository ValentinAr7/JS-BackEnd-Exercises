 const host = 'http://localhost:3030';

 async function requester (method, url, data){      //create a requester
    const option = {                                //check the method if GET fetch
        method,                                     // if POST add header and body
        headers: {}
    }

    if(data){
        option.headers['Content-Type' = 'Application/json'];    //add header
        option.body = JSON.stringify(body);                     //add body
    }

    const response = await fetch (host + url, option)           //fetch data from the server

 }