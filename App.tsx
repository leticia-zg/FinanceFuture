import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/header';
import Navbar from './components/navbar';
import Simulate from './components/simulate';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerWrapper}>
        <Header title="Finance Future" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Simulate />
      </ScrollView>

      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerWrapper: {
    paddingTop: 200, 
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, 
  },
});
