import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import { DateContext } from "../context/DateContext";

export const Home = () => {
  const { appDay, resetAppDate } = useContext(DateContext);

  const calculateTimeLeft = (appDay) => {
    const difference = appDay - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(appDay));

  const resetTimer = () => {
    resetAppDate();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(appDay));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Text key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </Text>
    );
  });

  const renderedDate = () => {
    return (
      <View style={styles.fechaWrapper}>
        <Text style={styles.p}>Faltan:</Text>
        <Text style={styles.pClock}>{timerComponents}</Text>
        <Text style={styles.p}>para que pase la basura</Text>
        <Text style={styles.iconos}>🗑🚛</Text>
      </View>
    );
  };

  const renderHomeInfo = () => {
    if (appDay === null) {
      return (
        <>
          <View style={styles.container}>
            <Text style={styles.iconos}>😎</Text>
            <Text style={styles.pChoose}>
              Elija una fecha en el calendario!{" "}
            </Text>
            <Text style={styles.iconos}>🗑🚛</Text>
          </View>
        </>
      );
    }
    if (timerComponents.length) {
      return (
        <View>
          {renderedDate()}
          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => resetTimer()}
          >
            <Text style={styles.pBtn}>Borrar contador</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <View>
            <Text style={styles.pDone}>Ya pasó la basura! 😪</Text>
          </View>
          <Text style={styles.pSmall}>
            <View></View>
            Elija otra fecha en el calendario
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.p}>{renderHomeInfo()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#251E2C",
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    color: "#fff",
    fontSize: 17,
  },
  pChoose: {
    color: "#fff",
    fontSize: 20,
  },
  pClock: {
    color: "#000",
    fontSize: 20,
    padding: 8,
    backgroundColor: "#DDC6B0",
    borderRadius: 3,
  },
  pDone: {
    color: "#fff",
    fontSize: 25,
  },
  pSmall: {
    color: "#fff",
    fontSize: 12,
    textAlign: 'center'
  },
  iconos: {
    fontSize: 24,
  },
  fechaWrapper: {
    flex: 1,
    fontSize: 90,
    textAlign: "center",
  },
  logo: {
    width: 300,
    height: 100,
  },
  resetBtn: {
    alignItems: "center",
    padding: 5,
    textAlign: "center",
    width: 170,
    height: "auto",
    backgroundColor: "#8FC517",
    marginTop: 10,
    borderRadius: 5,
  },
  pBtn: {
    color: "#000",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
