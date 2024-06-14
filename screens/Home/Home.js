import React from 'react';
import {SafeAreaView, View} from 'react-native';

import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {horizontalScale} from '../../assets/styles/scalling';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: horizontalScale(4),
        }}>
        <SingleDonationItem
          source={require('../../assets/images/default-post.png')}
          badgeTitle={'Environment'}
          donationTitle={'Tree cactus'}
          price={44}
        />
        <SingleDonationItem
          source={require('../../assets/images/default-post.png')}
          badgeTitle={'Environment'}
          donationTitle={'Tree cactus'}
          price={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
