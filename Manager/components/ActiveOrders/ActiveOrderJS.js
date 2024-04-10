import { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Storage } from '../../Storage'
const ActiveOrderJS = () => {
  const navigation = useNavigation()
  const { setActiveOrders, setActiveOrdersInfo, setOrderAddNewItemsMode, setOrderAddNewItemIndex } = useContext(Storage)
  const [deleteIndex, setDeleteIndex] = useState(null)

  const deleteOrder = (index) => {
    if (deleteIndex === index) {
      setActiveOrders(prev => prev.filter((_, indexOrder) => indexOrder !== index))
      setActiveOrdersInfo(prev => prev.filter((_, indexOrder) => indexOrder !== index))
      setDeleteIndex(null)
      setOrderAddNewItemsMode(false)
      setOrderAddNewItemIndex(null)
    } else {
      setDeleteIndex(index)
    }
  }

  const handleOrderModeActivate = (index) => {
    setOrderAddNewItemsMode(true)
    setOrderAddNewItemIndex(index)
    navigation.navigate('Home')
  }
  const handleDeactivate = () => {
    setOrderAddNewItemsMode(false)
    setOrderAddNewItemIndex(null)
  }
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false)
  const deleteAll = () => {
    if (confirmDeleteAll) {
      setOrderAddNewItemsMode(false)
      setOrderAddNewItemIndex(null)
      setActiveOrders([])
      setActiveOrdersInfo([])
    } else {
      setConfirmDeleteAll(true)
    }
  }

  return {
    deleteOrder,
    deleteIndex,
    handleOrderModeActivate,
    handleDeactivate,
    deleteAll,
    confirmDeleteAll
  }
}

export default ActiveOrderJS
