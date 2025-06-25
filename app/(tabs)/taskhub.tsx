import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


type Task = {
  title: string;
  desc: string;
  priority: string;
  due?: string;
};

export default function TaskMaster(): JSX.Element {
  const pendingTasks: Task[] = [
    { title: 'Complete project proposal', desc: 'Include budget estimates and timeline', priority: 'High Priority', due: 'Due today' },
    { title: 'Schedule team meeting', desc: 'Send calendar invites to all team members', priority: 'Medium Priority', due: 'Tomorrow' },
    { title: 'Buy groceries', desc: 'This weekend', priority: 'Low Priority' },
  ];

  const completedTasks: Task[] = [
    { title: 'Send weekly report', desc: 'Completed today', priority: 'Low Priority' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TaskMaster</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      <TextInput style={styles.searchInput} placeholder="What do you need to do?" />

      <View style={styles.filterRow}>
        {['High Priority', 'Today', 'Personal', 'Work'].map((filter) => (
          <TouchableOpacity key={filter} style={styles.filterButton}>
            <Text>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.taskList}>
        <Text style={styles.sectionHeader}>Pending Tasks ({pendingTasks.length})</Text>
        {pendingTasks.map((task, index) => (
          <View key={index} style={styles.taskCard}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDesc}>{task.desc}</Text>
            <Text>{task.priority}</Text>
            {task.due && <Text>{task.due}</Text>}
          </View>
        ))}

        <Text style={styles.sectionHeader}>Completed Tasks ({completedTasks.length})</Text>
        {completedTasks.map((task, index) => (
          <View key={index} style={styles.taskCard}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDesc}>{task.desc}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.navBar}>
        {['home', 'calendar', 'add-circle', 'stats-chart', 'settings'].map((icon) => (
          <Ionicons key={icon} name={icon as any} size={24} color="black" />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  searchInput: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginVertical: 15 },
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 10 },
  filterButton: { backgroundColor: '#ddd', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 5 },
  taskList: { flex: 1, marginTop: 10 },
  sectionHeader: { fontSize: 18, fontWeight: '600', marginVertical: 10 },
  taskCard: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10 },
  taskTitle: { fontSize: 16, fontWeight: 'bold' },
  taskDesc: { fontSize: 14, color: '#555' },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15, borderTopWidth: 1, borderColor: '#ccc' },
});
