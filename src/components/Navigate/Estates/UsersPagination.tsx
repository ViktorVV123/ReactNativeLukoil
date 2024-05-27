import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export const UsersPagination = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setFetchingMore] = useState(false);

  const getUsers = async pageNumber => {
    try {
      const response = await fetch(
        'https://randomuser.me/api/?page=${pageNumber}&results=10&seed=abc',
      );
      const json = await response.json();
      setData(prevData => [...prevData, ...json.results]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setFetchingMore(false);
    }
  };

  useEffect(() => {
    getUsers(page);
  }, [page]);

  const loadMoreUsers = () => {
    if (!isFetchingMore) {
      setFetchingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.containerItem}>
      <Text style={styles.item}>
        {item.name.title} {item.name.first} {item.name.last}
      </Text>
      <Text style={styles.item}>
        {item.location.street.number} {item.location.street.name}
      </Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item.login.uuid}-${index}`}
          renderItem={renderItem}
          onEndReached={loadMoreUsers}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            isFetchingMore ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : null
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    marginBottom: 100,
  },
  containerItem: {
    marginBottom: 20,
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
