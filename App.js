import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Container } from "./styles/styles";

import ImageScroll from "./components/image_scroll";
import Home from "./components/home";

export default function App() {
	return (
		<Container>
			<StatusBar style="light" />
			<Home />
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ce7e00",
		justifyContent: "space-between",
	},
	mainContent: {
		flex: 1,
		backgroundColor: "#744700", // Main content background color
	},
});
