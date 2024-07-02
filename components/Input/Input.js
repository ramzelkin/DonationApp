import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Input = props => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        style={style.input}
        value={value}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        onChangeText={value => {
          setValue(value);
          props.onChangeText(value);
        }}
      />
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
