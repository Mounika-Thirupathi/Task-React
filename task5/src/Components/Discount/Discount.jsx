import './Discount.css'
function Discount() {
  return (
    <div className="container">
      <div style={{padding:"40px 80px"}}>
        <b style={{fontSize:"xx-large"}}>
          Get <span style={{ color: "#F4D883" }}>25% Discount</span> on your first purchase
        </b>
        <p style={{fontSize:"large"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
        </p>
      </div>

      <div style={{padding:"40px 130px"}}>
        <form>
          <label>Name</label>
          <br />
          <input type="text" placeholder="Name" style={{padding:"10px 150px",margin:"5px",borderRadius:"10px",fontsize:"large"}} />
          <br />
          <label>Email</label>
          <br />
          <input type="email" placeholder="abc@gmail.com" style={{padding:"10px 150px",margin:"5px",borderRadius:"10px",fontsize:"large"}}/>
          <br />
          <label >
            <input type="checkbox"  style={{margin:"5px",fontsize:"large"}} /> Subscribe to the newsletter
          </label>
          <br />
          <button type="submit" style={{padding:"10px 220px",borderRadius:"10px",backgroundColor:"black",color:"white",fontsize:"large"}}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Discount;
