import React, { useEffect } from "react";
import { Audio } from "expo-av";

const BackgroundSound = () => {
	useEffect(() => {
		let soundObject;

		const loadSound = async () => {
			try {
				soundObject = new Audio.Sound();
				await soundObject.loadAsync(
					require("../assets/sounds/midnight-quirk.mp3")
				);
				await soundObject.setIsLoopingAsync(true);
				await soundObject.playAsync();
			} catch (error) {
				console.log("Error loading sound", error);
			}
		};

		loadSound();

		return () => {
			if (soundObject) {
				soundObject.unloadAsync(); // Stop and unload sound when component unmounts
			}
		};
	}, []);

	return null;
};

export default BackgroundSound;
