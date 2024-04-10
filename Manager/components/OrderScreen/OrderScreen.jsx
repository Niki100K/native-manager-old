import React, { useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'
import { commonStyles } from '../../commonStyles'

import OrderScreenJS from './OrderScreenJS'
export default function OrderScreen({ route }) {
  const { Orderid } = route.params
  const { activeOrders, activeOrdersInfo, correctColors } = useContext(Storage)
  const { handleUpdateQuantity, newQuantites, newTotalPrice, totalPrice, handleFinishUpdate, finishOrder, confirmFinishOrder, confirmUpdate } = OrderScreenJS({ Orderid })
  const colorNumber = correctColors - 1

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 8}}>
        {activeOrders[Orderid - 1].map((info, index) => (
          <View style={styles.card} key={index}>
            <TouchableOpacity onPress={() => handleUpdateQuantity('add', index, 1)} style={[commonStyles.imgCon, {width: '25%'}]}>
              <Image source={info.img} style={commonStyles.img}/>
            </TouchableOpacity>
            <View style={{width: '75%'}}>
            <View style={styles.spaceBetween}>
                <Text style={{maxWidth: '80%', fontSize: 20, color: colors.white[colorNumber]}}>{info.name}</Text>
                <Text style={{color: colors.light[colorNumber]}}>{info.ml}</Text>
              </View>
              <View style={styles.spaceBetween}>
                <Text style={{fontSize: 16, color: colors.white[colorNumber]}}>Quantity: <Text style={{color: colors.light[colorNumber]}}>{info.quantity}</Text></Text>
                {newQuantites[index] &&
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, color: colors.white[colorNumber], marginRight: 8}}>+{newQuantites[index]}</Text>
                    <Text style={{fontSize: 16, color: colors.light[colorNumber], opacity: .8}}>+{(newQuantites[index] * info.price).toFixed(2)}$</Text>
                  </View>
                }
              </View>
              {newQuantites[index] && 
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <TouchableOpacity onPress={() => handleUpdateQuantity('clear', index)} style={[styles.button, {backgroundColor: colors.light[colorNumber]}]}>
                      <Text style={{fontSize: 16, color: colors.buttonColor[colorNumber]}}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleUpdateQuantity('remove', index, 1)} style={[styles.button, {backgroundColor: colors.light[colorNumber]}]}>
                      <Text style={{fontSize: 16, color: colors.buttonColor[colorNumber]}}>-1</Text>
                    </TouchableOpacity>
                </View>
              }
            </View>
          </View>
        ))}
      </View>
      {activeOrdersInfo[Orderid - 1]?.commend.length > 0 &&
        <View style={{padding: 8}}>
          <Text style={{color: colors.white[colorNumber], fontSize: 18}}>Commends:</Text>
          <Text style={{color: colors.light[colorNumber]}}>{activeOrdersInfo[Orderid - 1]?.commend}</Text>
        </View>
      }
      <View style={{padding: 8, marginBottom: 32}}>
        <View style={styles.spaceBetween}>
          <Text style={{fontSize: 20, color: colors.white[colorNumber]}}>Total: <Text style={{color: colors.light[colorNumber]}}>${totalPrice.toFixed(2)}</Text></Text>
          {Object.keys(newQuantites).length > 0 &&
            <Text onPress={handleFinishUpdate} style={[styles.update, {backgroundColor: confirmUpdate ? colors.green : colors.light[colorNumber], color: colors.buttonColor[colorNumber]}]}>{confirmUpdate ? 'Confirm' : 'Update'}</Text>
          }
        </View>
        {newTotalPrice > 0 && 
          <View style={styles.spaceBetween}>
            <Text style={{fontSize: 20, color: colors.white[colorNumber]}}>New Total: <Text style={{color: colors.red}}>${(totalPrice + newTotalPrice).toFixed(2)}</Text></Text>
          </View>
        }
        {Object.keys(newQuantites).length <= 0 &&
          <Text onPress={() => finishOrder(Orderid - 1)} style={[styles.finish, {backgroundColor: confirmFinishOrder ? colors.green : colors.light[colorNumber], color: colors.buttonColor[colorNumber]}]}>{confirmFinishOrder ? 'Confirm' : 'Finish'}</Text>
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  spaceBetween: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    margin: 4,
    borderRadius: 4,
  },
  update: {
    paddingVertical: 4, 
    paddingHorizontal: 16, 
    borderRadius: 8, 
    fontSize: 16, 
    marginHorizontal: 4,
  },
  finish: {
    paddingVertical: 4, 
    textAlign: 'center', 
    fontSize: 24,
    marginVertical: 8,
    borderRadius: 4,
    letterSpacing: 2,
  }
})