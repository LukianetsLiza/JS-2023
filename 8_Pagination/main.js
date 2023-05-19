const api = 'https://dummyjson.com/products';

const list = document.getElementById('product-list');

let pagination = {
    limit: 10,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    },
    get isEnd() {
        if (this.total == null) return false;
        return this.skip >= this.total;
    }
};

function loadProducts() {

    let url = `${api}?skip=${pagination.skip}&limit=${pagination.limit}`;
    pagination.next();

    fetch(url).then(res => res.json()).then(data => {

        pagination.total = data.total;
        moreBtn.disabled = pagination.isEnd;

        const products = data.products;

        for (const p of products) {
            addProduct(p);
        }
    });
}

function addProduct(product) {

    list.innerHTML += `<li><div class="card" style="width: 18rem;">
                            <img src="${product.thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Rating: ${product.rating} points</li>
                                <li class="list-group-item">Brand: ${product.brand}</li>
                                <li class="list-group-item">Price: ${product.price}$</li>
                                <a href="#" class="btn btn-success">Detalis</a>
                            </ul>
                            </div>
                        </div></li>`
}

loadProducts();

moreBtn.onclick = () => {
    loadProducts();
}
