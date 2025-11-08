import './Banner1.css'
function Banner1(){
    return (
    <div className='containers'>
    <div className='container1'>
        <div style={{marginTop:"20px",marginLeft:"40px"}}>
            <p style={{color:"orange"}}>100% Natural</p>
            <strong>Fresh Smoothie & Summer Juice</strong> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit, magni libero officiis mollitia laudantium? </p>
            <button style={{padding:"15px 28px"}}>SHOP NOW</button>
        </div>
        <div>
            <img style={{marginTop:"30px"}} src="https://food-mart-template.vercel.app/images/product-thumb-1.png" height="400px" width="300px" />
        </div>
    </div>
    <div className='container2'>
    <div className='container3'>
        <div style={{marginLeft:"60px"}}>
            <p>20% Off</p>
            <p>---------- SALE</p>
            <strong>Fruits & vegetables</strong>
            <p>Shop Collection</p>
        </div>
        <div>
            <img style={{marginLeft:"50px",marginTop:"20px"}} src="https://cdn-icons-png.flaticon.com/128/10621/10621420.png" height="250px" width="150px"/>
        </div>
        </div>
        
        <div className='container4'>
        <div style={{marginLeft:"60px"}}>
            <p>15% Off</p>
            <p>------- SALE</p>
            <strong>Baked Products</strong>
            <p>Shop Collection</p>
        </div>
        <div>
            <img src="https://cdn-icons-png.flaticon.com/128/17233/17233470.png"height="250px" width="150px"/>
        </div>
        </div>
    </div>
    </div>
    
    )

}
export default Banner1;