async function GetData() {
    try{
    const URL = "http://localhost:1337/api/projects?populate=image";
    const response = await fetch(URL);
    const data = await response.json();
    console.log("inside data is", data)
    return data
   }catch (e){
    console.log("eror in api call")

   }
}

export default GetData;