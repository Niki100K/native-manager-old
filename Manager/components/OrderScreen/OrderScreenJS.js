import { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Storage } from '../../Storage'

const OrderScreenJS = ({ Orderid }) => {
  const navigation = useNavigation()
  const CorrectId = Orderid - 1;
  const { activeOrders, setActiveOrders, setActiveOrdersInfo, totalQuantityItems, setTotalQuantityItems, setTotalOrders, setTotalPriceOrders } = useContext(Storage)
  const [newQuantites, setNewQuantites] = useState({})
  const [confirmFinishOrder, setConfirmFinishOrder] = useState(false)
  const [confirmUpdate, setConfirmUpdate] = useState(false)

  const handleUpdateQuantity = (method, index, quantity) => {
    setConfirmFinishOrder(false)
    setNewQuantites(prev => {
      const updatedQuantities = { ...prev };

      switch (method) {
        case 'add':
          return {
            ...prev,
            [index]: (prev[index] || 0) + quantity
          };
        case 'remove': 
          if (prev[index]) {
            const updatedQuantity = (updatedQuantities[index] || 0) - quantity;
            if (updatedQuantity <= 0) {
              delete updatedQuantities[index];
            } else {
              updatedQuantities[index] = updatedQuantity;
            }
            return updatedQuantities;
          }
          return prev;
        case 'clear':
          if (prev[index]) {
            delete updatedQuantities[index]
            return updatedQuantities
          }
        default:
          return prev;
      }
    });
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [newTotalPrice, setNewTotalPrice] = useState(0)

  useEffect(() => {
    const calculatedNewTotalPrice = activeOrders[CorrectId].reduce((acc, item, index) => {
      if (newQuantites[index]) {
        return acc + (item.price * newQuantites[index]);
      } else {
        return acc;
      }
    }, 0);
    setNewTotalPrice(calculatedNewTotalPrice)

    const calculatedTotalPrice = activeOrders[CorrectId].reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0);
    setTotalPrice(calculatedTotalPrice);

    setConfirmUpdate(false)
    setConfirmFinishOrder(false)
  }, [newQuantites, activeOrders, CorrectId])
  
  const handleFinishUpdate = () => {
    if (confirmUpdate) {
      setActiveOrders(prevOrders => {
        const updatedOrders = prevOrders.map((order, index) => {
          if (index === CorrectId) {
            const updatedOrder = order.map((info, i) => {
              if (newQuantites[i]) {
                return {...info, quantity: info.quantity + newQuantites[i]}
              }
              return info;
            });
            const newTotalPrice = updatedOrder.reduce((acc, obj) => acc + (obj.price * obj.quantity), 0);
            const newTotalProducts = updatedOrder.reduce((acc, obj) => acc + obj.quantity, 0);
            setActiveOrdersInfo(prev => {
              return prev.map((item, indexItem) => {
                if (indexItem === CorrectId) {
                  return {...item, totalPrice: newTotalPrice, totalProducts: newTotalProducts.toFixed(2)};
                }
                return item;
              });
            });
            return updatedOrder;
          }
          return order;
        });
        return updatedOrders;
      });
      setNewQuantites({});
    } else {
      setConfirmUpdate(true)
    }
  };

  const finishOrder = (index) => {
    if (confirmFinishOrder) {
      setActiveOrders(prev => prev.filter((_, indexOrder) => indexOrder !== index))
      setActiveOrdersInfo(prev => prev.filter((_, indexOrder) => indexOrder !== index))
      let data = activeOrders[index]
      const newItems = data.map((item) => {
        const findIndex = totalQuantityItems.find(obj => item.name === obj.name && item.ml === obj.ml)
        if (findIndex) {
          return {...item, quantity: item.quantity + findIndex.quantity}
        } else {
          return item
        }
      })
      setTotalQuantityItems(prev => {
        const filteredItems = prev.filter(prevItem => !newItems.some(newItem => newItem.name === prevItem.name && newItem.ml === prevItem.ml));
        return [...filteredItems, ...newItems];
      });
      setTotalOrders(prev => prev + 1)
      setTotalPriceOrders(prev => [...prev, totalPrice])
      navigation.navigate('Home')
    } else {
      setConfirmFinishOrder(true)
    }
  }

  return {
    handleUpdateQuantity,
    newQuantites,
    newTotalPrice,
    totalPrice,
    handleFinishUpdate,
    finishOrder,
    confirmFinishOrder,
    confirmUpdate
  }
}

export default OrderScreenJS
