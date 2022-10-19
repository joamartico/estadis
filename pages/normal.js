import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";
import IonInput from "../components/IonInput";
import { Fbinomial, Gbinomial, Pbinomial } from "../functions/binomial";
import { Fnormal, Gnormal, Pnormal, PnormalStd } from "../functions/normal";

const normal = (props) => {
	const [x, setX] = useState(undefined);
	const [µ, setµ] = useState(undefined);
	const [σ, setσ] = useState(undefined);
	const [fb, setFb] = useState(undefined);

	function calculateP() {
		let iP = 0.001;
		while (Math.abs(Fbinomial(r, n, iP) - fb) > 0.001) {
			//iP = iP + 0.001; // deberia dupicarlo o dividirlo condicionalmente
			if(Fbinomial(r, n, iP) > fb){
				iP = iP * 2
			} else {
				iP = iP * 2/3
			}
		}
		return iP;
	}

	return (
		<>
			<ion-header translucent>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-button onClick={() => Router.push("/")}>
							Back
						</ion-button>
					</ion-buttons>
					{/* <ion-title>Binomial</ion-title> */}
				</ion-toolbar>
			</ion-header>

			<ion-content>
				<ion-list>
					<ion-list-header>
						<h2>Distribución Normal</h2>
					</ion-list-header>
					<ion-item>
						<ion-label>x = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter x value"
							onChange={(e) => setX(Number(e.detail.value))}
						/>
					</ion-item>

					<ion-item>
						<ion-label>µ = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter µ value"
							onChange={(e) => setµ(Number(e.detail.value))}
						/>
					</ion-item>

					<ion-item>
						<ion-label>σ = </ion-label>
						<IonInput
							type="number"
							placeholder="Enter σ value"
							onChange={(e) => setσ(Number(e.detail.value))}
						/>
					</ion-item>

					{/* </ion-list> */}

					{x === 0 || µ === 0 || σ === 0 ? (
						<ion-item style={{ color: "red" }}>
							Faltan datos para poder calcular
						</ion-item>
					) : (
						<ion-item lines="none"></ion-item>
					)}

					{/* {n && p && x ? ( */}
					<>
						<ion-item>
							<ion-label>
								Fn({x || "x"} / {µ || "µ"} ; {σ || "σ"}) ={" "}
							</ion-label>
							{σ && µ && x ? (
								Fnormal(x, µ, σ).toFixed(5)
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
								Gn({x || "x"} / {µ || "µ"} ; {σ || "σ"}) =&nbsp;&nbsp;
								{σ && µ && x
									? Gnormal(x, µ, σ).toFixed(5)
									: ""}
							</ion-label>
						</ion-item>

						{/* <ion-item>
							<ion-label>
								Pn({x || "x"} / {µ || "µ"} ; {σ || "σ"}) =&nbsp;&nbsp;
								{σ && µ && x
									? Pnormal(x, µ, σ).toFixed(5)
									: ""}
							</ion-label>
						</ion-item> */}
					</>
					{/* ) : ( 
						 "" 
					 )} */}
				</ion-list>
			</ion-content>
		</>
	);
};

export default normal;

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
