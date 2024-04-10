import React, { useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'
import { commonStyles } from '../../commonStyles'

import settingsImg from '../../assets/3d/settings.png'
import questionImg from '../../assets/3d/question.png'
import instructionsImg from '../../assets/3d/instructions.png'
export default function ForApp() {
  const { correctColors, totalOrders } = useContext(Storage)
  const colorNumber = correctColors - 1
  const navigation = useNavigation()
  const cards = [
    {
      name: 'Settings',
      img: settingsImg,
      link: 'Settings'
    },
    {
      name: 'Instructions',
      img: instructionsImg,
      link: 'Instructions',
    },
    {
      name: 'Your Work!',
      img: questionImg,
      link: 'Personal',
    },
  ]
  return (
    <ScrollView style={{flex: 1, padding: 8}}>
      {cards.slice(0, totalOrders >= 6 ? 3 : 2).map((info, index) => (
        <TouchableOpacity onPress={() => navigation.navigate(info.link)} style={[styles.card, {backgroundColor: colors.light[colorNumber]}]} key={index}>
          <Text style={{fontSize: 24, color: colors.buttonColor[colorNumber]}}>{info.name}</Text>
          <View style={{width: 60, aspectRatio: 1}}>
            <Image source={info.img} style={commonStyles.img} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})