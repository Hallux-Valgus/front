interface Account {
    code: string;
    gender: string;
    age: number;
}

async function GetCode(): Promise<string> {
    try {
        const response = await fetch("http://localhost:8080/api/v1/get/code", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            throw new Error("Fail to fetch")
        }

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function CreateUser(
    gender: string, age: number
): Promise<string> {
    const code = await GetCode()
    const account: Account = {
        code: code,
        gender: gender,
        age: age
    };

    const response = await fetch("http://localhost:8080/api/v1/create/user", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(account)
    })

    if(!response.ok){
        throw new Error("Fail to create")
    }

    const result_account = await response.json()

    localStorage.setItem("code", result_account.code)

    return result_account.code
}