/* global BigInt */
import Router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import IonSearchbar from "../components/IonSearchbar";

export default function Home() {
	const [search, setSearch] = useState("");

	const distributions = [
		"Binomial",
		"Normal",
		"Pascal",
		"Possion",
		"Inferencia Bernoulli",
	];

	// useEffect(() => {

	// const a = Big((fact(5000) / (fact(5000 - 500) * fact(500))).toString())
	// console.log("a: ", a)
	// const b = Big(0.1).pow(500).times( Big(1-0.1).pow(5000 - 500) )
	// console.log("b: ", b)
	// console.log("RES: ", Number(a.times(b)))
	// }, [])

	return (
		<>
			<ion-header>
				<ion-toolbar>
					{/* 
				
					<ion-title>Distribucionesx</ion-title>
					 <ion-buttons slot="end">
						<ion-button>Order By</ion-button>
					</ion-buttons> 
				
				*/}
				</ion-toolbar>
			</ion-header>

			<ion-content fullscreen>
				<ion-header collapse="condense">
					<ion-toolbar>
						<ion-title size="large">Distribuciones</ion-title>
					</ion-toolbar>
					<ion-toolbar>
						<IonSearchbar
							mode="ios"
							value={search}
							onChange={(e) => setSearch(e.detail.value)}
							placeholder="Buscar"
							// animated
							// show-cancel-button="focus"
						/>
					</ion-toolbar>
				</ion-header>

				{distributions.filter(dist => dist.toLowerCase().includes(search.toLowerCase())).map((distribution) => (
					<ion-item onClick={() => Router.push(distribution.replace(/ /g, "-").toLowerCase())}>
						{distribution}
					</ion-item>
				))}
				
			</ion-content>
		</>
	);
}
