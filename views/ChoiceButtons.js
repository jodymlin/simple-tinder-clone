import React, { forwardRef } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16
  },
  button: {
    padding: 8,
    borderColor: 'pink',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const  CircleButton = React.forwardRef((props, ref) => {
  return <TouchableOpacity 
    style={{ borderRadius: (props.size/2) , width: props.size, height: props.size, ...styles.button }}
    onPress={() => {
      props.action()
    }}
    >
    <Image
      source={props.image}
      resizeMode='contain'
      style={{ width: '80%', height: '80%'}}
      
    />
    {console.log(ref)}
  </TouchableOpacity>
});


function ChoiceButtons(props, ref) {
  const small = 50;
  const large = 70;

  const icons = [
    {
      image: require('../images/rewind.png'),
      size: small,
      action: function() {
        ref.current._goToPrevCard();
        console.log('go to prev card');
      }
    },
    {
      image: require('../images/nope.png'),
      size: large,
      action: function() {
        ref.current._forceLeftSwipe();
        console.log('nope!')
      }
    },
    {
      image: require('../images/boost.png'),
      size: small,
      action: function() {}
    },
    {
      image: require('../images/like.png'),
      size: large,
      action: function() {
        ref.current._forceRightSwipe();
        console.log('like!')
      }
    },
    {
      image: require('../images/super-like.png'),
      size: small,
      action: function() {}
    }
  ];

  return (
    <View style={styles.container}>
      {icons.map( icon => <CircleButton 
                            image={icon.image} 
                            size={icon.size} 
                            key={icon.image}
                            action={icon.action}
                            ref={ref}
                          />)}
    </View>
  )
}

export default forwardRef(ChoiceButtons);