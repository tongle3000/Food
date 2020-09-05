/**
 * ComponentWillMount
 * 
 * 自定义 hook ComponentWillMount
 */
import { useRef } from 'react';

export const useComponentWillMount = (func: () => void, []) => {
	const willMount =useRef(true);
	if (willMount.current) {
		func();
	}
	willMount.current = false;
}
