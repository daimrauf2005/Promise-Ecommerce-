const div = document.querySelector('div');

axios('https://fakestoreapi.com/products')

.then((res)=>{

    console.log(res.data);

    res.data.map((item)=>{

        div.innerHTML += `
        <div class="card mt-5" style="width: 15rem;">
        <h3>Title: ${item.title}</h3>
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
  <h3>Category: ${item.category}</h3>
  <h4>Price: ${item.price}</h4>
    <a href="#" class="btn btn-primary">Add To Card</a>
  </div>
</div>
`
    })

}).catch((err) => {
    console.log(err);
});

