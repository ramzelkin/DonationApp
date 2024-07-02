import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email'}
            onChangeText={value => {
              setEmail(value);
            }}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => {
              setPassword(value);
            }}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'Login'} />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => {
            navigation.navigate(Routes.Registration);
          }}>
          <Header color={'#156cf7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
