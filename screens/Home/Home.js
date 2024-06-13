import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Search
        onSearch={searchValue => {
          console.log(searchValue);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
