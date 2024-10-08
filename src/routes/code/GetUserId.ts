export async function fetchUUID():Promise<string>{
    try{
        const response = await fetch("http://localhost:8080/api/v1/get/code", {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            },
        });

        if(!response.ok){
            throw new Error("Fail to fetch UUID");
        }

        const data = await response.json();
        console.log(data)
        return data
    }catch(error){
        console.error("Error: ", error)
        throw error
    }
}