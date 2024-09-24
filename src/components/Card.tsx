import { Link } from 'react-router-dom';
import Rating from './Rating';

type CardProps = {
  product: Product;
  caption?: string;
  handleClick: (product: Product) => void;
};
export default function Card({
  product,
  caption = 'ADD',//deaultvalue ,after make captin optinal?, 
  handleClick,
}: CardProps) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <Link to="#" className="flex flex-row justify-around">
        <img
          className="p-8 rounded-t-lg h-[300px]"
          src={product?.images[0]}  //? somtimes undefind
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product?.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating rating={product?.rating}/>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product?.price}
          </span>
          <button
            onClick={() => handleClick(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {caption}
          </button>
        </div>
      </div>
    </div>
  );
}
