import { useRef, VFC } from "react";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";

const Box1: VFC = () => {
	const transition = useRef(new Animated.Value(0)).current;
	const transitionValue: number = 120;

	const handleAnimation = () => {
		Animated.timing(transition, {
			toValue: transitionValue,
			duration: 1000,
			useNativeDriver: true,
			easing: Easing.bounce,
		}).start();
	};

	const handleAnimateLeft = () => {
		Animated.timing(transition, {
			toValue: -transitionValue,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const handleBackAnimation = () => {
		Animated.spring(transition, {
			toValue: 0,
			useNativeDriver: true,
		}).start();
	};

	return (
		<>
			<View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 12 }}>
				<Text style={{ fontSize: 20 }}>timingとspring</Text>
			</View>

			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<Animated.View
					style={{
						width: 100,
						height: 100,
						backgroundColor: "tomato",
						borderRadius: 16,
						transform: [{ translateX: transition }],
					}}
				/>
			</View>
			<View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16, marginHorizontal: 12 }}>
				<TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={handleAnimateLeft}>
					<Text style={{ fontSize: 16 }}>animate left</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={handleBackAnimation}>
					<Text style={{ fontSize: 16 }}>center</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ flexDirection: "row", justifyContent: "center" }} onPress={handleAnimation}>
					<Text style={{ fontSize: 16 }}>animate right</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Box1;
