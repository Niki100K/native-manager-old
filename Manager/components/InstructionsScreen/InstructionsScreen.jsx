import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Storage } from '../../Storage'
import { colors } from '../../colors'
import { commonStyles } from '../../commonStyles'

import InstructionsScreenJS from './InstructionsScreenJS'
export default function InstructionsScreen() {
  const { correctColors } = useContext(Storage)
  const colorNumber = correctColors - 1
  const { data } = InstructionsScreenJS()

  return (
    <ScrollView style={{flex: 1, padding: 8}}>
      {data.map((info, index) => (
        <View style={{marginBottom: 32}} key={index}>
          <Text style={{fontSize: 20, color: colors.light[colorNumber], marginBottom: 16, letterSpacing: 2}}>{info.header}</Text>
          <View>
            <View>
              {info.text.map((text, indexText) => (
                <Text style={{fontSize: 16, color: colors.text, opacity: .8, marginBottom: 8}} key={indexText}>{text}</Text>
              ))}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginVertical: 32}}>
              {info.img.map((image, indexImage) => (
                <View style={{width: '48%', aspectRatio: .5, marginBottom: 16, overflow: 'hidden', borderRadius: 8, borderWidth: 2, borderColor: colors.white[colorNumber]}} key={indexImage}>
                  <Image source={image} style={commonStyles.img} />
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})