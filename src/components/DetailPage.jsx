import { useParams } from 'react-router-dom';

function DetailPage({ products }) {
    const params = useParams();
    return (
        <>
            {products
                .filter((_, i) => i === +params.productId - 1)
                .map((product, i) => (
                    <div>
                        <p>{product.name}</p>
                        <p>{product.text}</p>
                    </div>
                ))}
        </>
    );
}

export default DetailPage;