import { useRef, VFC } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const Box2: VFC = () => {
	const transition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	const handleAnimate = () => {
		Animated.parallel([
			Animated.spring(transition.x, {
				toValue: 100,
				useNativeDriver: true,
			}),
			Animated.spring(transition.y, {
				toValue: 100,
				useNativeDriver: true,
			}),
		]).start();
	};

	const handleAnimateSequence = () => {
		Animated.sequence([
			Animated.spring(transition.x, {
				toValue: -100,
				useNativeDriver: true,
			}),
			Animated.spring(transition.y, {
				toValue: 100,
				useNativeDriver: true,
			}),
		]).start();
	};

	const handleBackAnimate = () => {
		Animated.parallel([
			Animated.spring(transition.x, {
				toValue: 0,
				useNativeDriver: true,
			}),
			Animated.spring(transition.y, {
				toValue: 0,
				useNativeDriver: true,
			}),
		]).start();
	};
	return (
		<View style={{ marginVertical: 16 }}>
			<View style={{ alignItems: "center" }}>
				<Text style={{ fontSize: 20, marginBottom: 12 }}>animated.sequence,parallel</Text>
				<Animated.View
					style={{
						width: 100,
						height: 100,
						borderRadius: 12,
						backgroundColor: "skyblue",
						marginBottom: 12,
						transform: [{ translateX: transition.x, translateY: transition.y }],
					}}
				/>
				<TouchableOpacity onPress={handleAnimate}>
					<Text>animate</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleAnimateSequence}>
					<Text>animate sequence</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleBackAnimate}>
					<Text>back</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Box2;
