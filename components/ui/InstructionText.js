import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "OpenSans",
    color: Colors.secondary500,
    fontSize: 24,
  },
});
