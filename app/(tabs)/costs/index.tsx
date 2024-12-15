import { StyleSheet, View, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function CostsScreen() {
  const tableData = [
    { name: "Item 1", cost: "$10", date: "2024-12-01" },
    { name: "Item 2", cost: "$15", date: "2024-12-02" },
    { name: "Item 3", cost: "$20", date: "2024-12-03" },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Costs Table
      </ThemedText>
      <ThemedView style={styles.table}>
        <ThemedView style={styles.tableHeader}>
          <ThemedText style={styles.headerCell}>Name</ThemedText>
          <ThemedText style={styles.headerCell}>Cost</ThemedText>
          <ThemedText style={styles.headerCell}>Date</ThemedText>
        </ThemedView>
        {tableData.map((row, index) => (
          <ThemedView key={index} style={styles.tableRow}>
            <ThemedText style={styles.cell}>{row.name}</ThemedText>
            <ThemedText style={styles.cell}>{row.cost}</ThemedText>
            <ThemedText style={styles.cell}>{row.date}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#eee",
    padding: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});
