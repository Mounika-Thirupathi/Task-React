import './Trending.css'
function Trending(){
    return (
    <div className="first">
        <div>
            <strong style={{fontSize:"x-large"}}>Trending Products</strong>
        </div>
        <div style={{display:"flex",fontSize:"larger",gap:"30px"}}>
            <p>ALL</p>
            <p>FRUITS&VEGES</p>
            <p>JUICES</p>
        </div>
    </div>
    )
}
export default Trending;