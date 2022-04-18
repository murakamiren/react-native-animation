import { StatusBar } from "expo-status-bar";
import { VFC } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Box1 from "./box1";
import Box2 from "./box2";
import Box3 from "./box3";
import Box4 from "./box4";

const Index: VFC = () => {
	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1 }}>
					<View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 16 }}>
						<Text style={{ fontSize: 32, fontWeight: "600" }}>アニメーション練習</Text>
					</View>
					<Box1 />
					<Box2 />
					<Box3 />
					<Box4 />
				</ScrollView>
			</SafeAreaView>
			<StatusBar style="auto" />
		</View>
	);
};

export default Index;
