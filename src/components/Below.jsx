import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import IconCard from "./IconCard";
import DrugPng from "../assets/Drugstore.png";
import PrimaryPng from "../assets/primary-care.png";
import cardiPng from "../assets/cardiology.png";
import mriPng from "../assets/mri.png";
import bloodPng from "../assets/blood-test.png";
import piscPng from "../assets/piscologist.png";
import xrayPng from "../assets/X-Ray.png";

import lesleyPng from "../assets/lesley.png";
import ahmadPng from "../assets/ahmad.png";
import heenaPng from "../assets/heena.png";
import ankurPng from "../assets/ankur.png";
import stevPng from "../assets/ahmad-stevens.png";
import SpecialistCard from "./SpecialistCard";

import banner from "../assets/patientcaring.png";
import tick from "../assets/tick-blue.png";

import BlogCard from "./BlogCardComp";

import familiesbanner from "../assets/our-families-banner.png";

export default function Below() {
	const data = [
		{ icon: DrugPng, title: "Dentistry" },
		{ icon: PrimaryPng, title: "Primary Care" },
		{ icon: cardiPng, title: "Cardiology" },
		{ icon: mriPng, title: "MRI Resonance" },
		{ icon: bloodPng, title: "Blood Test" },
		{ icon: piscPng, title: "Piscologist" },
		{ icon: DrugPng, title: "Laboratory" },
		{ icon: xrayPng, title: "X-Ray" },
	];
	const specialist_data = [
		{ img: lesleyPng, title: "Dr. Lesley Hull", designation: "Medicine" },
		{ img: ahmadPng, title: "Dr. Ahmad Khan", designation: "Neurologist" },
		{ img: heenaPng, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
		{ img: ankurPng, title: "Dr. Ankur Sharma", designation: "Medicine" },
		{ img: stevPng, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
		{ img: lesleyPng, title: "Dr. Lesley Hull", designation: "Medicine" },
		{ img: ahmadPng, title: "Dr. Ahmad Khan", designation: "Neurologist" },
		{ img: heenaPng, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
		{ img: ankurPng, title: "Dr. Ankur Sharma", designation: "Medicine" },
		{ img: stevPng, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
	];
	return (
		<>
			<Box py={6}>
				<Container maxWidth="xl">
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						modules={[Pagination]}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							767: {
								slidesPerView: 3,
							},
						}}
					>
						<SwiperSlide>
							<Box component={"img"} src={offer1} />
						</SwiperSlide>

						<SwiperSlide>
							<Box component={"img"} src={offer2} />
						</SwiperSlide>

						<SwiperSlide>
							<Box component={"img"} src={offer1} />
						</SwiperSlide>

						<SwiperSlide>
							<Box component={"img"} src={offer2} />
						</SwiperSlide>

						<SwiperSlide>
							<Box component={"img"} src={offer1} />
						</SwiperSlide>

						<SwiperSlide>
							<Box component={"img"} src={offer2} />
						</SwiperSlide>
					</Swiper>
				</Container>
			</Box>
			<Box py={6} sx={{ background: "linear-gradient(#E8F1FF, #E8F1FF)" }}>
				<Container sx={{ textAlign: "center" }}>
					<Typography variant="h2" mb={4}>
						Find by specialisation
					</Typography>

					<Grid
						container
						spacing={{ xs: 1, md: 3 }}
						mb={5}
						justifyContent={"center"}
					>
						{data.map((item) => (
							<Grid item xs={4} md={3} key={item.title}>
								<IconCard
									img={item.icon}
									title={item.title}
									bgColor={"#FFFFFF"}
									shadow={true}
								/>
							</Grid>
						))}
					</Grid>

					<Button variant="contained" size="large" disableElevation>
						View All
					</Button>
				</Container>
			</Box>
			<Box py={4} id="find-doctors">
				<Typography variant="h2" textAlign="center" mb={3} px={2}>
					Our Medical Specialist
				</Typography>
				<Swiper
					slidesPerView={2}
					spaceBetween={20}
					loop={true}
					centeredSlides={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination]}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						767: {
							slidesPerView: 4,
						},
					}}
				>
					{specialist_data.map((doc, index) => (
						<SwiperSlide key={index}>
							<SpecialistCard
								img={doc.img}
								title={doc.title}
								designation={doc.designation}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
			<Box py={6} sx={{ background: "linear-gradient(#E8F1FF, #E8F1FF)" }}>
				<Container>
					<Grid container spacing={6} alignItems="center">
						<Grid item xs={12} md={6}>
							<Box component="img" src={banner} width={1} />
						</Grid>

						<Grid item xs={12} md={6}>
							<Typography fontWeight={600} color="primary.main">
								HELPING PATIENTS FROM AROUND THE GLOBE!!
							</Typography>
							<Typography variant="h2" mb={1}>
								Patient{" "}
								<Box component="span" color="primary.main">
									Caring
								</Box>
							</Typography>
							<Typography color="#77829D" lineHeight={1.8}>
								Our goal is to deliver quality of care in a courteous,
								respectful, and compassionate manner. We hope you will allow us
								to care for you and strive to be the first and best choice for
								healthcare.
							</Typography>

							<List sx={{ fontSize: { xs: 12, md: 18 } }}>
								<ListItem disableGutters>
									<ListItemIcon sx={{ minWidth: 32 }}>
										<Box component="img" src={tick} height={22} width={22} />
									</ListItemIcon>
									<ListItemText
										primary="Stay Updated About Your Health"
										primaryTypographyProps={{
											fontSize: { xs: 14, md: 18 },
											fontWeight: 500,
											color: "#1B3C74",
										}}
									/>
								</ListItem>
								<ListItem disableGutters>
									<ListItemIcon sx={{ minWidth: 32 }}>
										<Box component="img" src={tick} height={22} width={22} />
									</ListItemIcon>
									<ListItemText
										primary="Check Your Results Online"
										primaryTypographyProps={{
											fontSize: { xs: 14, md: 18 },
											fontWeight: 500,
											color: "#1B3C74",
										}}
									/>
								</ListItem>
								<ListItem disableGutters>
									<ListItemIcon sx={{ minWidth: 32 }}>
										<Box component="img" src={tick} height={22} width={22} />
									</ListItemIcon>
									<ListItemText
										primary="Manage Your Appointments"
										primaryTypographyProps={{
											fontSize: { xs: 14, md: 18 },
											fontWeight: 500,
											color: "#1B3C74",
										}}
									/>
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box py={6}>
				<Container>
					<Typography color="primary.main" fontWeight={600} textAlign="center">
						Blog & News
					</Typography>
					<Typography textAlign="center" variant="h2" mb={2}>
						Read Our Latest News
					</Typography>

					<Grid container spacing={4}>
						<Grid item xs={12} md={4}>
							<BlogCard />
						</Grid>
						<Grid item xs={12} md={4}>
							<BlogCard />
						</Grid>
						<Grid item xs={12} md={4}>
							<BlogCard />
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box pt={3} sx={{ background: "linear-gradient(#E8F1FF, #E8F1FF)" }}>
				<Container>
					<Grid container alignItems="center" spacing={{ xs: 2, md: 10 }}>
						<Grid item xs={12} md={6}>
							<Typography fontWeight={600} color="primary.main">
								CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
							</Typography>
							<Typography variant="h2">Our Families</Typography>
							<Typography color="#77829D" lineHeight={1.8}>
								We will work with you to develop individualised care plans,
								including management of chronic diseases. If we cannot assist,
								we can provide referrals or advice about the type of
								practitioner you require. We treat all enquiries sensitively and
								in the strictest confidence.
							</Typography>
						</Grid>

						<Grid item xs={12} md={6}>
							<Box
								component="img"
								src={familiesbanner}
								width={1}
								height="auto"
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
