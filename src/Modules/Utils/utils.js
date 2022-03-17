
export async function bodyRequest(url, dataToSend, verb) {
    try {
        const result = await fetch(url, {
            method: verb, // *GET, POST, PUT, DELETE, etc
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
            // body data type must match`Content-Type` header
        });
        const data = await result.json();
		const status = result.status;
		const respose = {
			data: data,
			status: status
		}
        if (result.status !== 200) {
            return false;
        }
        return respose;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

export function saveSessionStorage (key , data) {
	try {
		sessionStorage.setItem(key , data)
	} catch (error) {
		console.log(error)	
	}
}
