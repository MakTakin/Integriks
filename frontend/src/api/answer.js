export const fetchAnswer = async (url, answer, setLoading ) => {
    const bodyRequest = {
        method: 'POST',
        body: JSON.stringify(answer),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    await fetch(url, bodyRequest)
    await setLoading(false)
}