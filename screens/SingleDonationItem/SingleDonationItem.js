import React from 'react';
import style from './style';
import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log(donationItemInformation);
};

export default SingleDonationItem;
