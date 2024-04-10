import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActiveOrders, CategoryScreen, HomeScreen, ForApp, OrderScreen, SurpriceScreen, TotalScreen, SettingsScreen, InstructionsScreen, PersonalScreen, QuestionsScreen } from './components'
import { colors } from './colors'
import { StorageProvider, Storage } from './Storage'
import { Text } from 'react-native';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <StorageProvider>
      <AppContent />
    </StorageProvider>
  );
}

const AppContent = () => {
  const numberColor = numberColors();
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerStyle: {
              backgroundColor: colors.dark[numberColor],
            },
            headerTitleStyle: {
              color: colors.white[numberColor]
            },
            headerTintColor: colors.light[numberColor],
            contentStyle: {
              backgroundColor: colors.dark[numberColor]
            },
            headerRight: () => (
              <RightHeaderContent />
            )
          })}
        >
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerLeft: () => (
                <LeftHeaderContent />
              ),
            }}
          />
          <Stack.Screen
            name='Category'
            options={({ route }) => ({
              title: route.params.category,
              headerBackTitleVisible: false,
            })}
            component={CategoryScreen}
          />
          <Stack.Screen
            name='Total'
            component={TotalScreen}
          />
          <Stack.Screen
            name='ActiveOrders'
            component={ActiveOrders}
          />
          <Stack.Screen
            name='OrderScreen'
            options={({ route }) => ({
              title: 'Order: ' + route.params.Orderid,
              headerBackTitleVisible: false,
            })}
            component={OrderScreen}
          />
          <Stack.Screen
            name='Little Surprice'
            component={SurpriceScreen}
          />
          <Stack.Screen
            name='ForApp'
            component={ForApp}
          />
          <Stack.Screen
            name='Settings'
            component={SettingsScreen}
          />
          <Stack.Screen
            name='Instructions'
            component={InstructionsScreen}
          />
          <Stack.Screen
            name='Personal'
            component={PersonalScreen}
          />
          <Stack.Screen
            name='Questions'
            component={QuestionsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


const RightHeaderContent = () => {
  const { activeOrders, correctColors } = useContext(Storage);
  const navigation = useNavigation()
  const colorStyle = { color: colors.dark[correctColors - 1], backgroundColor: colors.light[correctColors - 1] };
  return (
    activeOrders.length !== 0 ? (
      <Text onPress={() => navigation.navigate('ActiveOrders')} style={{ ...colorStyle, marginRight: 10, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8}}>Active Orders</Text>
    ) : null
  );
};

const LeftHeaderContent = () => {
  const navigation = useNavigation()
  const { correctColors } = useContext(Storage);
  const colorStyle = { backgroundColor: colors.light[correctColors] };
  const color = { color: colors.white[correctColors - 1] };
  return (
    <Text onPress={() => navigation.navigate('ForApp')} style={{ marginHorizontal: 8, ...colorStyle, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 8, ...color}}>App</Text>
  )
}
const numberColors = () => {
  const { correctColors } = useContext(Storage);
  return correctColors > 0 ? correctColors - 1 : 0;
};