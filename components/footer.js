import React from "react";
import {
	Txts,
	Txtb,
	Logoc,
	Txtf,
	Logof,
	Btnf,
	SpacerY,
} from "../styles/styles";
import { Linking } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Footer = () => {
	const Tg = "https://t.me/zenithixofficial1";
	const Wc =
		"https://wa.me/2347014910677?text=Hi,+I+want+to+register+on+ZENITHIX";
	const Wg = "https://whatsapp.com/channel/0029Van0oaHKWEKiR90IrL1V";

	return (
		<>
			<SpacerY />
			<Txtb> Join us... </Txtb>
			<Btnf>
				<FontAwesome5
					onPress={() => Linking.openURL(Wc)}
					name="whatsapp"
					size={30}
					color="#a23806"
				/>
				<FontAwesome5
					onPress={() => Linking.openURL(Tg)}
					name="telegram"
					size={30}
					color="#a23806"
				/>
				<FontAwesome5
					onPress={() => Linking.openURL(Wg)}
					name="users"
					size={30}
					color="#a23806"
				/>
			</Btnf>
			<SpacerY />
			<SpacerY />

			<Logoc source={require("../assets/img/zenithix_logo.png")} />
			<Txtf>...innovation at it's peak</Txtf>
			<Txts>All rights reserved ©Zenithix 2024</Txts>
		</>
	);
};

export default Footer;
