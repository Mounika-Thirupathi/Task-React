const ProductCard = ({ title, price, description, image }) => {
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "200px" }}>
            <img src={image} alt={title} width="200" />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>₹{price}</h3>
        </div>
    );
};

export default ProductCard;
