import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <MaterialIcons name="insert-chart" size={28} color="#00E676" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#121212",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 16,
    position: "absolute",
    flexDirection: "row", 
    alignItems: "center", 
    top: 20,
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00E676",
  },
});

export default Header;
