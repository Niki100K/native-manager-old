import { useContext, useState, useEffect } from 'react';
import { Storage } from '../../Storage';
const TotalScreenJS = () => {
    const { orderStorage, setOrderStorage, setActiveOrders, setActiveOrdersInfo, orderAddNewItemsMode, orderAddNewItemIndex, activeOrders, setOrderAddNewItemsMode, setOrderAddNewItemIndex } = useContext(Storage);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [commend, setCommend] = useState('')
    const [confirmDeleteOrder, setConfirmDeleteOrder] = useState(false)
    const handleStorage = (method, index, quantity) => {
        setDeleteIndex(null);
        setOrderStorage(prev => {
            switch (method) {
                case 'add':
                    return prev.map((item, i) => i === index ? {...item, quantity: item.quantity + quantity} : item);
                case 'remove':
                    const newQuantity = prev[index].quantity - quantity;
                    if (newQuantity >= 1) {
                        return prev.map((item, i) => i === index ? {...item, quantity: newQuantity} : item);
                    } else {
                        if (deleteIndex === index) {
                            return prev.filter((item, i) => i !== index);
                        } else {
                            setDeleteIndex(index);
                            return prev;
                        }
                    }
                case 'delete':
                    if (deleteIndex === index) {
                        return prev.filter((item, i) => i !== index);
                    } else {
                        setDeleteIndex(index)
                        return prev;
                    }
                case 'clear':
                    if (confirmDeleteOrder) {
                        return []                        
                    } else {
                        setConfirmDeleteOrder(true)
                        setConfirmSetOrder(false)
                        return prev
                    }
                default:
                    return prev;
            }
        });
    };
    const [confirmSetOrder, setConfirmSetOrder] = useState(false)
    const handleSetOrder = () => {
        if (confirmSetOrder) {
            if (orderAddNewItemsMode) {
            const updatedActiveOrders = activeOrders.map((order, index) => {
                if (index === orderAddNewItemIndex) {
                    const combinedOrders = order.map(item => {
                        const matchingItem = orderStorage.find(storageItem => storageItem.name === item.name && storageItem.ml === item.ml);
                        if (matchingItem) {
                            return {...item, quantity: item.quantity + matchingItem.quantity};
                        }
                        return item;
                    });
                    orderStorage.forEach(storageItem => {
                        if (!combinedOrders.some(item => item.name === storageItem.name)) {
                            combinedOrders.push(storageItem);
                        }
                    });
                    return combinedOrders;
                }
                return order;
            });

            setActiveOrders(updatedActiveOrders);
            setOrderStorage([])
            setOrderAddNewItemsMode(false)
            setOrderAddNewItemIndex(null)
            } else {
                const time = new Date().toLocaleTimeString();
                const totalProducts = orderStorage.reduce((acc, obj) => acc + obj.quantity, 0)
                const totalPrice = orderStorage.reduce((acc, obj) => acc + (obj.quantity * obj.price), 0)
                setActiveOrdersInfo(prev => [...prev, ({time, totalProducts, totalPrice, commend})])
                setActiveOrders(prev => [...prev, orderStorage])
                setOrderStorage([])
            }
        } else {
            setConfirmSetOrder(true)
            setConfirmDeleteOrder(false)
        }
    }

    useEffect(() => {
        let items = 0;
        let price = 0;
        setConfirmDeleteOrder(false)
        setConfirmSetOrder(false)
        orderStorage.forEach(item => {
            items += item.quantity;
            price += item.quantity * item.price;
        });
        setTotalItems(items);
        setTotalPrice(price);
    }, [orderStorage]);

  return {
    totalItems,
    totalPrice,
    handleStorage,
    handleSetOrder,
    deleteIndex,
    commend, 
    setCommend,
    confirmDeleteOrder,
    confirmSetOrder
  }
}

export default TotalScreenJS
