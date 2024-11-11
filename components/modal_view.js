import React, { useState } from "react";
import styled from "styled-components";
import { Linking, Modal, ScrollView } from "react-native";
import {
	colors,
	Txts,
	Imgd,
	Txtb,
	Modalview,
	Img,
	Btn,
	BtnText,
	Logoc,
	Txtf,
	SpacerY,
} from "../styles/styles";
import { Entypo } from "@expo/vector-icons";

const Modal_View = () => {
	const url =
		"https://wa.me/2347014910677?text=Hi,+I+want+to+register+on+ZENITHIX";
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<Btn onPress={() => setModalVisible(true)}>
				<BtnText>How it works</BtnText>
				<Entypo
					name="chevron-down"
					size={30}
					color={colors.secondary}
				/>
			</Btn>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<ScrollView>
					<Modalview>
						<Btn onPress={() => setModalVisible(false)}>
							<Entypo
								name="cross"
								size={30}
								color={colors.secondary}
							/>
						</Btn>
						<Txtb>Earning Structure</Txtb>
						<Img
							source={require("../assets/img/earning_struct.jpg")}
						/>
						<SpacerY />
						<Txts>Registration Fee 👉🏼 $7 (#7,000)</Txts>

						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>

						<Txts>
							$6.7 (#6,700) immediately you register as CASH BACK
						</Txts>

						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>
						<Txts>
							Earn $200-$300 weekly with ZENITHIX ADVANTAGE
						</Txts>
						<Img source={require("../assets/img/zen_adv.jpg")} />
						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>
						<Txts>Boost your earning with ZENITHIX BOOST</Txts>
						<Img source={require("../assets/img/zen_boost.jpg")} />
						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>
						<Txts>
							Earn $100 weekly writing for Zenithix with ZENITHIX
							WORDSMITH WARS
						</Txts>
						<Img source={require("../assets/img/zen_ww.jpg")} />
						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>
						<Txts>
							Earn $1.5 (#1500) daily by playing games and voting
							with ZENITHIX GAMEFLICK
						</Txts>
						<Img source={require("../assets/img/gameflick.jpg")} />
						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>
						<Txts>Earn $6 (#6,000) for each referral </Txts>
						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>

						<Txts>
							Earn $10 (#10,000) weekly as salary with ZENITHIX
							SALARY
						</Txts>
						<Img source={require("../assets/img/zen_sal.jpg")} />

						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>

						<Txts>
							Earn $0.2(#200) for 1st level and $0.1(#100) on the
							2nd level as spillover with ZENITHIX SPILLOVER
						</Txts>
						<Img source={require("../assets/img/zen_spill.jpg")} />

						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>

						<Txts>
							Earn $3 (#3,000) on tiktok and IG posts per 1k views{" "}
							with ZENITHIX SOCIAL MEDIA MONETIZATION
						</Txts>
						<Img
							source={require("../assets/img/tiktok_monet.jpg")}
						/>

						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>
						<Txts>Withdraw Your Earnings</Txts>
						<Img source={require("../assets/img/zen_withd.jpg")} />
						<Imgd
							source={require("../assets/img/grey_dividerl.png")}
						/>

						<Txts>
							Register Now to start earning and take advantage of
							our package designed for your financial growth and
							benefits.
						</Txts>
						<SpacerY />
						<SpacerY />
						<Btn onPress={() => Linking.openURL(url)}>
							<BtnText>Register</BtnText>
							<Entypo
								name="add-user"
								size={30}
								color={colors.secondary}
							/>
						</Btn>
						<SpacerY />
						<SpacerY />
						<Logoc
							source={require("../assets/img/zenithix_logo.png")}
						/>
						<Txtf>...innovation at it's peak</Txtf>
					</Modalview>
				</ScrollView>
			</Modal>
		</>
	);
};

export default Modal_View;
