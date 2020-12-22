import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Em, Span, Image, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(http://www.talkativeman.com/img/Sri_Ramakrishna_Paramahamsa.jpg) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Box opacity="1">
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="right"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
					text-decoration-line="underline"
					color="#dee1f5"
					border-style="ridge"
				>
					Amritam
					<br />
					qoutes
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				/>
				<StackItem width="25%" lg-width="50%" sm-width="100%" />
				<StackItem width="25%" lg-width="50%" sm-width="100%" />
				<StackItem width="25%" lg-width="50%" sm-width="100%" />
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Hi There i am akash😀
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				About this
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea.Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. So solely out of interest
						<br />
						i have created this{" "}
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong
								data-q-widget-type="PRIMITIVE"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font-style="italic"
							>
								Quotations Site{" "}
							</Strong>
							<Span
								data-q-widget-type="PRIMITIVE"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Em>
									based on a small  pocket book{" "}
								</Em>
								{" "}available in the premises of Ramkrishna Mission ,Sahudangi,Siliguri
							</Span>
						</Span>
					</Text>
				</StackItem>
				<Components.Roundimage>
					<Image width="64px" height="64px" src="https://images.unsplash.com/photo-1608539398940-37596ac33267?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
				</Components.Roundimage>
			</Stack>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ramakrishna.jpg/1200px-Ramakrishna.jpg) center/contain">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					#QUOte1
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					If a man clings tenaciously to the truth,he ultimately realizes God..
				</Text>
				<Text font="--base">
					- Shri Ramkrishna Paramhans
				</Text>
			</Box>
		</Section>
		<List />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});