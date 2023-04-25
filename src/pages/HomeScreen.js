import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  fetchItemData,
  fetchPaginationData,
} from "../../actions/index";
import { styles } from "./index.css";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation();

  const { data, loading, error, pagination } = useSelector(
    (state) => state.data.data
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchData());
    });
    return unsubscribe;
  }, [navigation]);

  const handleLoadMore = async () => {
    if (pagination && currentPage < pagination.total_pages) {
      setCurrentPage(currentPage + 1);
      dispatch(fetchPaginationData(pagination.next_url));
    }
  };

  const handleItemPress = ({ itemId }) => {
    dispatch(fetchItemData(itemId));
    navigation.navigate("Art Work Details", { itemId });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleItemPress({ itemId: item.id })}
      >
        {item.thumbnail && (
          <Image
            source={{ uri: item.thumbnail.lqip }}
            style={styles.thumbnail}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Title: {item.title}</Text>
          <Text style={styles.description}>Artist: {item.artist_title}</Text>
          <Text style={styles.description}>
            Classification: {item.classification_title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading || !data || data.length === 0) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
    );
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Home;
