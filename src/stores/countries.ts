import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
interface State {
	countries: Country[],
	loading: boolean,
	name: string,
	region: string,
	regions: Region[]
}
interface Flags {
	png: string
}
interface Name {
	common: string
}
interface Country {
	numericcode: number,
	name: Name,
	flags: Flags,
	region: string,
	population: number,
	continents: string[],
	capital: string[];
	png: string
}
interface Region {
	id: number,
	name: string
}
export const useCountriesStore = defineStore('countries', {
	state: (): State => {
		return {
			countries: [],
			loading: false,
			name: '',
			region: 'region',
			regions: [{
				id: 1,
				name: 'Africa',

			},
			{
				id: 2,
				name: 'America',

			},
			{
				id: 3,
				name: 'Asia',

			},
			{
				id: 4,
				name: 'Europe',

			},
			{
				id: 5,
				name: 'Oceania',

			},
			]


		}
	},
	getters: {
		allCountries: (state) => state.countries,
		allRegion: (state) => state.regions,
	},
	actions: {
		async getCountries() {
			this.loading = true;
			let url = 'https://restcountries.com/v3.1/all'
			return await axios
				.get(url)
				.then(({ data }) => {
					this.countries = data;
					console.log(this.countries);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					this.loading = false;
				});
		},
		async getSearchCountry() {
			let url = 'https://restcountries.com/v2/name/'
			if (this.name) {
				url += `${this.name}`;
			}
			return await axios.get(url).then(({ data }) => {
				this.countries = data;
				console.log(this.countries);
			}).catch((error) => {
				console.log(error)
			})

		},
		async getRegion() {
			let url = 'https://restcountries.com/v3.1/region/'
			if (this.region) {
				url += `${this.region}`
			}
			return await axios.get(url).then(({ data }) => {
				this.countries = data;
				console.log(this.countries);
			}).catch((error) => {
				console.log(error);
			})
		}
	}
});


