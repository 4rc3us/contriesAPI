export async function getData(url = '', data = {}) {
    const response = await fetch(url);

     return response.json().then(data => data);
}