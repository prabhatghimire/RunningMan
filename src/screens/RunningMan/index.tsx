import React, {useEffect, useState} from 'react';
import ModelView from 'react-native-gl-model-view';
import {Animated, Easing, View} from 'react-native';

const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

// constructor() {
//   this.state = {
//       zoom: new Animated.Value(0),
//       // ...
//   };
//   Object.keys(this.state).forEach(key =>
//       this.state[key] instanceof Animated.Value &&
//       this.state[key].__makeNative()
//   );
// }

export const RunningMan = () => {
  const [zoom, setZoom] = useState(-1);
  // var zoom = -1;

  // useEffect(() => {
  //   Animated.timing(zoom, {
  //     toValue: -2,
  //     useNativeDriver: true,
  //     duration: 2000,
  //     easing: Easing.bounce,
  //   }).start();
  // }, []);
  return (
    <View style={{flex: 1}}>
      <ModelView
        model={{
          uri: 'man.obj',
        }}
        texture={{
          uri: 'CS.JPG',
        }}
        scale={0.01}
        // rotateZ={270}
        style={{flex: 1}}
        animate={true}
        translateZ={zoom}
      />
    </View>
  );
};
