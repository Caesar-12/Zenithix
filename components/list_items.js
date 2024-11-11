import React from "react";
import styled from "styled-components";
import { Linking } from "react-native";
import {
	colors,
	Txt,
	Txtb,
	Txtsb,
	Img,
	Btn,
	BtnText,
	SpacerY,
} from "../styles/styles";
import { Entypo } from "@expo/vector-icons";
import Modal_View from "./modal_view";

const ListItems = () => {
	const url =
		"https://wa.me/2347014910677?text=Hi,+I+want+to+register+on+ZENITHIX";

	return (
		<>
			<Txtb>Zenithix ?</Txtb>
			<Txt>
				Zenithix is a groundbreaking platform designed to revolutionize
				social media engagement, skill development, and reward earning,
				combining innovation, creativity, and community. Born from a
				desire to go beyond the conventional, our passionate team
				recognized the need for a space where users can connect, share,
				earn, and learn in meaningful ways. From humble beginnings, our
				journey has been driven by a commitment to innovation and user
				empowerment.
			</Txt>
			<Img source={require("../assets/img/zenithix.jpg")} />
			<SpacerY />
			<Btn onPress={() => Linking.openURL(url)}>
				<BtnText>Register</BtnText>
				<Entypo name="add-user" size={30} color={colors.secondary} />
			</Btn>
			<SpacerY />
			<Txtb>Why Join us ?</Txtb>
			<SpacerY />
			<Txtsb>Exceptional Innovation </Txtsb>
			<Txt>
				At Zenithix, we are committed to pushing the boundaries of
				technology to bring you unique and valuable experiences. Our
				platform is designed to provide innovative solutions that
				enhance your digital life.
			</Txt>
			<SpacerY />
			<SpacerY />
			<Modal_View />
			<SpacerY />
			<SpacerY />
			<SpacerY />
			<Txtb>We're registered</Txtb>
			<Img source={require("../assets/img/zen_cac.jpg")} />
			<SpacerY />
			<SpacerY />
			<Txtb>Keep In Mind</Txtb>
			<Img source={require("../assets/img/zen_prom.jpg")} />
			<SpacerY />
			<SpacerY />
			<Txtb>Here just for you</Txtb>
			<Img source={require("../assets/img/zen.jpg")} />
			<SpacerY />
			<SpacerY />
		</>
	);
};

export default ListItems;
