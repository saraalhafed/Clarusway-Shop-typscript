import { SyncLoader } from 'react-spinners';
import Card from '../components/Card';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStateType } from '../store/store';
import { useEffect, useState } from 'react';
import { addFavorite, getProducts } from '../store/productSlice';
import { toast } from 'react-toastify';

const Home = () => {
  const [search, setSearch] = useState<string>('');//
  // const loading = false;
  // const error = false;

  const { loading, error, productList , favorites} = useSelector(
    (state: RootStateType) => state.products
  );

  const { darkMode } = useSelector((state: RootStateType) => state.ui);

  const dispatch = useDispatch<AppDispatch>();//give a type for dispatch ,according to the name in the reducer

  useEffect(() => {
    dispatch(getProducts(search));
  }, [search]);
  console.log(productList);


const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
};
const handleAddToFavorite = (product: Product) => {
  if (favorites.find((item) => item.id === product.id)) {
    toast.warning('Product already added to favorites!', {
      position: 'top-center',  // for darkmode
      theme: darkMode ? 'dark' : 'light',
    });
  } else {
    dispatch(addFavorite(product));
    toast.success('Product added to favorites!', {
      position: 'top-center',
      theme: darkMode ? 'dark' : 'light',
    });
  }
};
  return (
    <div className="container mx-auto pt-20 p-5">
     <Search  search={search}  handleSearch={handleSearch}/>
      {loading && (
        <div className="my-52 text-center">
          <SyncLoader color="red" />
        </div>
      )}
      {error && (
        <div className="mt-52">
          <p className="text-center text-red-600">Something Went wrong</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {productList.map((item) => (
         <Card
         key={item.id}
         product={item}
          // caption="ADD"
         handleClick={handleAddToFavorite}
       />
        ))}
      </div>
    </div>
  );
};

export default Home;
