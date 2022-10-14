
/* global BigInt */
import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";
import IonSearchbar from "../components/IonSearchbar";

export default function Home() {
	const [search, setSearch] = useState("");


	return (
		<>
			<ion-header>
				<ion-toolbar>
					<ion-title>Nuevo DIS</ion-title>

					{/* <ion-buttons slot="end">
						<ion-button>Order By</ion-button>
					</ion-buttons> */}
				</ion-toolbar>
			</ion-header>

			<ion-content fullscreen>
				<ion-header collapse="condense">
					<ion-toolbar>
						<ion-title size="large">Seleccionar Distribución</ion-title>
					</ion-toolbar>
					<ion-toolbar>
						<IonSearchbar
							value={search}
							onChange={(e) => setSearch(e.detail.value)}
							placeholder="Buscar"
							animated
							show-cancel-button="focus"
						/>
					</ion-toolbar>
				</ion-header>
				<ion-item onClick={() => Router.push("binomial")}>Binomial</ion-item>
				<ion-item onClick={() => Router.push("binomial")}>Pascal</ion-item>
				<ion-item onClick={() => Router.push("binomial")}>Poisson</ion-item>
				<ion-item onClick={() => Router.push("inferencia_bernoulli")}>
					Inferencia en los procesos de Bernoulli
				</ion-item>
			</ion-content>
		</>
	);
}
