import React, { useContext, useState, useEffect } from "react";

import { DateContext } from "../context/DateContext";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Home } from "./Home";

export const Schedule = () => {
  const {appDay, setAppDate } = useContext(DateContext);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setAppDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.iconos}>🗑🚛</Text>
        <Text style={styles.p}>
          Elija la fecha exacta cuando pasa la basura:
        </Text>
        <View>
          <TouchableOpacity style={styles.btnDay} onPress={showDatepicker}>
            <Text style={styles.pBlackBtn}>Día</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnHour} onPress={showTimepicker}>
            <Text style={styles.pBlackBtn}>Hora</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={onChange}
            minimumDate={new Date()}
          />
        )}
      </View>
      <View style={styles.timerView}>{appDay === null ? <></> : <Home />}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#251E2C",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: 10,
  },
  p: {
    color: "#fff",
    fontSize: 17,
  },
  pBlackBtn: {
    color: "#000",
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight:'bold'
  },
  iconos: {
    fontSize: 24,
  },
  btnDay: {
    alignItems: "center",
    padding: 5,
    textAlign: "center",
    width: 90,
    height: "auto",
    color: "#fff",
    backgroundColor: "#8FC517",
    marginTop: 10,
    borderRadius: 5,
  },
  btnHour: {
    alignItems: "center",
    padding: 5,
    textAlign: "center",
    width: 90,
    height: "auto",
    color: "#fff",
    backgroundColor: "#C5C392",
    marginTop: 10,
    borderRadius: 5,
  },
  timerView: {
    flex: 1,
    backgroundColor: '#251E2C'
  },
});
