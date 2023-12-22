import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ListItem({ title, diseasesCount, color }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.diseases}>{diseasesCount} diseases</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  title: { fontSize: 24, marginBottom: 4, color: "white", fontWeight: "700" },
  diseases: { fontSize: 16, color: "#dfdfdf", fontWeight: "500" },
});
