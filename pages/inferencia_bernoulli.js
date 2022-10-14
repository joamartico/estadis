import Router from "next/router";
import { useState } from "react";
import IonInput from "../components/IonInput";
import { Fbinomial, Gbinomial } from "../functions/binomial";

const inferencia_bernoulli = () => {
	const [option, setOption] = useState(null);
	const [po, setPo] = useState(undefined);
	const [α, setα] = useState(undefined);
	const [p1, setP1] = useState(undefined);
	const [β, setβ] = useState(undefined);
	const [best, setBest] = useState({});

	function calculateCaso1() {
		let best = {};
		best.resα = 1;
		best.resβ = 1;

		let iN = 1;
		while (best.resα > 0 && best.resβ > 0) {
			for (
				let iRc = Math.floor(iN * 0.01);
				iRc < Math.floor(iN * 0.025);
				iRc++
			) {
				const Gb = Gbinomial(iRc, iN, po); // α
				const Fb = Fbinomial(iRc - 1, iN, p1); // β
				let res = Gb + Fb - (α + β);
				let resα = Gb - α;
				let resβ = Fb - β;

				console.log(
					"n = ",
					iN,
					"rc = ",
					iRc,
					" ------ ",
					Gb.toFixed(4),
					"-",
					α.toFixed(4),
					" = ",
					resα.toFixed(4),
					"//////",
					Fb.toFixed(4),
					"-",
					β.toFixed(4),
					" = ",
					resβ.toFixed(4)
				);

				if (resα < 0 && resβ < 0 && Gb / α > 0.6 && Fb / β > 0.6) {
					best.resα = resα;
					best.resβ = resβ;
					best.n = iN;
					best.rc = iRc;
				}
			}

			iN = Math.ceil(iN + iN * 0.01);
		}
		console.log("best: ", best);
		console.log("bestRes: ", best.res);
		setBest(best);
		return best;
	}

	return (
		<>
			<ion-header translucent>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-button
							onClick={() =>
								option ? setOption() : Router.push("/")
							}
						>
							Back
						</ion-button>
					</ion-buttons>
					{/* <ion-title>Binomial</ion-title> */}
				</ion-toolbar>
			</ion-header>

			<ion-content>
				<ion-list>
					<ion-list-header>
						<h2>Inferencia en los procesos de Bernoulli</h2>
					</ion-list-header>

					{!option ? (
						<>
							<ion-item onClick={() => setOption(1)}>
								<ion-label>
									Ensayo de Hipótesis Ho) p ≤ po{" "}
								</ion-label>
							</ion-item>

							<ion-item onClick={() => setOption(2)}>
								<ion-label>
									Ensayo de Hipótesis Ho) p ≥ po{" "}
								</ion-label>
							</ion-item>

							<ion-item onClick={() => setOption(3)}>
								<ion-label>
									Intervalo de confianza para p
								</ion-label>
							</ion-item>
						</>
					) : (
						<>
							<ion-item>
								<ion-label>po = </ion-label>
								<IonInput
									type="number"
									placeholder="Enter po value"
									onChange={(e) =>
										setPo(Number(e.detail.value))
									}
								/>
							</ion-item>

							<ion-item>
								<ion-label>α = </ion-label>
								<IonInput
									type="number"
									placeholder="Enter α value"
									onChange={(e) =>
										setα(Number(e.detail.value))
									}
								/>
							</ion-item>

							<ion-item>
								<ion-label>p1 = </ion-label>
								<IonInput
									type="number"
									placeholder="Enter p1 value"
									onChange={(e) =>
										setP1(Number(e.detail.value))
									}
								/>
							</ion-item>

							<ion-item>
								<ion-label>β = </ion-label>
								<IonInput
									type="number"
									placeholder="Enter β value"
									onChange={(e) =>
										setβ(Number(e.detail.value))
									}
								/>
							</ion-item>

							<ion-button onClick={calculateCaso1}>
								Calcular n y rc
							</ion-button>

							<ion-item>n = {best.n}</ion-item>
							<ion-item>rc = {best.rc}</ion-item>
							<ion-item>
								α = {Gbinomial(best.rc, best.n, po)}
							</ion-item>
							<ion-item>
								β = {Fbinomial(best.rc - 1, best.n, p1)}
							</ion-item>
						</>
					)}
				</ion-list>
			</ion-content>
		</>
	);
};

export default inferencia_bernoulli;