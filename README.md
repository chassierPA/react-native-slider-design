# react-native-slider-design

A react-native component customable developed in typescript !

![](./screenshots/demo.gif)

| Plateform        | Compatibility           |
| ------------- |:-------------:|
| Android     | YES |
| IOS      | YES      |


### Instalation

```shell
npm -i react-native-slider-design
```

or 

```shell
yarn add react-native-slider-design
```

### Basic Usage 

*Becarful the basic usage use the package react-native-vector-icons package to render SVG icons. If you are not using this package you also can use any component you want.*

```tsx

import React, { Fragment } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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

export default App;

```

### Props

Prop                  | Type     | Optional | Default                   | Description
--------------------- | -------- | ------ | ------------------------- | -----------
datas                 | SliderType   | NO      | [ { } ]                         | Datas used to render the slider
startIndex              | number     | YES      | 0                     | The start index of the slider | number   | YES      | 0                         | Initial minimum value of the slider
opacity          | boolean   | Yes      | 1                         | If true the opacity will be set at 0.2 | |
style | StyleSheet | YES | { } | Styling the component use **container** structure to styling the slider's container / use the **ActiveItem** to style the active item / use the **InactiveItem** to style the active items.


---
**MIT Licensed**