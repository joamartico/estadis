import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";
import IonInput from "../components/IonInput";
import { Fpascal, Gpascal, Ppascal } from "../functions/pascal";

const pascal = (props) => {
	const [r, setR] = useState(undefined);
	const [n, setN] = useState(undefined);
	const [p, setP] = useState(undefined);

	return (
		<>
			<Head>
				<title>Pascal Distribution - Estadis</title>
			</Head>

			<ion-header translucent>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-button onClick={() => Router.push("/")}>
							Back
						</ion-button>
					</ion-buttons>
					{/* <ion-title>pascal</ion-title> */}
				</ion-toolbar>
			</ion-header>

			<ion-content>
				<ion-list>
					<ion-list-header>
						<h2>Distribución pascal</h2>
					</ion-list-header>

					<ion-item>
						<ion-label>n = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter n value"
							onChange={(e) => setN(Number(e.detail.value))}
						/>
					</ion-item>

					<ion-item>
						<ion-label>P = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter P(r) value"
							onChange={(e) => setP(Number(e.detail.value))}
							value={p}
						/>
					</ion-item>

					<ion-item>
						<ion-label>r = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter r value"
							onChange={(e) => setR(Number(e.detail.value))}
						/>
					</ion-item>
					{/* </ion-list> */}

					{n === 0 || p === 0 || r === 0 ? (
						<ion-item style={{ color: "red" }}>
							Faltan datos para poder calcular
						</ion-item>
					) : (
						<ion-item lines="none"></ion-item>
					)}

					{/* {n && p && r ? ( */}
					<>
						<ion-item>
							<ion-label>
								Fb({n || "n"} / {r || "r"} ; {p || "p"})
								=&nbsp;&nbsp;
								{n && p && r && Fpascal(n, r, p).toFixed(5)}
							</ion-label>
						</ion-item>

						<ion-item>
							<ion-label>
								Gb({n || "n"} / {r || "r"} ; {p || "p"})
								=&nbsp;&nbsp;
								{n && p && r ? Gpascal(n, r, p).toFixed(5) : ""}
							</ion-label>
						</ion-item>

						<ion-item>
							<ion-label>
								Pb({n || "n"} / {r || "r"} ; {p || "p"})
								=&nbsp;&nbsp;
								{n && p && r ? Ppascal(n, r, p).toFixed(5) : ""}
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

export default pascal;

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
