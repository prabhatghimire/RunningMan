import React, {useEffect, useState} from 'react';
import ModelView from 'react-native-gl-model-view';
import {Animated, Easing, StyleSheet, View} from 'react-native';

const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export const RunningMan = () => {
  const [rotateX, setRotateX] = useState(0); //useState(new Animated.Value(90));
  const [rotateZ, setRotateZ] = useState(0); //useState(new Animated.Value(0));
  const [fromXY, setFromXY] = useState();
  const [valueXY, setValueXY] = useState();

  const onMoveEnd = () => {
    setFromXY(0);
  };

  const onMove = e => {
    let {pageX, pageY} = e.nativeEvent;
    if (!fromXY) {
      setFromXY([pageX, pageY]);
      setValueXY([rotateZ, rotateX]);
    } else {
      setRotateZ(valueXY[0] + (pageX - fromXY[0]) / 2);
      setRotateX(valueXY[1] + (pageY - fromXY[1]) / 2);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ModelView
        model={{
          uri: 'running.obj',
        }}
        texture={{
          uri: 'CS.JPG',
        }}
        onStartShouldSetResponder={() => true}
        onResponderRelease={onMoveEnd}
        onResponderMove={onMove}
        animate={!!fromXY}
        tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
        scale={0.01}
        rotateX={rotateX}
        rotateZ={rotateZ}
        translateZ={-4}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
