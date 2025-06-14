
import  './Products.css'


function Items({image,name,addToCart,id}){
    return (
        <div className='product'key={id} >
           <img src={require(`../../assets/${image}`)} alt="" />
           <h2>{name}</h2>
           <button onClick={()=>addToCart(id,image,name)}>Add Cart</button>
        </div>
    )
}

function Products({addToCart,allProducts}){
    return(
        <div className='products'>
           {
            allProducts.map((data)=>(
                <Items  key={data.id} id={data.id} image={data.image} name={data.name} addToCart={addToCart}/>
            ))
           }
        </div>
    )
}
export default Products