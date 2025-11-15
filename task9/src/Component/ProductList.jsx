import ProductCard from "./ProductCard";
import Product from "./Product.json";

const ProductList = () => {
    return (
        <div style={{ display: "flex" }}>
            {Product.map((item) => (
                <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                />
            ))}
        </div>
    );
};

export default ProductList;
