import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import fb from "../assets/fb.png";
import pinterest from "../assets/pinterest.png";
import twitter from "../assets/twitter.png";
import yt from "../assets/yt.png";
import FooterLink from "./FooterLink";

import mobile from "../assets/mobile.jpg";
import playstore from "../assets/playstore.png";
import apple from "../assets/apple-logo.png";
import arrow from "../assets/down-arr.png";
import SmsForm from "./SmsForm";

export default function Footer() {
	return (
		<>
			<Box
				sx={{ background: "linear-gradient(#E8F1FF 100%, #E8F1FF 47%)", pt: 5 }}
			>
				<Container>
					<Grid container spacing={3} alignItems="center">
						<Grid item xs={12} md={5.5}>
							<Box src={mobile} component="img" width={1} height="auto" />
						</Grid>

						<Grid item xs={12} md={6.5}>
							<Box
								position="relative"
								pl={{ xs: "36px", md: "50px" }}
								mb={{ xs: 4, md: 0 }}
							>
								<Typography variant="h2" mb={2}>
									Download the
									<br />
									<Box component="span" color="primary.main">
										Medify{" "}
									</Box>
									App
								</Typography>

								<Box
									src={arrow}
									component="img"
									width={{ xs: 24, md: 40 }}
									position="absolute"
									left={0}
									top={50}
								/>

								<SmsForm />

								<Stack
									direction={{ xs: "column", md: "row" }}
									spacing={{ xs: 1, md: 2 }}
								>
									<Button
										sx={{
											bgcolor: "#333",
											color: "#fff",
											py: 1.5,
											borderRadius: 1.5,
										}}
										size={"large"}
										startIcon={<img src={playstore} height={24} />}
										variant="contained"
										disableElevation
									>
										Google Play
									</Button>
									<Button
										sx={{
											bgcolor: "#333",
											color: "#fff",
											py: 1.5,
											borderRadius: 1.5,
										}}
										size="large"
										startIcon={<img src={apple} height={24} />}
										variant="contained"
										disableElevation
									>
										App Store
									</Button>
								</Stack>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box bgcolor="primary.secondary" pb={3} pt={6}>
				<Container maxWidth="xl">
					<Grid container spacing={4}>
						<Grid item xs={12} md={4.5}>
							<Stack
								alignItems="flex-start"
								justifyContent="space-between"
								height={1}
							>
								<Box
									src={logo}
									height={36}
									alt="Medify"
									component="img"
									mb={2}
								/>
								<Stack direction="row" spacing={1.5}>
									<Box component="img" src={fb} height={36} />
									<Box component="img" src={twitter} height={36} />
									<Box component="img" src={yt} height={36} />
									<Box component="img" src={pinterest} height={36} />
								</Stack>
							</Stack>
						</Grid>

						<Grid item xs={12} md={2.5}>
							<Stack spacing={2}>
								<FooterLink>About Us</FooterLink>
								<FooterLink>Our Pricing</FooterLink>
								<FooterLink>Our Gallery</FooterLink>
								<FooterLink>Appointment</FooterLink>
								<FooterLink>Privacy Policy</FooterLink>
							</Stack>
						</Grid>

						<Grid item xs={12} md={2.5}>
							<Stack spacing={2}>
								<FooterLink>Orthology</FooterLink>
								<FooterLink>Neurology</FooterLink>
								<FooterLink>Dental Care</FooterLink>
								<FooterLink>Opthalmology</FooterLink>
								<FooterLink>Cardiology</FooterLink>
							</Stack>
						</Grid>

						<Grid item xs={12} md={2.5}>
							<Stack spacing={2}>
								<FooterLink>About Us</FooterLink>
								<FooterLink>Our Pricing</FooterLink>
								<FooterLink>Our Gallery</FooterLink>
								<FooterLink>Appointment</FooterLink>
								<FooterLink>Privacy Policy</FooterLink>
							</Stack>
						</Grid>
					</Grid>

					<Typography
						fontWeight={300}
						color="#fff"
						fontSize={14}
						pt={3}
						mt={5}
						borderTop="1px solid rgba(255,255,255,0.1)"
					>
						Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
					</Typography>
				</Container>
			</Box>
		</>
	);
}
