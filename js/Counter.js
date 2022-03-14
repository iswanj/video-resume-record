import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Counter = ({time}) => {
  const [timer, setTimer] = useState(time);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(time => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <View>
      <Text style={styles.text}>{String(timer).padStart(2, '0')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '600',
  },
});
