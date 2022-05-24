import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {getBooksData} from './service/HomeApiService';
import {renderFlatList} from './service/HomeUiService';

const HomeScreen = ({navigation}) => {
  const [isReady, setIsReady] = useState(false);
  const [booksDataList, setBooksDataList] = useState();

  const categoryList = useMemo(
    () => ['IT', 'アート', '旅行', 'マーケティング', 'ファッション'],
    [],
  );

  const init = useCallback(async () => {
    const promiseList = [];

    for (const category of categoryList) {
      promiseList.push(getBooksData(category));
    }
    const results = await Promise.all(promiseList).catch(error => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Error'}],
      });
    });

    setBooksDataList(results);

    setIsReady(true);
  }, [categoryList, navigation]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <SafeAreaView>
      <ScrollView>
        {isReady &&
          booksDataList &&
          booksDataList.map((booksData, index) => {
            return renderFlatList(booksData, categoryList[index], navigation);
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
