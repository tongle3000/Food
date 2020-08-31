import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation-reduxthunk';
import store from './store/index-reduxthunk';


/**
 * import Navigation from './navigation';
 * import store from './store';
 * 
 * redux-thunk
 * import Navigation from './navigation-reduxthunk';
 * import store from './store/index-reduxthunk';
 */
export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Provider store={store}>
					<Navigation colorScheme={colorScheme} />
					<StatusBar />
				</Provider>
			</SafeAreaProvider>
		);
	}
}
