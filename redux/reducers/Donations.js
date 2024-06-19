import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      name: 'Solar-powered lantern',
      description:
        'A lantern powered by solar energy, providing a sustainable an eco-friendly source of light to those in need',
      image: 'https://unsplash.com/photos/blue-solar-panel-lot-Q3r3Ws-o54s',
      donationItemId: 1,
      categoryIds: [1, 2],
      price: '1.34',
    },
    {
      name: 'School supplies kit',
      description:
        'A kit containing all essential school supplies, such as notebooks, pencils, and erasers',
      image:
        'https://unsplash.com/photos/a-flat-lay-top-view-of-group-of-school-supplies-back-to-school-concept-brgSSy5sAM0',
      donationItemId: 2,
      categoryIds: [1, 3],
      price: '11.64',
    },
    {
      name: 'Warm winter coat',
      description:
        'A warm winter coat to protect people from the cold and help them to stay warm during the winter months',
      image:
        'https://unsplash.com/photos/a-person-wearing-a-red-jacket-with-a-ring-on-their-finger-FUvrWFUU6lU',
      donationItemId: 3,
      categoryIds: [1, 5],
      price: '13.08',
    },
    {
      name: 'Non-perishable food',
      description:
        'Non-perishable food, such as canned goods and rice, to provide essential sustenance to those in need',
      image:
        'https://unsplash.com/photos/red-and-white-labeled-cans-Kml12zn10wI',
      donationItemId: 4,
      categoryIds: [1, 5],
      price: '11.64',
    },
    {
      name: 'First aid supplies',
      description:
        'First aid supplies, such as bandages and antiseptic wipes, to help people treat minor injuries',
      image:
        'https://www.istockphoto.com/photo/womans-hand-using-a-first-aid-kit-gm1359564828-432873766',
      donationItemId: 5,
      categoryIds: [10],
      price: '11.50',
    },
    {
      name: 'Gardening tools',
      description:
        'Gardening tools, such as shovels ans rakes, for people to grow and maintain their own gardens',
      image:
        'https://unsplash.com/photos/green-metal-garden-shovel-filled-with-brown-soil-BduDcrySLKM',
      donationItemId: 6,
      categoryIds: [2, 12],
      price: '13.40',
    },
  ],
  selectedDonationId: null,
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
    },
  },
});

export const {resetDonations, updateSelectedDonationId} = Donations.actions;

export default Donations.reducer;
