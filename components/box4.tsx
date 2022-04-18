import { useRef, VFC } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const Box4: VFC = () => {
	const transition = useRef(new Animated.Value(0)).current;
	const opacity = useRef(new Animated.Value(0)).current;

	const handleAnimate = () => {
		Animated.timing(transition, {
			toValue: 100,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const handleBackAnimate = () => {
		Animated.timing(transition, {
			toValue: -100,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const handleCenterAnimate = () => {
		Animated.timing(transition, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View style={{ alignItems: "center", marginBottom: 12 }}>
			<Text style={{ fontSize: 24, marginBottom: 12 }}>interpolation(css keyframe like)</Text>
			<Animated.View
				style={{
					width: 100,
					height: 100,
					borderRadius: 12,
					backgroundColor: "#ebb734",
					marginBottom: 12,
					transform: [
						{ translateX: transition },
						{
							rotate: transition.interpolate({
								inputRange: [-100, 0, 100],
								outputRange: ["-180deg", "0deg", "180deg"],
							}),
						},
					],
					opacity: transition.interpolate({
						inputRange: [-100, 0, 100],
						outputRange: [0, 1, 0],
					}),
				}}
			/>
			<TouchableOpacity onPress={handleAnimate}>
				<Text>animation</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={handleCenterAnimate}>
				<Text>center</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={handleBackAnimate}>
				<Text>invert</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Box4;
