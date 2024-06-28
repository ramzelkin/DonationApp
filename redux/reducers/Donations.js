import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      name: 'Solar-powered lantern',
      description:
        'A lantern powered by solar energy, providing a sustainable an eco-friendly source of light to those in need',
      image:
        'https://www.treehugger.com/thmb/4yxv7u2AV2XtPr0Gb9WI63Imjpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/solar-battery-and-lantern-in-park-close-up-side-view--1278723493-62ab2d005551488a9deba315f4e5b91b.jpg',
      donationItemId: 1,
      categoryIds: [1, 2],
      price: '1.34',
    },
    {
      name: 'School supplies kit',
      description:
        'A kit containing all essential school supplies, such as notebooks, pencils, and erasers',
      image:
        'https://www.raymondgeddes.com/cdn/shop/articles/BacktoSchoolKit.jpg?v=1682075816',
      donationItemId: 2,
      categoryIds: [1, 3],
      price: '11.64',
    },
    {
      name: 'Warm winter coat',
      description:
        'A warm winter coat to protect people from the cold and help them to stay warm during the winter months',
      image:
        'https://www.travelandleisure.com/thmb/qY9WRQugI66y650ULLiX404J0Wg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ens-megawarm-jacket-tout-LFLBS-JKT122-ecc44694f0594700b3efe4481d68b2c0.jpg',
      donationItemId: 3,
      categoryIds: [1, 4],
      price: '13.08',
    },
    {
      name: 'Non-perishable food',
      description:
        'Non-perishable food, such as canned goods and rice, to provide essential sustenance to those in need',
      image: 'https://study.com/cimages/videopreview/pouqoxmmx1.jpg',
      donationItemId: 4,
      categoryIds: [1, 5],
      price: '11.64',
    },
    {
      name: 'First aid supplies',
      description:
        'First aid supplies, such as bandages and antiseptic wipes, to help people treat minor injuries',
      image:
        'https://www.safetyandhealthmagazine.com/ext/resources/images/2022/05-may/J-J-Keller-WS-Pic.jpg?t=1649866589&width=500',
      donationItemId: 5,
      categoryIds: [8],
      price: '11.50',
    },
    {
      name: 'Gardening tools',
      description:
        'Gardening tools, such as shovels ans rakes, for people to grow and maintain their own gardens',
      image: 'https://cdn.mos.cms.futurecdn.net/Rx63edvSZCZ9uSg7egSDRU.jpg',
      donationItemId: 6,
      categoryIds: [2, 1],
      price: '13.40',
    },
  ],
  selectedDonationId: null,
  selectedDonationInformation: {},
};

const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
  },
});

export const {resetDonations, updateSelectedDonationId} = Donations.actions;

export default Donations.reducer;
