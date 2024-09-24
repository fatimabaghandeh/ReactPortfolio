async function GetData() {
    try{
    const URL = "";
    const response = await fetch(URL);
    const data = await response.json();
    console.log("inside data is", data)
    return data
   }catch (e){
    console.log("eror in api call")

   }
}

export default GetData;