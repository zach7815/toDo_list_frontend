// need api route
// take a REST Method

export const UseFetch = (api, method, data)=>{
    const requestOptions = {
        method:method,
        mode:'cors',
       headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)||""
     }

    fetch(api, requestOptions)




}