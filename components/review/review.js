import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardSlides = this.props.deck.deck.map((card, index) => {
      return (
        <View key={index} style={styles.cardView}>
          <Text>{card.dest}</Text>
        </View>
      );
    });

    return (
      <Swiper contentContainerStyle={styles.wrapper}>
        {cardSlides}
      </Swiper>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Review;
