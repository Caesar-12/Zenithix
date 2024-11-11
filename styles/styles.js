import styles from "styled-components";
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	TouchableHighlight,
	SafeAreaView,
	TextInput,
} from "react-native";
import Constants from "expo-constants";
import styled from "styled-components";

//colors
export const colors = {
	primary: "#a23806",
	secondary: "#6f3012",
	sec_light: "#9c5a3a",
	sec_lighter: "#e88c60",
	tertiary: "#d77142",
	white: "#ffffff",
	off_white: "#ddc7bd",
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
	background-color: ${colors.secondary};
	padding: 10px;
	padding-bottom: 0px;
	flex: 1;
	padding-top: ${statusBarHeight}px;
`;

export const HeaderView = styled.View`
	background-color: ${colors.sec_light};
	padding: 10px;
	width: 100%;
	padding-vertical: 10px;
	margin-bottom: 20px;
	margin-top: 20px;
	border-radius: 20px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
`;

export const Logo = styled.Image`
	width: 150px;
	height: 40px;
`;

export const HeaderTitle = styled.Text`
	font-size: 35px;
	font-weight: bold;
	color: ${colors.white};
	letter-spacing: 2px;
	font-style: italic;
	justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity`
	font-weight: bold;
	color: ${colors.secondary};
`;

export const ListContainer = styled.View`
	margin-bottom: 30px;
	flex: 1;
	padding-bottom: radius;
`;

export const Img = styled.Image`
	width: 95%;
	height: 400px;
	margin: 20px auto;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
`;

export const Imgd = styled.Image`
	width: 95%;
	height: 10px;
	margin: 10px auto;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
`;

export const Txtb = styled.Text`
	font-size: 40px;
	font-weight: 600;
	font-family: sans-serif;
	color: ${colors.off_white};
	margin: 0 auto;
`;

export const Txts = styled.Text`
	font-size: 17.5px;
	font-weight: 700;
	font-family: sans-serif;
	color: ${colors.off_white};
	margin: 10px auto;
`;

export const Txtsb = styled.Text`
	font-size: 20px;
	font-weight: 600;
	font-family: sans-serif;
	color: ${colors.off_white};
	margin: 0 auto;
`;

export const Txt = styled.Text`
	font-size: 15px;
	font-weight: 400;
	font-family: sans-serif-medium;
	color: ${colors.off_white};
	margin: 10px 20px;
`;

export const Logof = styled.Image`
	margin: 0 auto;
	width: 150px;
	height: 40px;
`;

export const Logoc = styled.Image`
	margin: 0 auto;
	width: 30px;
	height: 40px;
`;

export const Txtf = styled.Text`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.sec_lighter};
	margin: 0 auto;
`;

export const Btnf = styled.TouchableOpacity`
	background-color: ${colors.off_white};
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	padding: 10px 20px;
	margin: 20px auto;
	justify-content: space-between;
	align-items: center;
	gap: 35px;
	border-radius: 20px;
`;

export const Btn = styled.TouchableOpacity`
	background-color: ${colors.off_white};
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	padding: 10px;
	margin: 10px auto;
	border-radius: 20px;
`;

export const BtnText = styled.Text`
	font-size: 20px;
	font-weight: 600;
	color: ${colors.secondary};
	margin: auto 5px;
`;

export const Modalview = styled.View`
	margin: 20px 10px;
	padding: 5px;
	background-color: ${colors.sec_light};
	border-radius: 20px;
`;

export const SpacerY = styled.View`
	margin: 15px 0;
`;
