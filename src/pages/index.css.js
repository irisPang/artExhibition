import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
    display: "flex",
    padding: 4,
  },
  title: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    flex: 0.5,
  },
  description: {
    fontSize: 14,
    color: "red",
  },
  image: {
    padding: 15,
    height:'80%',
    width:'80%',
    borderRadius: 40,
    marginRight: 10,
  },
  itemDetailPage:{
    display:'flex',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:2,
  },
  text:{
    marginTop:10,
    fontWeight: "bold",
    flex: 0.5,
    fontSize: 16,
    textAlign:'center',
    marginHorizontal:10
  },
  loading:{
    flex: 0.5,
    display:'flex',
    alignItems:'center',
    justifyContent: "center",
  }
});
