import React, { useContext, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../colors'
import { Storage } from '../../Storage'
const SettingsScreenJS = () => {

    const navigation = useNavigation()
    const { 
      setCorrectColors, 
      setOrderStorage, 
      setActiveOrders, 
      setActiveOrdersInfo, 
      setOrderAddNewItemsMode, 
      setOrderAddNewItemIndex, 
      setTotalQuantityItems, 
      orderStorage, 
      activeOrders, 
      activeOrdersInfo, 
      totalQuantityItems,
      setTotalOrders,
      setTotalPriceOrders
    } = useContext(Storage)
    const partsOfSettings = [
      {
        header: 'Styles:',
        description: 'Background, text, fonts'
      },
      {
        header: 'Stored Data:',
        description: 'Active, total orders and items'
      },
    ]
    const colorsStyles = [
      {
        name: 'Ethereal Twilight',
        dark: colors.dark[0],
        middle: colors.middle[0],
        light: colors.light[0],
        white: colors.white[0],
        number: 1,
      },
      {
        name: 'Aquatic Midnight Harmony',
        dark: colors.dark[1],
        middle: colors.middle[1],
        light: colors.light[1],
        white: colors.white[1],
        number: 2,
      },
      {
        name: 'Crimson Slate Serenity',
        dark: colors.dark[2],
        middle: colors.middle[2],
        light: colors.light[2],
        white: colors.white[2],
        number: 3,
      },
      {
        name: 'Slate Blue Tranquility',
        dark: colors.dark[3],
        middle: colors.middle[3],
        light: colors.light[3],
        white: colors.white[3],
        number: 4,
      },
    ];
    const [confirmDeleteAllData, setConfirmDeleteAllData] = useState(false);
    const handleClearAllData = () => {
      if (confirmDeleteAllData) {
        setOrderStorage([])
        setActiveOrders([])
        setActiveOrdersInfo([])
        setOrderAddNewItemsMode(false)
        setOrderAddNewItemIndex(null)
        setTotalQuantityItems([])
        setCorrectColors(1)
        setTotalOrders(0)
        setTotalPriceOrders([])
        navigation.navigate('Home')
      } else {
        setConfirmDeleteAllData(true)
      }
    };
    const [showParts, setShowParts] = useState(1);
  
    useEffect(() => {
      if (orderStorage.length > 0 || activeOrders.length > 0 || activeOrdersInfo.length > 0 || totalQuantityItems.length > 0) {
        setShowParts(2);
      } else {
        setShowParts(1);
      }
    }, [orderStorage, activeOrders, activeOrdersInfo, totalQuantityItems, showParts]);

  return {
    partsOfSettings,
    colorsStyles,
    confirmDeleteAllData,
    handleClearAllData,
    showParts
  }
}

export default SettingsScreenJS
