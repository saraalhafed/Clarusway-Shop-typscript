import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { AppDispatch, RootStateType } from '../store/store';
import { deleteFavorite } from '../store/productSlice';
import { toast } from 'react-toastify';

const Favorite = () => {
  // const favorites = [];
  const { favorites } = useSelector((state: RootStateType) => state.products);
  const { darkMode } = useSelector((state: RootStateType) => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFavorite = (product: Product) => {
    dispatch(deleteFavorite(product.id));
    toast.success('Product removed from favorites!', {
      position: 'top-center',
      theme: darkMode ? 'dark' : 'light',
    });
  };
  return (
    <div className="container mx-auto pt-20 p-5">
      <h1 className="font-bold text-2xl dark:text-white text-center m-3 text-slate-800">
        My Favorites Products
      </h1>

      <div
        className="grid gap-4 sm:grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4
      "
      >
        {favorites.map((item) => (
          <Card
            key={item.id}
            product={item}
            caption="REMOVE"
            handleClick={handleRemoveFavorite}
          />
        ))}

        {favorites.length === 0 && (
          <h3 className="font-bold text-center text-2xl mt-52 text-red-500">
            No Favorites ...
          </h3>
        )}
      </div>
    </div>
  );
};

export default Favorite;
