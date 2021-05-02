import React, { useEffect, useRef, useState } from "react";
import { Text, View, Animated } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface InterpolationProps {
  [n: string]: never;
}
export const Interpolation = ({}: InterpolationProps) => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const translatation = scrolling.interpolate({
    inputRange: [20, 110],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });

  return (
    <React.Fragment>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: "tomato",
          transform: [{ translateY: translatation }],
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Header</Text>
      </Animated.View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }}></View>
      </Animated.ScrollView>
    </React.Fragment>
  );
};
