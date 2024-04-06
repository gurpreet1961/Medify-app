import { Container, Box, Stack, Grid, Typography } from "@mui/material";
import HeroSlider from "../components/HeroSlider";
import HospitalSearch from "../components/Search";
import FAQs from "../components/FAQs";
import Navbar from "../components/Navbar";
import Below from "../components/Below";
import DocPng from "../assets/Doctor.png";
import DrugPng from "../assets/Drugstore.png";
import HosPng from "../assets/Hospital.png";
import CapPng from "../assets/Capsule.png";
import AmbPng from "../assets/Ambulance.png";
import IconCard from "../components/IconCard";
export default function Home() {
	const USPs = [
		{ img: DocPng, title: "Doctors" },
		{ img: DrugPng, title: "Labs" },
		{ img: HosPng, title: "Hospitals", active: true },
		{ img: CapPng, title: "Medical Store" },
		{ img: AmbPng, title: "Ambulance" },
	];
	return (
		<Box>
			<Box
				sx={{
					background:
						"linear-gradient(#E8F1FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
				}}
				mb={4}
			>
				<Navbar />
				<Container maxWidth="xl">
					<HeroSlider />
					<Stack
						p={{ xs: 2.5, md: 8 }}
						mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
						position="relative"
						zIndex={99}
						bgcolor="#fff"
						borderRadius="15px"
						spacing={10}
						boxShadow="0 0 12px rgba(0,0,0,0.1)"
					>
						<HospitalSearch />
						<Box>
							<Typography
								component="h4"
								fontSize={20}
								color="#102851"
								fontWeight={500}
								textAlign="center"
								mb={2}
							>
								You may be looking for
							</Typography>
							<Grid
								container
								columnSpacing={{ xs: 1, md: 2 }}
								justifyContent={"center"}
							>
								{USPs.map((usp) => (
									<Grid item key={usp.title} xs={4} md={2.4}>
										<IconCard
											img={usp.img}
											title={usp.title}
											active={usp.active || false}
											bgColor="#FAFBFE"
										/>
									</Grid>
								))}
							</Grid>
						</Box>
					</Stack>
				</Container>
			</Box>

			<Below />

			<FAQs />
		</Box>
	);
}
