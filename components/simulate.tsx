import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Simulate: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleSimulate = () => {
    const value = parseFloat(amount);
    const time = parseInt(months);
    const simulated = value * Math.pow(1.01, time); 
    setResult(simulated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Investimentos</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor a investir"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Meses"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={months}
        onChangeText={setMonths}
      />

      <TouchableOpacity style={styles.button} onPress={handleSimulate}>
        <Text style={styles.buttonText}>Simular</Text>
      </TouchableOpacity>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Valor Futuro: R$ {result.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00E676",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00C853",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    backgroundColor: "#1B5E20",
    padding: 12,
    borderRadius: 8,
  },
  resultText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Simulate;
