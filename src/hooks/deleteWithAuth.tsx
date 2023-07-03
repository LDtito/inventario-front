import Cookies from "js-cookie";

const deleteWithAuth = async (url: string, id:string) => {
    url=  process.env.API_URL+"/api/"+url+"/";
    if ( Number(id)>0){
        url = url + id +"/"
    }
    const token = Cookies.get('token') || "";
    let error;
    try{
      const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: { 
          'Authorization' :token,
          'Content-Type': 'application/json',
          'Accept':'application/json'
        },
      });
      if (!response.ok){
        error = "Servidor: "+ ((await response.json()).trace).substring(1,300);
      }
    }catch (e){
      error = "Cliente: "+e;
    }
    return {
      error
    }
  
  }

export default deleteWithAuth;