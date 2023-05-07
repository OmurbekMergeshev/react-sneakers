
import { useEffect, useState } from "react";
import Card from "./components/Card/CardPage";
import Drawer from "./components/Drawer";
import Header from "./components/Header";




function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

 useEffect(() => {
  fetch('https://645691f65f9a4f2361478289.mockapi.io/items')
  .then((res) => {
    return res.json()
  }).then((json) => {
    setItems(json);
  })

 }, [])

 const onAddCart = (obj) => {
  setCartItems((prev) => [...prev, obj]);
 }
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems}
          onClose={() => setCartOpened(false)}
         />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/123.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card 
              title={item.title}
              price={item.price} 
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddCart(item)}
               />
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;
