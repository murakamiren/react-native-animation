import { useRef, VFC } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const Box3: VFC = () => {
	const firstOpacity = useRef(new Animated.Value(0)).current;
	const secondOpacity = useRef(new Animated.Value(0)).current;
	const thirdOpacity = useRef(new Animated.Value(0)).current;

	const staggerValue: number = 200;

	const handleAllOpacity = () => {
		Animated.stagger(staggerValue, [
			Animated.timing(firstOpacity, {
				toValue: 1,
				useNativeDriver: true,
			}),
			Animated.timing(secondOpacity, {
				toValue: 1,
				useNativeDriver: true,
			}),
			Animated.timing(thirdOpacity, {
				toValue: 1,
				useNativeDriver: true,
			}),
		]).start();
	};

	const handleBackAllOpacity = () => {
		Animated.stagger(staggerValue, [
			Animated.timing(firstOpacity, {
				toValue: 0,
				useNativeDriver: true,
			}),
			Animated.timing(secondOpacity, {
				toValue: 0,
				useNativeDriver: true,
			}),
			Animated.timing(thirdOpacity, {
				toValue: 0,
				useNativeDriver: true,
			}),
		]).start();
	};

	return (
		<View style={{ alignItems: "center", marginBottom: 16 }}>
			<Text style={{ fontSize: 20, marginBottom: 12 }}>stagger</Text>
			<Animated.View
				style={{ width: 100, height: 100, borderRadius: 12, backgroundColor: "#333", opacity: firstOpacity }}
			/>
			<Animated.View
				style={{
					width: 100,
					height: 100,
					borderRadius: 12,
					backgroundColor: "#333",
					marginVertical: 8,
					opacity: secondOpacity,
				}}
			/>
			<Animated.View
				style={{
					width: 100,
					height: 100,
					borderRadius: 12,
					backgroundColor: "#333",
					marginBottom: 12,
					opacity: thirdOpacity,
				}}
			/>
			<TouchableOpacity onPress={handleAllOpacity}>
				<Text>show</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={handleBackAllOpacity}>
				<Text>hide</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Box3;
