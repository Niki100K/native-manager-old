import React, { useContext } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'

import SettingsScreenJS from './SettingsScreenJS'
export default function SettingsScreen() {
  const {
    partsOfSettings,
    colorsStyles,
    confirmDeleteAllData,
    handleClearAllData,
    showParts
  } = SettingsScreenJS()
  const { 
    correctColors, 
    setCorrectColors, 
    orderStorage, 
    activeOrders, 
    activeOrdersInfo, 
    totalQuantityItems,
  } = useContext(Storage)
  const colorNumber = correctColors - 1

  return (
    <ScrollView style={{flex: 1, padding: 8}}>
      {partsOfSettings.slice(0, showParts).map((info, index) => (
        <View style={{marginVertical: 16}} key={index}>
          <Text style={{fontSize: 24, color: colors.light[colorNumber]}}>{info.header}</Text>
          <Text style={{color: colors.text}}>{info.description}</Text>
          {index === 0 ? (
            <ScrollView horizontal={true} style={{flexDirection: 'row',}}>
              {colorsStyles.map((colorData, indexColors) => (
                <View style={[styles.cardColors, {borderColor: colorData.light, backgroundColor: colorData.dark, opacity: correctColors === colorData.number ? 1 : .5}]} key={indexColors}>
                  <Text style={{color: colorData.white, fontSize: 16}}>{colorData.name}</Text>
                  <Text style={{color: colorData.middle}}>Description...</Text>
                  <TouchableOpacity onPress={() => setCorrectColors(parseInt(colorData.number))} style={{marginVertical: 4, backgroundColor: colorData.light, padding: 8, borderRadius: 4,}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color: colorData.middle}}>Button</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          ) : (
            <View>
              {(orderStorage.length > 0 || activeOrders.length > 0 || activeOrdersInfo.length > 0 || totalQuantityItems.length > 0) ? (
                <TouchableOpacity onPress={handleClearAllData} style={{position: 'relative', marginVertical: 8, padding: 8, borderRadius: 4, backgroundColor: colors.middle[colorNumber]}}>
                  <Text style={{textAlign: 'center', fontSize: 20, color: colors.dark[colorNumber]}}>
                    {confirmDeleteAllData ? 'Confirm' : 'Clear Data'}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View>
                  <Text style={{fontSize: 24, marginVertical: 16, color: colors.white[colorNumber], backgroundColor: colors.light[colorNumber], textAlign: 'center', padding: 8,}}>Nothing to Delete.</Text>
                </View>
              )}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardColors: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    height: 160,
    aspectRatio: 1,
    marginRight: 8,
    justifyContent: 'space-between'
  }
})