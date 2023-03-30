import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
//instead of connect

import { productList } from '../redux/productAction';

import { useEffect } from 'react';


function Main() {
  const data = useSelector((state) => state.productData)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(productList());
  },[dispatch])

  return (
    <>
      <div className="container">
      
        <div className="product_container">
          {
            data.map((item) => {
              return (
                <div className="product_item" key={item.id}>
                  <img src={item.img} alt="item" />
                  <div>Name : {item.name}</div>
                  <div>Color : {item.color}</div>
                  <div>Price : {item.price}</div>
                  <div className="product_buttons">
                    {/* item.id passed as prevdata in reducer  */}
                  </div>
                </div>                
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Main;
