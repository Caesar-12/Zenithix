import React from "react";
import { Linking } from "react-native";
import {
	HeaderView,
	HeaderButton,
	HeaderTitle,
	colors,
	Logo,
} from "../styles/styles";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
	const url =
		"https://wa.me/2347014910677?text=Hi,+I+want+to+register+on+ZENITHIX";

	return (
		<HeaderView>
			<Logo source={require("../assets/img/logo_mix.png")} />
			<HeaderButton>
				<Entypo
					onPress={() => Linking.openURL(url)}
					name="add-user"
					size={30}
					color={colors.sec_lighter}
				/>
			</HeaderButton>
		</HeaderView>
	);
};

export default Header;
