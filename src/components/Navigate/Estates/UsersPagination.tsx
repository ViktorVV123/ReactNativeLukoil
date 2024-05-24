import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const URL_FETCH = 'https://randomuser.me/api/?page=3&results=10&seed=abc';

export const UsersPagination = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://randomuser.me/api/?page=3&results=10&seed=abc',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  const tasksHandler = el => {
    return (
      <View style={{marginBottom: 20}}>
        {data?.results?.map((el: any) => (
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 20}}>{el.name.title}</Text>
            <Text style={{fontSize: 20}}>{el.name.first}</Text>
            <Text style={{fontSize: 20}}>{el.name.last}</Text>
            <Text style={{fontSize: 20}}>{el.location.street.number}</Text>
            <Text style={{fontSize: 20}}>{el.location.street.name}</Text>
            <Text style={{fontSize: 20}}>{el.email}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {/*        {data?.results?.map((el: any) => (
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 20}}>{el.name.title}</Text>
              <Text style={{fontSize: 20}}>{el.name.first}</Text>
              <Text style={{fontSize: 20}}>{el.name.last}</Text>
              <Text style={{fontSize: 20}}>{el.location.street.number}</Text>
              <Text style={{fontSize: 20}}>{el.location.street.name}</Text>
              <Text style={{fontSize: 20}}>{el.email}</Text>
            </View>
          ))}*/}
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <Text>
                {item.name.title} {item.releaseYear}
              </Text>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
/*
<View style={{flex: 1, padding: 24}}>
  {isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      {data?.results.map((el: any) => (
        <View>
          <Text key={el.id}>{el.name.last}</Text>
        </View>
      ))}
    </View>*/
