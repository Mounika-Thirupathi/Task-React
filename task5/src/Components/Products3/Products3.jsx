
import './Products3.css'
function Products3(){
    const data=[
        {
            "para1":"Upto 25% Off",
            "para2":"Luxa Dark Chocolate",
            "para3":"Very tasty & creamy vanilla flavour creamy muffins.",
            "para4":"SHOP NOW",
            "image":"https://food-mart-template.vercel.app/images/ad-image-3.png",
            "color":"#F9EBE7"


        },
        {
            "para1":"Upto 25% Off",
            "para2":"Luxa Dark Chocolate",
            "para3":"Very tasty & creamy vanilla flavour creamy muffins.",
            "para4":"SHOP NOW",
            "image":"https://food-mart-template.vercel.app/images/ad-image-4.png",
            "color":"#EEF5E5"


        }
        


    ]
    return(
        <div className="select1">
            {data.map((value,index)=> 
            <div className="select2" key={index} style={{backgroundColor:value.color}}> 
                <div>
                <p style={{color:"orange"}}>{value.para1}</p> 
                <strong>{value.para2}</strong> 
                <p>{value.para3}</p> 
                <button style={{backgroundColor:"black",color:"white",padding:"10px 20px"}}>{value.para4}</button>
                </div> 
                <img  src={value.image}/> 
                
            </div>)}
        </div>
    )
}
export default Products3;