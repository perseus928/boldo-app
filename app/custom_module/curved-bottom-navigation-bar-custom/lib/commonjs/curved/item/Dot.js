"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _reactFastCompare=_interopRequireDefault(require("react-fast-compare"));var _reactNativeReanimated=_interopRequireWildcard(require("react-native-reanimated"));var _style=require("./style");var _IconDot=require("./IconDot");var _constant=require("../constant");var _this=void 0,_jsxFileName="/Users/hongngoc/Desktop/curved-bottom-navigation-bar/src/curved/item/Dot.tsx";var DotComponent=function DotComponent(props){var selectedIndex=props.selectedIndex,routes=props.routes,progress=props.progress,width=props.width,dotColor=props.dotColor,dotSize=props.dotSize,barHeight=props.barHeight;var translateX=(0,_reactNativeReanimated.interpolate)(selectedIndex,{inputRange:routes.map(function(item,index){return index;}),outputRange:routes.map(function(item,index){return index*width/routes.length+width/routes.length/2-dotSize/2;})});var translateY=(0,_reactNativeReanimated.interpolate)(progress,{inputRange:[0,1],outputRange:[0,-(barHeight-_constant.HEIGHT_HOLE+5)]});var opacity=(0,_reactNativeReanimated.interpolate)(progress,{inputRange:[0,1],outputRange:[0.2,1]});var iconContainerStyle=[{opacity:opacity,justifyContent:'center',alignItems:'center'}];var dotStyle=[_style.styles.dot,{width:dotSize,backgroundColor:dotColor,height:dotSize,bottom:0,borderRadius:dotSize/2,transform:[{translateX:translateX},{translateY:translateY}]}];return _react.default.createElement(_reactNativeReanimated.default.View,{style:dotStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:9}},_react.default.createElement(_reactNativeReanimated.default.View,{style:iconContainerStyle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:46,columnNumber:13}},routes.map(function(_ref,index){var icon=_ref.icon;return _react.default.createElement(_IconDot.IconDot,{key:index,index:index,selectedIndex:selectedIndex,__self:_this,__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:21}},icon({progress:progress}));})));};var Dot=(0,_react.memo)(DotComponent,function(prevProps,nextProps){return(0,_reactFastCompare.default)(prevProps,nextProps);});var _default=Dot;exports.default=_default;
//# sourceMappingURL=Dot.js.map