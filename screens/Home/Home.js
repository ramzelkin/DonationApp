import React, {useState, useEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {Routes} from '../../navigation/Routes';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const [donationItems, setDonationItems] = useState([]);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntoText}>Hello, </Text>
            <View style={style.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0]} />
            </View>
          </View>
        </View>
        <View style={style.searchBox}>
          <Search placeHolder={'Search'} onSearch={() => {}} />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.image}
            source={require('../../assets/images/donation.jpg')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Categories'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (setIsLoadingCategories()) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => (
              <View key={value.donationItemId} style={style.singleDonationItem}>
                <SingleDonationItem
                  onPress={selectedDonationId => {
                    dispatch(updateSelectedDonationId(selectedDonationId));
                    navigation.navigate(Routes.SingleDonationItem);
                  }}
                  donationItemId={value.donationItemId}
                  uri={value.image}
                  donationTitle={value.name}
                  price={parseFloat(value.price)}
                  badgeTitle={
                    categories.categories.filter(
                      val => val.categoryId === categories.selectedCategoryId,
                    )[0].name
                  }
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
