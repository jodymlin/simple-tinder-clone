// SwipeCards.js
'use strict';

import React, { useState, forwardRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';



function Card(props) {
    return (
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={props.image}
            resizeMode='cover'
            style={styles.profilePicture}
          />
        </View>
        <Text style={styles.name}>{props.name}, {props.age}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    );
}

function NoMoreCards(props) {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
}

const allCards = [
  {
    image: require('../images/iu-singing.jpg'),
    name: 'IU',
    age: 27,
    title: 'Actor'
  },
  {
    image: require('../images/iu-yellow-dress.jpg'),
    name: 'Jieun Lee',
    age: 27,
    title: 'Singer'
  },
  {
    image: require('../images/iu-chocolate.jpg'),
    name: 'IU',
    age: 27,
    title: 'Singer'
  }
];


function CardProfiles(props, ref) {
  const [ cards, setCards ] = useState(allCards);

  const handleYup = (card) => {
    console.log(`Yup for ${card.text}`)
  };

  const handleNope = (card) => {
    console.log(`Nope for ${card.text}`)
  };

    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        ref={ref}
        cards={cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={handleYup}
        handleNope={handleNope}
        loop
      />
    )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: 'pink',
    borderRadius: 16
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  imageWrapper: {
    width: '100%',
    height: 300,
  },
  profilePicture: {
    width: '100%',
    height: '100%'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24
  },
  title: {
    color: 'grey',
    fontSize: 18
  }
});

export default forwardRef(CardProfiles);
