import React, { createContext, useEffect, useState } from 'react'
import CategoriesJS from './components/CategoryScreen/CategoriesJS'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const Storage = createContext()
export const StorageProvider = ({ children }) => {
    const [orderStorage, setOrderStorage] = useState([])
    const [activeOrders, setActiveOrders] = useState([])
    const [activeOrdersInfo, setActiveOrdersInfo] = useState([])
    const [orderAddNewItemsMode, setOrderAddNewItemsMode] = useState(false)
    const [orderAddNewItemIndex, setOrderAddNewItemIndex] = useState(null)
    const [totalQuantityItems, setTotalQuantityItems] = useState([])
    const [totalPriceOrders, setTotalPriceOrders] = useState([])
    const [correctColors, setCorrectColors] = useState(1)
    const [totalOrders, setTotalOrders] = useState(0)
    const { products } = CategoriesJS()
    const handleStorage = (method, category, index, quantity) => {
        let filter = products.filter(obj => obj.category === category)[index];
        if (filter) {
            filter = { ...filter, quantity: quantity };
            let checkItem = orderStorage.findIndex(obj => obj.category === filter.category && obj.ml === filter.ml && obj.name === filter.name);
    
            setOrderStorage(prev => {
                switch (method) {
                    case 'add':
                        if (checkItem === -1) {
                            return [...prev, filter];
                        } else {
                            return prev.map((item, i) => i === checkItem ? {...item, quantity: item.quantity + quantity} : item);
                        }
                    case 'remove':
                        if (checkItem === -1) {
                            return prev;
                        } else {
                            const newQuantity = prev[checkItem].quantity - quantity;
                            if (newQuantity >= 1) {
                                return prev.map((item, i) => i === checkItem ? {...item, quantity: newQuantity} : item);
                            } else {
                                return prev.filter((item, i) => i !== checkItem);
                            }
                        }
                    case 'delete':
                        if (checkItem === -1) {
                            return prev
                        } else {
                            return prev.filter((item, i) => i !== checkItem);
                        }
                    default:
                        return prev;
                }
            });
    
        } else {
            console.log('Item Not Found!');
        }
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const OrderStorage = await AsyncStorage.getItem('OrderStorage')
                const ActiveOrdersStorage = await AsyncStorage.getItem('ActiveOrdersStorage')
                const ActiveOrdersInfoStorage = await AsyncStorage.getItem('ActiveOrdersInfoStorage')
                const TotalQuantityItemsStorage = await AsyncStorage.getItem('totalQuantityItems')
                const colorsNumber = await AsyncStorage.getItem('colorsNumber')
                const totalOrdersNumber = await AsyncStorage.getItem('totalOrdersNumber')
                const totalPriceOrdersStorage = await AsyncStorage.getItem('totalPriceOrders')
                setOrderStorage(OrderStorage ? JSON.parse(OrderStorage) : [])
                setActiveOrders(ActiveOrdersStorage ? JSON.parse(ActiveOrdersStorage) : [])
                setActiveOrdersInfo(ActiveOrdersInfoStorage ? JSON.parse(ActiveOrdersInfoStorage) : [])
                setTotalQuantityItems(TotalQuantityItemsStorage ? JSON.parse(TotalQuantityItemsStorage) : [])
                setTotalPriceOrders(totalPriceOrdersStorage ? JSON.parse(totalPriceOrdersStorage) : [])
                setCorrectColors(colorsNumber ? JSON.parse(colorsNumber) : 1)
                setTotalOrders(totalOrdersNumber ? JSON.parse(totalOrdersNumber) : 0)
            } catch (error) {
                console.error(error);
            }
        }
        getData()
        return () => {}
    }, [])
    useEffect(() => {
        const updateData = async () => {
            try {
                await AsyncStorage.setItem('OrderStorage', JSON.stringify(orderStorage))
                await AsyncStorage.setItem('ActiveOrdersStorage', JSON.stringify(activeOrders))
                await AsyncStorage.setItem('ActiveOrdersInfoStorage', JSON.stringify(activeOrdersInfo))
                await AsyncStorage.setItem('colorsNumber', JSON.stringify(correctColors))
                await AsyncStorage.setItem('totalQuantityItems', JSON.stringify(totalQuantityItems))
                await AsyncStorage.setItem('totalOrdersNumber', JSON.stringify(totalOrders))
                await AsyncStorage.setItem('totalPriceOrders', JSON.stringify(totalPriceOrders))
            } catch (error) {
                console.error(error);
            }
        }
        updateData()
        return () => {}
    }, [orderStorage, activeOrders, activeOrdersInfo, correctColors, totalQuantityItems, totalOrders, totalPriceOrders])

    return (
        <Storage.Provider value={{ 
            orderStorage, 
            setOrderStorage, 
            
            activeOrders, 
            setActiveOrders, 

            activeOrdersInfo, 
            setActiveOrdersInfo, 

            orderAddNewItemsMode, 
            setOrderAddNewItemsMode, 
            
            orderAddNewItemIndex, 
            setOrderAddNewItemIndex, 
            
            correctColors, 
            setCorrectColors,
            
            totalQuantityItems, 
            setTotalQuantityItems,

            totalOrders,
            setTotalOrders,

            totalPriceOrders, 
            setTotalPriceOrders,

            handleStorage, 
        }}>
            { children }
        </Storage.Provider>
    )
}
