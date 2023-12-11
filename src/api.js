function getProducts(id, category) {
    const products = [
        {id: 1, title: "Galápagos", category: "Pacífico", categoryUrl: "pacifico", categoryID: 1, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Galapagos-satellite-2002.jpg/320px-Galapagos-satellite-2002.jpg", price: 123, stock: 4, description: "Las islas Galápagos constituyen un archipiélago del océano Pacífico ubicado a 972 km de la costa de Ecuador."},
        {id: 2, title: "Cabo Verde", category: "Atlánico", categoryUrl: "atlantico", categoryID: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Insulae_Capitis_viridis-1598.jpg/220px-Insulae_Capitis_viridis-1598.jpg", price: 102, stock: 5, description: "Cabo Verde es un Estado soberano insular de África, situado en el océano Atlántico, frente a las costas senegalesas."},
        {id: 3, title: "Pascua", category: "Pacífico", categoryUrl: "pacifico", categoryID: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Amanecer_en_Tongariki%2C_Isla_de_Pascua_-_Flickr_-_Alanbritom.jpg/275px-Amanecer_en_Tongariki%2C_Isla_de_Pascua_-_Flickr_-_Alanbritom.jpg", price: 248, stock: 2, description: "Isla de Pascua (Rapa Nui) es una isla de Chile, perteneciente a la región de Valparaíso, ubicada en la Polinesia, Oceanía, en medio del océano Pacífico a 3700 kilómetros del continente."},
        {id: 4, title: "Canarias", category: "Atlánico", categoryUrl: "atlantico", categoryID: 1, img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Santa_Cruz_de_Tenerife_SPOT_1320.jpg", price: 199, stock: 7, description: "Canarias es un archipiélago de origen volcánico situado en el océano Atlántico que conforma una comunidad autónoma española en el noroeste de África, con estatus de nacionalidad histórica. Es, además, una de las regiones ultraperiféricas de la Unión Europea."}
    ];
    let result = [];

    if(id)
        result = products.find(product => product.id == id);
    else if(category)
        result = products.filter(product => product.categoryUrl == category);
    else
        result = products;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 1000)
    });
}

export default getProducts;
