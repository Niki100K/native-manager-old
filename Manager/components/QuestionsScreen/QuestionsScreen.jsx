import React, { useContext, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import { colors } from '../../colors';
import { Storage } from '../../Storage';

import QuestionsScreenJS from './QuestionsScreenJS';
export default function QuestionsScreen() {
  const navigation = useNavigation()
  const { correctColors, totalOrders } = useContext(Storage);
  const colorNumber = correctColors - 1;
  const {
    trueBiggestPrice,
    pressedAnswer,
    correctAnswer,
    score,
    correctMostSellItem,
    questionsData,
    swiperRef,
    correctSwiper,
    handleNextPress,
    handleAnswer
  } = QuestionsScreenJS();

  const [showResult, setShowResult] = useState(false);

  const swiperFunction = () => {
    return (
      <Swiper
        ref={swiperRef}
        showsPagination={false}
        scrollEnabled={false}
      >
        {questionsData.slice(correctSwiper - 1, correctSwiper).map((info, index) => (
          <View style={{alignItems: 'center', marginTop: 32}} key={index}>
            <Text style={{fontSize: 32, color: colors.light[colorNumber]}}>{info.header}</Text>
            <Text style={{fontSize: 24, color: colors.text}}>{info.question}</Text>
            {info.choice &&
              <View style={{marginVertical: 32, width: '100%'}}>
                {info.choice.map((card, indexCard) => (
                  <Pressable
                    onPress={() => handleAnswer(correctSwiper, (card.name || card), card.ml)}
                    key={indexCard}
                    style={[styles.card, {
                      backgroundColor: 
                      pressedAnswer ?
                        correctSwiper === 1 ?
                          (correctMostSellItem.name === card.name && correctMostSellItem.ml === card.ml) ? 
                          colors.green : colors.red
                        : correctSwiper === 2 ?
                            card === trueBiggestPrice ? colors.green : colors.red
                          : card === totalOrders ? colors.green : colors.red
                      : colors.middle[colorNumber],

                      opacity: pressedAnswer ?
                        correctSwiper === 1 ?
                          (correctMostSellItem.name === card.name && correctMostSellItem.ml === card.ml) ? 
                          1 : .4
                        : correctSwiper === 2 ?
                            card === trueBiggestPrice ? 1 : .4
                          : correctSwiper === 3 && 
                            card === totalOrders ? 1 : .4
                      : 1
                    }]} 
                  >
                    <Text style={{textAlign: 'center', fontSize: 20, color: pressedAnswer ? colors.dark[0] : colors.dark[colorNumber]}}>
                      {
                      correctSwiper === 1 ?
                        card.name
                      : correctSwiper === 2 ? 
                        card.toFixed(2) + '$' 
                      : correctSwiper === 3 && parseInt(card)
                      }
                    </Text>
                    {card.ml &&
                      <Text style={[styles.cardMl, {color: colors.light[colorNumber]}]}>{card.ml}</Text>
                    }
                  </Pressable>
                ))}
              </View>
            }
            {pressedAnswer &&
              <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={{fontSize: 24, textAlign: 'center', color: colors.white[0]}}>{
                  correctSwiper === 1 ?
                    correctAnswer ?
                      `You are right! You sell ${correctMostSellItem.name}` 
                    :
                      `Not Correct! Answer is ${correctMostSellItem.name}`
                  : correctSwiper === 2 ?
                      correctAnswer ?
                        `You are right! Biggest Price is` 
                      :
                        'Not Correct! Answer is:'
                    : correctSwiper === 3 &&
                      correctAnswer ?
                        `You are right! Your total orders are` 
                      :
                        'Not Correct! Answer is:'
                }</Text>
                <Text style={{fontSize: 64, color: colors.green}}>
                  {
                    correctSwiper === 1 ?
                      correctMostSellItem.quantity
                  : correctSwiper === 2 ?
                    trueBiggestPrice.toFixed(2) + '$'
                    : correctSwiper === 3 &&
                      totalOrders
                  }
                </Text>
                {correctSwiper !== questionsData.length ? 
                <TouchableOpacity onPress={handleNextPress} style={[styles.nextQuestionButton, {backgroundColor: colors.light[colorNumber]}]}>
                  <Text style={{fontSize: 24, color: colors.buttonColor[colorNumber]}}>Next Question</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setShowResult(true)} style={[styles.nextQuestionButton, {backgroundColor: colors.light[colorNumber]}]}>
                  <Text style={{fontSize: 24, color: colors.buttonColor[colorNumber]}}>View Result</Text>
                </TouchableOpacity>
                }
              </View>
            }
          </View>
        ))}
      </Swiper>
    )
  }

  const results = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 32, color: colors.light[colorNumber]}}>Your result is:</Text>
        <Text style={{fontSize: 64, color: colors.white[0]}}>{score}</Text>
        <Text style={{fontSize: 32, color: colors.middle[colorNumber], textAlign: 'center'}}>
          {score === questionsData.length ?
            'Congratulations! You scored the maximum points. You know exactly what you\'re doing! Keep it up!'
            : score === questionsData.length - 1 ?
            'Close to Maximum Result. Good Game!'
            : (score === 0 || score === 1) &&
            'Better luck next time. Be more focused.'
          }
        </Text>
        <Pressable style={[styles.button, {backgroundColor: colors.middle[colorNumber]}]} onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 32, color: colors.buttonColor[colorNumber]}}>Go Home</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <ScrollView style={{flex: 1, padding: 8}}>
      {showResult ?
        results()
      :
      swiperFunction()
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
  },
  cardMl: {
    position: 'absolute',
    right: 0,
    margin: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  nextQuestionButton: {
    marginVertical: 16,
    padding: 16,
    borderRadius: 16,
  },
  button: {
    marginVertical: 32, 
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  }
})
