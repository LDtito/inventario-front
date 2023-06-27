const fecher  = async (url:string, token: string) => {
    return await fetch(url, {
        method: 'POST',
        headers:{
            'Authorization': token
        }
    })
}

const useBasicAuth = async (username: string, password: string) => {
    let bearerToken = "";
    try {
        console.log("ingreso en el useBasicAuth")
        const token = 'Basic '+ Buffer.from(username+":"+password).toString('base64');
        console.log(token)
        const baseUrl = process.env.API_URL;
        console.log(baseUrl)
        const response = await fecher(baseUrl+'/login', token);
        console.log(response)
        if (response.ok){
            bearerToken = response.headers.get("Authorization") || "";
    
        }
    } catch (error) {
        console.log(error)
    }

    return{
        bearerToken
    }
}

export default useBasicAuth;