import { useRef, VFC } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const Box1: VFC = () => {
	const transition = useRef(new Animated.Value(0)).current;
	const transitionValue: number | Animated.Value = 150;

	const handleAnimation = () => {
		Animated.timing(transition, {
			toValue: transitionValue,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const handleBackAnimation = () => {
		Animated.timing(transition, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	return (
		<>
			<Animated.View
				style={{
					width: 100,
					height: 100,
					backgroundColor: "tomato",
					borderRadius: 16,
					transform: [{ translateX: transition }],
				}}
			/>
			<TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={handleAnimation}>
				<Text style={{ marginTop: 8, fontSize: 24 }}>animate</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={handleBackAnimation}>
				<Text style={{ marginTop: 8, fontSize: 24 }}>back</Text>
			</TouchableOpacity>
		</>
	);
};

export default Box1;
