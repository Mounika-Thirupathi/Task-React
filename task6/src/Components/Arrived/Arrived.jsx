import './Arrived.css'
function Arrived() {
    const details = [
        {
            "image1": "https://food-mart-template.vercel.app/images/thumb-tomatoes.png",
            "para1": "Sunstar Fresh Melon Juice",
            "para2": "1 UNIT ",
            "image2": "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
            "para3": "4.5",
            "para4": "$18.00",
            "para5": "-",
            "para6": "1",
            "para7": "+",
            "para8": "Add to Cart"


        },

        {
            "image1": "https://food-mart-template.vercel.app/images/thumb-tomatoketchup.png",
            "para1": "Sunstar Fresh Melon Juice",
            "para2": "1 UNIT ",
            "image2": "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
            "para3": "4.5",
            "para4": "$18.00",
            "para5": "-",
            "para6": "1",
            "para7": "+",
            "para8": "Add to Cart"


        },
        {
            "image1": "https://food-mart-template.vercel.app/images/thumb-bananas.png",
            "para1": "Sunstar Fresh Melon Juice",
            "para2": "1 UNIT ",
            "image2": "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
            "para3": "4.5",
            "para4": "$18.00",
            "para5": "-",
            "para6": "1",
            "para7": "+",
            "para8": "Add to Cart"


        },
        {
            "image1": "https://food-mart-template.vercel.app/images/thumb-tomatoketchup.png",
            "para1": "Sunstar Fresh Melon Juice",
            "para2": "1 UNIT ",
            "image2": "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
            "para3": "4.5",
            "para4": "$18.00",
            "para5": "-",
            "para6": "1",
            "para7": "+",
            "para8": "Add to Cart"


        },
        {
            "image1": "https://food-mart-template.vercel.app/images/thumb-bananas.png",
            "para1": "Sunstar Fresh Melon Juice",
            "para2": "1 UNIT ",
            "image2": "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
            "para3": "4.5",
            "para4": "$18.00",
            "para5": "-",
            "para6": "1",
            "para7": "+",
            "para8": "Add to Cart"


        }
    ]
    return (
        <div>
            
        <div style={{fontSize:"x-large",display:"flex",justifyContent:"space-between"}}>
            <strong style={{marginTop:"10px",marginLeft:"30px"}}>Just arrived</strong>
            <p>View All Categories →</p>

        </div>
        <div className="select3" style={{marginTop:"50px"}}>
            {details.map((value, index) =>
                <div className="select4">
                    <div style={{height:"190px",width:"200px",border:"none",marginTop:"10px",borderRadius:"20px",margin:"10px"}}>
                    <img style={{backgroundColor:"#E9E9E9",borderRadius:"10px"}} src={value.image1} height="200px" width="200px" />
                    </div>
                    <strong  >{value.para1}</strong>

                    <div style={{display:"flex",gap:"10px",fontSize:"medium",padding:"5px 1px"}}>
                    <span>{value.para2}</span>
                    <img style={{height:"10px",width:"10px"}}src={value.image2} />
                    <strong>{value.para3}</strong>
                    </div>
                    <strong style={{fontSize:"larger"}}>{value.para4}</strong>
                    
                    <div style={{display:"flex",padding:"10px"}}>
                    <button style={{width:"20px", height:"20px",margin:"5px"}}>{value.para5}</button>
                    <p style={{marginTop:"3px",margin:"5px"}}>{value.para6}</p>
                    <button style={{width:"20px", height:"20px",margin:"5px"}} >{value.para7}</button>
                    <span style={{marginLeft:"30px"}}>{value.para8}</span> 
                    </div>    
                </div>




            )}

        </div>
        </div>

    )
}
export default Arrived;