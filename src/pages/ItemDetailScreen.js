import React from "react";
import { useSelector } from "react-redux";
import { styles } from "./index.css";
import { Text, Image, ScrollView, ActivityIndicator } from "react-native";

const ItemDetail = ({ route }) => {
  const itemDetail = useSelector((state) => state.data.data);
  const { title, artist_display, provenance_text, department_title, image_id } =
    itemDetail.data;

  if (!itemDetail.data) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.itemDetailPage}>
      <Text style={styles.text}>Title: {title}</Text>
      <Image
        source={{
          uri: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Artist_display: {artist_display}</Text>
      {provenance_text && (
        <Text style={styles.text}>Publication_history: {provenance_text}</Text>
      )}
      <Text style={styles.text}> Department_title: {department_title}</Text>
    </ScrollView>
  );
};

export default ItemDetail;
