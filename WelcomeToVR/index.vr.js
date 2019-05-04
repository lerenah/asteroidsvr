import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('stars.jpg')} />
        <Text
          style={{
            fontSize: 0.5,
            fontWeight: '200',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }]
          }}
        >
          Asteroids of NASA
        </Text>
        {/* <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/RxbP020DX2s'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        /> */}
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
