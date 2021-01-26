var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.AnimatedTabBar=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNativeReanimated=_interopRequireWildcard(require("react-native-reanimated"));var _reactNativeRedash=require("react-native-redash");var _native=require("@react-navigation/native");var _CurvedTabBar=_interopRequireDefault(require("./curved/CurvedTabBar"));var _constant=require("./curved/constant");var _this=this,_jsxFileName="/Users/hongngoc/Desktop/curved-bottom-navigation-bar/src/AnimatedTabBar.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}_reactNativeReanimated.default.addWhitelistedNativeProps({width:true,stroke:true,backgroundColor:true});var AnimatedTabBar=function AnimatedTabBar(props){var navigation=props.navigation,tabs=props.tabs,descriptors=props.descriptors,_props$duration=props.duration,duration=_props$duration===void 0?_constant.DEFAULT_ITEM_ANIMATION_DURATION:_props$duration,_props$barColor=props.barColor,barColor=_props$barColor===void 0?_constant.TAB_BAR_COLOR:_props$barColor,_props$dotSize=props.dotSize,dotSize=_props$dotSize===void 0?_constant.SIZE_DOT:_props$dotSize,_props$dotColor=props.dotColor,dotColor=_props$dotColor===void 0?_constant.TAB_BAR_COLOR:_props$dotColor;var isReactNavigation5=props.state?true:false;var _useMemo=(0,_react.useMemo)(function(){if(isReactNavigation5){return props.state;}else{return{index:props.navigation.state.index,routes:props.navigation.state.routes,key:''};}},[props,isReactNavigation5]),routes=_useMemo.routes,navigationIndex=_useMemo.index,navigationKey=_useMemo.key;var _useValues=(0,_reactNativeRedash.useValues)(0),_useValues2=(0,_slicedToArray2.default)(_useValues,1),selectedIndex=_useValues2[0];var getRouteTitle=(0,_react.useCallback)(function(route){if(isReactNavigation5){var options=descriptors[route.key].options;return options.tabBarLabel!==undefined&&typeof options.tabBarLabel==='string'?options.tabBarLabel:options.title!==undefined?options.title:route.name;}else{return route.key;}},[isReactNavigation5,descriptors]);var getRouteTabConfigs=(0,_react.useCallback)(function(route){if(isReactNavigation5){return tabs[route.name];}else{return tabs[route.key];}},[isReactNavigation5,tabs]);var getRoutes=(0,_react.useCallback)(function(){return routes.map(function(route){return _objectSpread({key:route.key},getRouteTabConfigs(route));});},[routes,getRouteTitle,getRouteTabConfigs]);var handleSelectedIndexChange=function handleSelectedIndexChange(index){if(isReactNavigation5){var _routes$index=routes[index],key=_routes$index.key,name=_routes$index.name;var event=navigation.emit({type:'tabPress',target:key,canPreventDefault:true});if(!event.defaultPrevented){navigation.dispatch(_objectSpread(_objectSpread({},_native.CommonActions.navigate(name)),{},{target:navigationKey}));}}else{var onTabPress=props.onTabPress;onTabPress({route:routes[index]});}};(0,_reactNativeReanimated.useCode)(function(){return(0,_reactNativeReanimated.call)([selectedIndex],function(args){handleSelectedIndexChange(args[0]);});},[selectedIndex]);(0,_reactNativeReanimated.useCode)(function(){return(0,_reactNativeReanimated.set)(selectedIndex,navigationIndex);},[navigationIndex]);return _react.default.createElement(_CurvedTabBar.default,{dotColor:dotColor,barHeight:_constant.TAB_BAR_HEIGHT,dotSize:dotSize,tabBarColor:barColor,selectedIndex:selectedIndex,routes:getRoutes(),duration:duration,__self:_this,__source:{fileName:_jsxFileName,lineNumber:153,columnNumber:5}});};exports.AnimatedTabBar=AnimatedTabBar;
//# sourceMappingURL=AnimatedTabBar.js.map