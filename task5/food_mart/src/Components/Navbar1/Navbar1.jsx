import './Navbar1.css'
function Navbar1(){
    return(
        <nav className='child1'>
                <img src="https://food-mart-template.vercel.app/images/logo.png"/>
                <div className='child2'>
                <select style={{border:"none",fontSize:"large"}}>
                    <option>All Categories</option>
                    <option>Groceries</option>
                    <option>Drinks</option>
                    <option>Chocolates</option>
                </select>
                <input  style={{width:"350px",fontSize:"large",border:"none"}}type="text" placeholder='Search For More Than 20000 products'/>
                </div>
                <div>
                <p style={{fontSize:"large"}}>For Support?</p>
                <strong style={{fontSize:"large"}}>+980-34984089</strong>
                </div>
                <div >
                <img style={{padding:"10px 16px"}} src="https://cdn-icons-png.flaticon.com/128/15339/15339256.png" height="30px" width="30px"/>
                <img style={{padding:"10px 16px"}} src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"height="30px" width="30px"/>
                </div>
                <div style={{fontSize:"larger"}}>
                    <p>Your Cart</p>
                    <strong>$1290.00</strong>
                </div>
               
        </nav>
    )
}
export default Navbar1;