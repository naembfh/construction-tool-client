const products=[
    {name:"shirt",description:"black",price:3000},
    {name:"pant",description:"red",price:5000},
    {name:"sunglass",description:"yellow",price:8000},
    ]
    
    const found=products.filter(product=>product.name.includes('pant'));
    console.log(found)