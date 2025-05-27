const args = process.argv.slice(2); 
const verbo = args[0].toUpperCase();
const path = args[1];
const url = 'https://fakestoreapi.com/'
const uri = url + path;

const fetchData = async (verbo, url, product) => {
    try {
        if (verbo === 'GET') { 
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } else if (verbo === 'POST') { 
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            console.log(data);
        } else if (verbo === 'DELETE') { 
            const response = await fetch(url, {
                method: 'DELETE'
            });
            const data = await response.json();            
            console.log(data);
        }
    } catch (error) {
        console.error(error)
    }
}
/*
const postData = async (url, product) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}
*/
/*
const deleteData = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}
*/
if ((verbo === 'GET') || (verbo === 'DELETE')) { 
    fetchData(verbo, uri);    
} else if (verbo === 'POST') { 
    const [title, price, category] = args.slice(2);
    const product = { title: title, price: price, category: category };
    fetchData(verbo, uri, product); 
} else { 
    console.log('Comando no reconocido.'); 
} 
