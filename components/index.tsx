import { StatusBar } from "expo-status-bar";
import { VFC } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Box1 from "./box1";
import Box2 from "./box2";

const Index: VFC = () => {
	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 16 }}>
					<Text style={{ fontSize: 32, fontWeight: "600" }}>アニメーション練習</Text>
				</View>
				<Box1 />
				<Box2 />
			</SafeAreaView>
			<StatusBar style="auto" />
		</View>
	);
};

export default Index;
