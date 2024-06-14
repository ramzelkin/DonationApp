import React from 'react';

import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>

        <Image
          resizeMode={'contain'}
          source={{source: props.source}}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        {/* <Image source={{uri: props.uri}} style={style.image} /> */}
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  //   url: PropTypes.string.isRequired,
  source: PropTypes.any.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
