import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ListItem from "./components/ListItem";

import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const dataList = [
    {
      title: "Head & Face",
      diseasesCount: 11,
      color: "#e76c5a",
    },
    {
      title: "Back & Neck",
      diseasesCount: 9,
      color: "#83bcb3",
    },
    {
      title: "Elbow & Shoulders",
      diseasesCount: 12,
      color: "#ef8e37",
    },
    {
      title: "Hand & Arm",
      diseasesCount: 2,
      color: "#2d687c",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        diseasesCount={item.diseasesCount}
        color={item.color}
      />
    );
  };

  const ItemSeparatorComponent = () => <View style={{ height: 16 }} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, color: "gray", fontWeight: "500" }}>
            Friday, 15 Dec
          </Text>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 40, marginBottom: 8, fontWeight: "600" }}>
            Learn
          </Text>
          <Text style={{ fontSize: 20 }}>Choose the part of the body</Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <FlatList
            data={dataList}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={(item) => item.title}
            scrollEnabled={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    display: "flex",
    flexDirection: "col",
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
