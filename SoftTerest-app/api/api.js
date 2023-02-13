const host = 'http://localhost:3030';

async function requester(method, url, data) {      //create a requester
    const option = {                                //check the method if GET fetch
        method,                                     // if POST add header and body
        headers: {}
    }

    if (data) {
        option.headers['Content-Type' = 'Application/json'];    //add header
        option.body = JSON.stringify(data);                     //add body
    }


    try {
        const response = await fetch(host + url, option)           //fetch data from the server
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status === 204) {
            return response
        } else {
            return response.json()
        }
    } catch (error) {
        alert(error)
    }
    const data = await response.json()


}

const get = requester.bind(null, 'get');            //send the method to the requester
const post = requester.bind(null, 'post');          //content === null
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');

export {
    get,
    post,
    put,
    del as delete
}