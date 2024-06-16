import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {horizontalScale} from '../../assets/styles/scalling';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* <View
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
      </View> */}
      <Header title={user.firstName + ' ' + user.lastName} />
      <Pressable
        onPress={() => {
          dispatch(updateFirstName({firstName: 'nata'}));
        }}>
        <Text>Update name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
