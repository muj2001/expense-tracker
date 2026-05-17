import * as Device from 'expo-device';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

const TOTAL_DATA = {
  balance: 30000
}

const TRANSACTION_ITEMS: TransactionItem[] = [
  {
    id: '1',
    amount: 50000,
    transactionDate: '2026-05-15',
    description: 'Monthly salary',
    category: 'Salary',
    type: 'income',
  },
  {
    id: '2',
    amount: 20000,
    transactionDate: '2026-05-17',
    description: 'Rent for May 2026',
    category: 'Rent',
    type: 'expense',
  },
];

type TransactionItem = {
  id: string;
  amount: number;
  transactionDate: string;
  description?: string;
  category?: string;
  type: 'income' | 'expense';
}

const Item = ({item}: {item: TransactionItem}) => (
  <ThemedView style={styles.item}>
    <ThemedText style={styles.title}>{item.description}</ThemedText>
    <ThemedText>{item.amount.toLocaleString()}</ThemedText>
    <ThemedText>{item.transactionDate}</ThemedText>
    <ThemedText>{item.category}</ThemedText>
    <ThemedText>{item.type === 'income' ? 'Income' : 'Expense'}</ThemedText>
  </ThemedView>
);

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={TRANSACTION_ITEMS}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <ThemedText>TOTAL: {TOTAL_DATA.balance.toLocaleString()}</ThemedText>
      </SafeAreaProvider>
    </ThemedView>
  )
  // return (
  //   <ThemedView style={styles.container}>
  //     <SafeAreaView style={styles.safeArea}>
  //       <ThemedView style={styles.heroSection}>
  //         <AnimatedIcon />
  //         <ThemedText type="title" style={styles.title}>
  //           Expense Tracker
  //         </ThemedText>
  //       </ThemedView>

  //       <ThemedText type="code" style={styles.code}>
  //         get started
  //       </ThemedText>

  //       <ThemedView type="backgroundElement" style={styles.stepContainer}>
  //         <HintRow
  //           title="Try editing"
  //           hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
  //         />
  //         <HintRow title="Dev tools" />
  //         <HintRow
  //           title="Fresh start"
  //           hint={<ThemedText type="code">npm run reset-project</ThemedText>}
  //         />
  //       </ThemedView>

  //       {Platform.OS === 'web' && <WebBadge />}
  //     </SafeAreaView>
  //   </ThemedView>
  // );
}

const styles = StyleSheet.create({
  item: {
    padding: Spacing.two,
    borderRadius: Spacing.two,
    borderWidth: 1,
    borderColor: 'gray',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
