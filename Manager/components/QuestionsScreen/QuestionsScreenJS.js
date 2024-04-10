import React, { useContext, useEffect, useRef, useState } from 'react';
import { Storage } from '../../Storage';
const QuestionsScreenJS = () => {

    const { correctColors, totalQuantityItems, totalPriceOrders, totalOrders } = useContext(Storage)
    const [mostSellItems, setMostSellItems] = useState([])
    const [mostBiggestPrice, setMostBiggestPrice] = useState([])
    const [trueBiggestPrice, setTrueBiggestPrice] = useState(null)
    const [fakeTotalOrders, setFakeTotalOrders] = useState([])
    const colorNumber = correctColors - 1
    const [pressedAnswer, setPressedAnswer] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)
  
    const [score, setScore] = useState(0)
  
    const [correctMostSellItem, setCorrectMostSellItem] = useState([])
    useEffect(() => {
      const sortedItems = [...totalQuantityItems].sort((a, b) => b.quantity - a.quantity).slice(0, 3)
      setCorrectMostSellItem(sortedItems[0])
      setMostSellItems(shuffleArray([...sortedItems]))
  
      const sortByPrice = totalPriceOrders.sort((a, b) => b - a)[0];
      let fakePrice1, fakePrice2;
  
      do {
          fakePrice1 = sortByPrice + Math.floor(Math.random() * 100);
      } while (fakePrice1 === sortByPrice);
  
      do {
          fakePrice2 = sortByPrice - Math.floor(Math.random() * 100);
      } while (fakePrice2 === sortByPrice || fakePrice2 === fakePrice1);
  
      let sortPrices = [sortByPrice, fakePrice1, fakePrice2]
  
      setMostBiggestPrice(shuffleArray([...sortPrices]));
      setTrueBiggestPrice(sortByPrice);
  
      let fakeTotalOrders1, fakeTotalOrders2
      do {
        fakeTotalOrders1 = totalOrders + Math.floor(Math.random() * 10)
      } while (fakeTotalOrders1 === totalOrders);
  
      do {
        fakeTotalOrders2 = totalOrders + Math.floor(Math.random() * 10)
      } while (fakeTotalOrders2 === totalOrders || fakeTotalOrders2 === fakeTotalOrders1);
      
      let sortFakeOrders = [totalOrders, fakeTotalOrders1, fakeTotalOrders2]
      setFakeTotalOrders(shuffleArray([...sortFakeOrders]))
    }, [totalQuantityItems, totalPriceOrders, totalOrders])
  
    const questionsData = [
      {
        header: 'Question One',
        question: 'Which item do you sell the most?',
        choice: mostSellItems
      },
      {
        header: 'Question Two',
        question: 'What is the biggest total price of a single order you have had?',
        choice: mostBiggestPrice
      },
      {
        header: 'Question Three',
        question: 'What is the number of total orders you have had?',
        choice: fakeTotalOrders
      },
    ];
    const swiperRef = useRef(null);
    const [correctSwiper, setCorrectSwiper] = useState(1)
    const handleNextPress = () => {
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1, true);
        setPressedAnswer(false)
        setCorrectAnswer(false)
        setCorrectSwiper(prev => prev + 1)
      }
    };
  
    const handleAnswer = (index, name, ml) => {
      if (!pressedAnswer) {
        switch (index) {
          case 1:
            setPressedAnswer(true)
            if (correctMostSellItem.name === name && correctMostSellItem.ml === ml) {
              setCorrectAnswer(true)
              setScore(prev => prev + 1)
            } else {
              setCorrectAnswer(false)
            }
            break;
          case 2:
            setPressedAnswer(true)
            if (name === trueBiggestPrice) {
              setCorrectAnswer(true)
              setScore(prev => prev + 1)
            } else {
              setCorrectAnswer(false)
            }
            break;
          case 3:
            setPressedAnswer(true)
            if (name === totalOrders) {
              setCorrectAnswer(true)
              setScore(prev => prev + 1)
            } else {
              setCorrectAnswer(false)
            }
            break;
          default:
            break;
        }
      }
    }



  return {
    mostSellItems,
    mostBiggestPrice,
    trueBiggestPrice,
    fakeTotalOrders,
    pressedAnswer,
    correctAnswer,
    score,
    correctMostSellItem,
    questionsData,
    swiperRef,
    correctSwiper,
    handleNextPress,
    handleAnswer
  }
}

export default QuestionsScreenJS

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}