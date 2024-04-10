import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { colors } from '../../colors'
import { Storage } from '../../Storage'
import { commonStyles } from '../../commonStyles'

import heart from '../../assets/3d/heart.png'
export default function SurpriceScreen() {
  const { correctColors } = useContext(Storage)
  const colorNumber = correctColors - 1

  return (
    <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 32, marginTop: 32, color: colors.white[colorNumber]}}>Do what you Love, love what you do!</Text>
        <View style={commonStyles.imgCon}>
            <Image source={heart} style={commonStyles.img} />    
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})