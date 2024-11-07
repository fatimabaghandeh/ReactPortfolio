async function GetData() {
    try {
        const URL = import.meta.env.VITE_API_URL; 
        const response = await fetch(URL);
        const data = await response.json();
        console.log("inside data is", data);
        return data;
    } catch (e) {
        console.log("error in API call", e);
    }
}

export default GetData;
