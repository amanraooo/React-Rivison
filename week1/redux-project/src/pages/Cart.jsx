import { useSelector } from 'react-redux';
import CartItem from './../components/CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart} = useSelector((state)=>state);
  return (
  <div>
    {
      cart.length > 0 ?
      (
        <div>
          <div>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
        </div>
      ):
      (
        <div>
          <h1>Cart empty</h1>
          <Link to="/">
          <button>Shop Now</button>
          </Link>
        </div>
      )
    }
    </div>
    );
};

export default Cart;
