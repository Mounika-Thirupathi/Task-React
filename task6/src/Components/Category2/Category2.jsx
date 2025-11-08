import './Category2.css'
function category2(){
    return (
    <div className='parents'>
        <div className='sample1'>
            <img className='sample2' src="https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png"/>
            <br/>
            <strong className='sample3' >Fruits & Veges</strong>
        </div>
        <div className='sample1'>
            <img className='sample2' src="https://food-mart-template.vercel.app/images/icon-bread-baguette.png"/>
            <br/>
            <strong className='sample3'>Breads & Sweets</strong>
        </div>
         <div className='sample1'>
            <img  className='sample2' src="https://food-mart-template.vercel.app/images/icon-soft-drinks-bottle.png"/>
            <br/>
            <strong className='sample3'>Soft drinks</strong>
        </div>

        <div className='sample1'>
            <img className='sample2' src="https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png"/>
            <br/>
            <strong className='sample3'>Non Veg Food</strong>
        </div>

        <div className='sample1'>
            <img className='sample2' src="https://food-mart-template.vercel.app/images/icon-bread-herb-flour.png"/>
            <br/>
            <strong style={{marginLeft:"80px"}}>Herbals</strong>
        </div>
        


    </div>
    )

}
export default category2;
