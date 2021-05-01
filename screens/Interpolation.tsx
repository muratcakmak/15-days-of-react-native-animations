import React from "react";
import { Text, View } from "react-native";

interface InterpolationProps {
  [n: string]: never;
}
export const Interpolation = ({}: InterpolationProps) => {
  return (
    <View>
      <Text>Interpolation</Text>
    </View>
  );
};
