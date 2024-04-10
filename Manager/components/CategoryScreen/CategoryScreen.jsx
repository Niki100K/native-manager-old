import React, { useContext, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'
import { commonStyles } from '../../commonStyles'

import CategoriesJS from './CategoriesJS'
export default function CategoryScreen({ route }) {
  const { category } = route.params
  const { products } = CategoriesJS()
  const { handleStorage, orderStorage, orderAddNewItemsMode, setOrderAddNewItemsMode, setOrderAddNewItemIndex, correctColors } = useContext(Storage)
  const navigation = useNavigation()
  let totalProducts = 0;
  orderStorage.forEach(item => {
    totalProducts += item.quantity;
  });
  const [deactivate, setDeactivate] = useState(false)
  const handleDeactivateMode = () => {
    if (deactivate) {
      setOrderAddNewItemsMode(false)
      setOrderAddNewItemIndex(null)
    } else {
      setDeactivate(true)
    }
  }
  const colorNumber = correctColors - 1

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView>
        <View style={[commonStyles.container, {marginBottom: 64}]}>
          {products.filter(obj => obj.category === category).map((product, index) => (
            <View style={commonStyles.card} key={index}>
              <TouchableOpacity onPress={() => handleStorage('add', category, index, 1)} style={commonStyles.imgCon}>
                <Image source={product.img} style={{width: '100%', height: '100%'}} />
                {orderStorage.findIndex(item => item.name === product.name && item.ml === product.ml) !== -1 && (
                  <Text style={[styles.quantity, {backgroundColor: colors.light[colorNumber], color: colors.dark[colorNumber]}]}>
                    {orderStorage.find(item => item.name === product.name && item.ml === product.ml).quantity}
                  </Text>
                )}
                <Text style={[styles.ml, {backgroundColor: colors.light[colorNumber], color: colors.dark[colorNumber]}]}>{product.ml}</Text>
              </TouchableOpacity>
              <Text style={[commonStyles.name, {borderRadius: 4, color: colors.white[colorNumber]}]}>{product.name}</Text>
              {orderStorage.findIndex(item => item.name === product.name && item.ml === product.ml) !== -1 &&
                <View style={styles.btnContainer}>
                  <TouchableOpacity onPress={() => handleStorage('remove', category, index, 1)} style={[styles.btn, {backgroundColor: colors.light[colorNumber]}]}>
                    <Text style={[styles.btnText, {color: colors.buttonColor[colorNumber]}]}>-1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleStorage('add', category, index, 5)} style={[styles.btn, {backgroundColor: colors.light[colorNumber]}]}>
                    <Text style={[styles.btnText, {color: colors.buttonColor[colorNumber]}]}>+5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleStorage('delete', category, index)} style={[styles.btn, {backgroundColor: colors.red, width: '50%'}]}>
                    <Text style={[styles.btnText, {color: colors.buttonColor[colorNumber]}]}>Clear</Text>
                  </TouchableOpacity>
                </View>
              }
            </View>
          ))}
        </View>
      </ScrollView>
      {orderStorage.length > 0 &&
        <Pressable onPress={() => navigation.navigate('Total')} style={[commonStyles.totalCircle, {backgroundColor: colors.middle[colorNumber]}]}>
          <Text style={{color: colors.white[colorNumber], fontSize: 28}}>{totalProducts}</Text>
        </Pressable>
      }
      {orderAddNewItemsMode &&
        <Pressable onPress={handleDeactivateMode} style={[styles.mode, { backgroundColor: deactivate ? colors.red : colors.white[colorNumber]}]}>
          <Text style={{color: colors.dark[colorNumber]}}>{deactivate ? 'Confirm Deactivation' : 'Mode Activated'}</Text>
        </Pressable>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  quantity: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 16,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 24,
    borderRadius: 8,
    zIndex: 2,
  },
  ml: {
    position: "absolute",
    bottom: 0,
    left: 0,
    margin: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 16,
    borderRadius: 8,
    zIndex: 2,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 8,
  },
  btn: {
    width: '22%',
    padding: 4,
    borderRadius: 8,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
  },
  mode: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})