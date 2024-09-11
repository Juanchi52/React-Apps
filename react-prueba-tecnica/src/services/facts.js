const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT) // ⬅️ 1) llamada a la API, el resultado es una Promise
    const data = await res.json() // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
    const {fact} = data // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto
    return fact
}

export async function getNewImageFact (fact,setImageUrl) {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    try {
        const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        const response = await res.json()
        const {_id} =  response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
    } catch (error){
        console.error("Error fetching cat image", error)
    }
} 