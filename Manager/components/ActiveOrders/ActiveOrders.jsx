import React, { useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'

import manRelax from '../../assets/3d/man-relax.png'

import ActiveOrderJS from './ActiveOrderJS'
import { commonStyles } from '../../commonStyles'
export default function ActiveOrders() {
  const navigation = useNavigation()
  const { activeOrdersInfo, orderAddNewItemIndex, correctColors } = useContext(Storage)
  const { deleteOrder, deleteIndex, handleOrderModeActivate, handleDeactivate, deleteAll, confirmDeleteAll } = ActiveOrderJS()
  let total = activeOrdersInfo.reduce((acc, obj) => acc + obj.totalPrice, 0)
  const colorNumber = correctColors - 1
  return (
    <ScrollView style={{flex: 1}}>
      {activeOrdersInfo.length > 0 ? (
        <View style={{padding: 8}}>
          {activeOrdersInfo.map((info, indexOrder) => (
            <View style={styles.card} key={indexOrder}>
              <View style={styles.spaceBetween}>
                <Text style={{fontSize: 20, color: colors.white[colorNumber]}}>Order: <Text style={{color: colors.light[colorNumber]}}>{indexOrder + 1}</Text></Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  {orderAddNewItemIndex !== indexOrder &&
                    <TouchableOpacity onPress={() => handleOrderModeActivate(indexOrder)} style={styles.buttons}>
                      <Text style={{color: colors.white[colorNumber]}}>Add</Text>
                    </TouchableOpacity>
                  }
                  <TouchableOpacity onPress={() => deleteOrder(indexOrder)} style={[styles.buttons, {backgroundColor: deleteIndex === indexOrder ? colors.red : colors.light[colorNumber]}]}>
                    <Text style={{color: colors.dark[colorNumber]}}>{deleteIndex === indexOrder ? 'Confirm' : 'Delete'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('OrderScreen', {Orderid: indexOrder + 1})} style={styles.buttons}>
                    <Text style={{color: colors.white[colorNumber]}}>Manage</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={styles.spaceBetween}>
                  <Text style={{fontSize: 16, color: colors.white[colorNumber]}}>Total: <Text style={{color: colors.light[colorNumber]}}>{info.totalPrice.toFixed(2)}$</Text></Text>
                  <Text style={{fontSize: 16, color: colors.white[colorNumber]}}>{info.time}</Text>
                </View>
                <View style={styles.spaceBetween}>
                  <Text style={{fontSize: 16, color: colors.white[colorNumber]}}>Products: <Text style={{color: colors.light[colorNumber]}}>{parseInt(info.totalProducts)}</Text></Text>
                  {orderAddNewItemIndex === indexOrder &&
                    <TouchableOpacity onPress={handleDeactivate} style={[styles.buttons, {backgroundColor: colors.light[colorNumber]}]}>
                      <Text style={{color: colors.white[colorNumber]}}>Deactivate</Text>
                    </TouchableOpacity>
                  }
                </View>
              </View>
            </View>
          ))}
          <View style={[styles.spaceBetween, {borderTopColor: colors.white[colorNumber], borderTopWidth: 2}]}>
            <Text style={{fontSize: 24, color: colors.white[colorNumber]}}>Total: <Text style={{color: colors.light[colorNumber]}}>{total.toFixed(2)}$</Text></Text>
            <TouchableOpacity onPress={deleteAll}>
              <Text style={[styles.buttons, {backgroundColor: confirmDeleteAll ? colors.red : colors.light[colorNumber], color: confirmDeleteAll ? colors.white[colorNumber] : colors.dark[colorNumber]}]}>{confirmDeleteAll ? 'Confirm' : 'Delete All'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{marginTop: 32}}>
          <Text style={[styles.text, {color: colors.white[colorNumber]}]}>Cool you don't have any orders!</Text>
          <Text style={[styles.text, {color: colors.white[colorNumber]}]}>It's time for relax</Text>
          <View style={commonStyles.imgCon}>
            <Image source={manRelax} style={commonStyles.img} />
          </View>
          <View style={[styles.spaceBetween, {padding: 8}]}>
            <Text style={{color: colors.white[colorNumber], fontSize: 24,}}>Press Here:</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Little Surprice')} style={[styles.surprice, {backgroundColor: colors.light[colorNumber]}]}>
              <Text style={{fontSize: 16, color: colors.buttonColor[colorNumber]}}>Surprice</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  buttons: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
  surprice: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  }
})