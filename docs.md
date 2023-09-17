//Libraries required
npx expo install react-native-safe-area-context
>npx expo install @react-native-async-storage/async-storage
>npx expo install expo-secure-store
npx expo install expo-image
npx expo install @shopify/flash-list
yarn add axios react-redux @reduxjs/toolkit
yarn add react-hook-form @hookform/resolvers yup

npx expo install firebase
// metro.config.js
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;




yarn add @react-navigation/native @react-navigation/drawer @react-navigation/bottom-tabs @react-navigation/stack 

npx expo install react-native-gesture-handler react-native-reanimated 
//first line of project app/index
import 'react-native-gesture-handler';
//babel.js
 plugins: [
        ...
        [
            'react-native-reanimated/plugin', {
                relativeSourceLocation: true,
            },
        ]
    ],


npx expo install react-native-safe-area-context 
npx expo install react-native-screens
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens'; // Import enableScreens
enableScreens(); // Enable the use of screens