import React from 'react';
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

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

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
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.image}
            source={require('../../assets/images/cat1.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Categories'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
