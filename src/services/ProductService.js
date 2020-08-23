const createProduct = (uid, product) =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/users/" + uid, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateProduct = (productId, product) =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/products/" + productId, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteProduct = (productId) =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/products/" + productId, {
        method: 'DELETE'
    })
        .then(response => response.json())

const findProductById = (productId) =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/products/" + productId)
        .then(response => response.json())

const findAllProducts = () =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/products")
        .then(response =>
                  response.json())

const findAllProductByUserId = (userId) =>
    fetch("https://cs4550-20su1-group17-server.herokuapp.com/api/users/"+ userId + "/products")
        .then(response =>
        response.json())


export default {
    findAllProducts,
    findProductById,
    deleteProduct,
    updateProduct,
    createProduct,
    findAllProductByUserId
}
