/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Slider from './src/Slider/Slider';

const datas = [
  {
    onPress: (id: any) => (console.log(id)),
    id: 0,
    icon: <Icon name="rocket" size={30} color="#900" />,
  },
  {
    onPress: (id: any) => (console.log(id)),
    id: 1,
    icon: <Icon name="ambulance" size={30} color="#100" />
  },
  {
    onPress: (id: any) => (console.log(id)),
    id: 2,
    icon: <Icon name="anchor" size={30} color="#723900" />
  }
]

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#003972', justifyContent: 'center', flex: 1 }}>
        <Slider datas={datas}
          staticDesign
          style={{
            container: {
              marginTop: '2%',
            }
          }}
        />

        <Slider datas={datas}
          style={{
            container: {
              marginTop: '2%',
            }
          }}
        />
        <Slider datas={datas}
          opacity
          style={{
            container: {
              marginTop: '2%',
            }
          }}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.dark,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.dark,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
