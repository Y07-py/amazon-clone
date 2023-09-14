import { StoreProduct } from "../../type";

interface Props {
    item: StoreProduct;
}

const SearchProducts = ({item}: Props) => {
    return (
        <div className="flex items-center gap-4">
             <img className='w-24' src={item.image} alt='products image'/>
            <div>
                <p className="text-xs -mb-1">
                {item.brand}_{item.category}
                </p>
                <p className="text-lg font-medium">
                    {item.title}
                </p>
                <p className="text-xs">
                    {item.description.substring(0, 120)}
                </p>
            </div>
        </div>
    );
}

export default SearchProducts;