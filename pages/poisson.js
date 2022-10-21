import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";
import IonInput from "../components/IonInput";
import { Fpoisson, Gpoisson, Ppoisson } from "../functions/poisson";

const poisson = (props) => {
	const [r, setR] = useState(undefined);
	const [m, setM] = useState(undefined);

	const [fb, setFb] = useState(undefined);

	function calculateP() {
		let iP = 0.001;
		while (Math.abs(Fpoisson(r, n, iP) - fb) > 0.001) {
			//iP = iP + 0.001; // deberia dupicarlo o dividirlo condicionalmente
			if (Fpoisson(r, n, iP) > fb) {
				iP = iP * 1.2;
			} else {
				iP = iP * 0.7;
			}
			console.log(iP);
		}
		setP(iP.toFixed(5));
		return iP;
	}

	return (
		<>
			<Head>
				<title>Poisson Distribution - Estadis</title>
			</Head>

			<ion-header translucent>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-button onClick={() => Router.push("/")}>
							Back
						</ion-button>
					</ion-buttons>
					{/* <ion-title>poisson</ion-title> */}
				</ion-toolbar>
			</ion-header>

			<ion-content>
				<ion-list>
					<ion-list-header>
						<h2>Distribución poisson</h2>
					</ion-list-header>

					<ion-item>
						<ion-label>r = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter r value"
							onChange={(e) => setR(Number(e.detail.value))}
						/>
					</ion-item>

					<ion-item>
						<ion-label>m = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter m value"
							onChange={(e) => setM(Number(e.detail.value))}
						/>
					</ion-item>
					{/* </ion-list> */}

					{/* {n && r && fb && !p ? (
						<ion-button onClick={() => calculateP()}>
							Calcular P
						</ion-button>
					) : n === 0 || p === 0 || r === 0 ? (
						<ion-item style={{ color: "red" }}>
							Faltan datos para poder calcular
						</ion-item>
					) : (
						<ion-item lines="none"></ion-item>
					)} */}

					<ion-item></ion-item>

					<>
						<ion-item>
							<ion-label>
								Fb({r || "r"} / {m || "m"}) ={" "}
							</ion-label>
							{r && m ? (
								Fpoisson(r, m).toFixed(5)
							) : (
								<IonInput
									// placeholder="Enter Fb"
									type="number"
									onChange={(e) =>
										setFb(Number(e.detail.value))
									}
								/>
							)}
						</ion-item>

						<ion-item>
							<ion-label>
								Gb({r || "r"} / {m || "m"}) =&nbsp;&nbsp;
								{r && m ? Gpoisson(r, m).toFixed(5) : ""}
							</ion-label>
						</ion-item>

						<ion-item>
							<ion-label>
								Pb({r || "r"} / {m || "m"}) =&nbsp;&nbsp;
								{r && m ? Ppoisson(r, m).toFixed(5) : ""}
							</ion-label>
						</ion-item>
					</>
					{/* ) : ( 
						 "" 
					 )} */}
				</ion-list>
			</ion-content>
		</>
	);
};

export default poisson;

const Button = styled.div`
	height: 60px;
	margin: 25px auto;
	width: 90%;
	border-radius: 10px;
	background: var(--ion-color-primary);
	font-size: 16px;
	font-weight: bold;

	display: flex;
	justify-content: center;
	align-items: center;
`;
