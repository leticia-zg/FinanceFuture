import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Nav: React.FC = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navButton}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="home" size={28} color="#FFFFFF" />
          <Text style={styles.navText}>Início</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="calculate" size={28} color="#FFFFFF" />
          <Text style={styles.navText}>Simular</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="history" size={28} color="#FFFFFF" />
          <Text style={styles.navText}>Histórico</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#00C853", 
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4, 
  },
});

export default Nav;
