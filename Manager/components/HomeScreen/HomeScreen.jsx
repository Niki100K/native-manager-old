import React, { useContext } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'
import { commonStyles } from '../../commonStyles'

import HomeScreenJS from './HomeScreenJS'
export default function HomeScreen() {
  const { correctColors } = useContext(Storage)
  const colorNumber = correctColors - 1
  const { Categories } = HomeScreenJS()
  const navigation = useNavigation()

  return (
    <ScrollView style={{flex: 1}}>
      <View style={commonStyles.container}>
        {Categories.map((info, index) => (
          <TouchableOpacity onPress={() => navigation.navigate('Category', {category: info.name})} style={commonStyles.card} key={index}>
            <View style={commonStyles.imgCon}>
              <Image source={info.img} style={{width: '100%', height: '100%'}}/>
            </View>
            <Text style={[commonStyles.name, {color: colors.white[colorNumber]}]}>{info.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}