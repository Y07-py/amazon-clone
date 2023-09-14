'use client';

import { ProductProps } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from 'react-icons/fa'
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";
import Link from "next/link";

interface Props {
    productData: ProductProps[];
}

const Products = ({productData}: Props) => {
    const dispatch = useDispatch();
    return (
        <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {productData.map((item) => (
                <div key={item._id} className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
                    <div className="w-full h-[260px] relative">
                        <Link href={{ pathname: `/${item._id}`, query: {
                            _id: item._id,
                            brand: item.brand,
                            category: item.category,
                            description: item.description,
                            image: item.image,
                            isNew: item.isNew,
                            oldPrice: item.oldPrice,
                            price: item.price,
                            title: item.title
                        }}}>
                        <Image
                        className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                        src={item.image} alt="productImage" width={300} height={300}/>
                        </Link>
                        <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transparent duration-300">
                            <span
                            onClick={() => dispatch(addToCart({
                                _id: item._id,
                                brand: item.brand,
                                category: item.category,
                                image: item.image,
                                description: item.description,
                                isNew: item.isNew,
                                oldPrice: item.oldPrice,
                                price: item.price,
                                title: item.title,
                                quantity: 1,
                            }))}
                            className="w-full h-full border-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                                <HiShoppingCart />
                            </span>
                            <span
                            onClick={() => dispatch(addToFavorite({
                                _id: item._id,
                                brand: item.brand,
                                category: item.category,
                                image: item.image,
                                description: item.description,
                                isNew: item.isNew,
                                oldPrice: item.oldPrice,
                                price: item.price,
                                title: item.title,
                                quantity: 1,
                            }))}
                            className="w-full h-full border-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                                <FaHeart />
                            </span>
                        </div>
                        {
                            item.isNew && (
                            <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                                !save <FormattedPrice amount={item.oldPrice - item.price}/>
                            </p>
                        )}
                    </div>
                    <hr/>
                    <div className="px-4 py-3 flex flex-col gap-1">
                        <p className="text-xs text-gray-500 tracking-wide">
                            {item.category}
                        </p>
                        <p className="text-base font-medium">
                            {item.title}
                        </p>
                        <p>
                            <span className="text-sm line-through">
                                <FormattedPrice amount={item.oldPrice} />
                            </span>
                            <span className="text-amazon_blue font-semibold">
                                <FormattedPrice amount={item.price} />
                            </span>
                        </p>
                        <p className="text-xs text-gray-600 text-justify">
                                {item.description.substring(0, 120)}
                        </p>
                        <button onClick={() => dispatch(addToCart({
                                _id: item._id,
                                brand: item.brand,
                                category: item.category,
                                image: item.image,
                                description: item.description,
                                isNew: item.isNew,
                                oldPrice: item.oldPrice,
                                price: item.price,
                                title: item.title,
                                quantity: 1,
                            })
                            )
                        } 
                        className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2">
                                add to cart
                        </button>
                    </div>
                </div>
                )
            )}
        </div>
    )
}

export default Products;