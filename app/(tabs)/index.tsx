import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [currentNumber, setCurrentNumber] = useState<string>("");
  const [lastNumber, setLastNumber] = useState<string>("");

  function handleInput(buttonPressed: string | number) {
    const value = String(buttonPressed);

    if (["*", "/", "+", "-", "ˆ"].includes(value)) {
      setCurrentNumber(currentNumber + " " + value + " ");
      return;
    }

    if (value === "<") {
      setCurrentNumber(currentNumber.slice(0, -1));
      return;
    }

    if (value === "C") {
      setCurrentNumber("");
      setLastNumber("");
      return;
    }

    if (value === ",") {
      setCurrentNumber(currentNumber + ".");
      return;
    }

    if (value === "=") {
      setLastNumber(currentNumber + " =");
      calculator();
      return;
    }

    setCurrentNumber(currentNumber + value);
  }

  function calculator() {
    try {
      const splitNumbers = currentNumber.split(" ");
      const operator = splitNumbers[1];

      const num1 = parseFloat(splitNumbers[0]);
      const num2 = parseFloat(splitNumbers[2]);

      let result = 0;

      switch (operator) {
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "ˆ":
          result = num1 ** num2;
          break;
      }

      setCurrentNumber(result.toString());
    } catch {
      setCurrentNumber("Erro");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber || "0"}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("C")}>
          <Text style={styles.textButton}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput("ˆ")}>
          <Text style={styles.textButton}>xˆy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput("<")}>
          <Text style={styles.textButton}>{"<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput("/")}>
          <Text style={styles.textButton}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(7)}>
          <Text style={styles.textButton}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(8)}>
          <Text style={styles.textButton}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(9)}>
          <Text style={styles.textButton}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput("*")}>
          <Text style={styles.textButton}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(4)}>
          <Text style={styles.textButton}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(5)}>
          <Text style={styles.textButton}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(6)}>
          <Text style={styles.textButton}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput("-")}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(1)}>
          <Text style={styles.textButton}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(2)}>
          <Text style={styles.textButton}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(3)}>
          <Text style={styles.textButton}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput("+")}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#808080" }]}
          onPress={() => handleInput("=")}
        >
          <Text style={[styles.textButton, { color: "black", fontSize: 30 }]}>
            =
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(0)}>
          <Text style={styles.textButton}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleInput(",")}>
          <Text style={styles.textButton}>,</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#808080" }]}
          onPress={() => handleInput("=")}
        >
          <Text style={[styles.textButton, { color: "black", fontSize: 30 }]}>
            =
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  result: {
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
  },

  resultText: {
    fontSize: 70,
    fontWeight: "200",
    margin: 10,
    alignSelf: "flex-end",
  },

  historyText: {
    fontSize: 20,
    marginRight: 10,
    alignSelf: "flex-end",
    color: "gray",
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  button: {
    width: "25%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
  },

  textButton: {
    fontSize: 25,
  },
});
