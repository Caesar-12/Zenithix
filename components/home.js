import React from "react";
import Header from "./header";
import { ScrollView } from "react-native";
import ListItems from "./list_items";
import Footer from "./footer";
import BackgroundSound from "./background_sound";

const Home = () => {
	return (
		<ScrollView>
			<BackgroundSound />
			<Header />
			<ListItems />
			<Footer />
		</ScrollView>
	);
};

export default Home;
