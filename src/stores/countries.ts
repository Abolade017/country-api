import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
interface State {
	countries: Country[],
	country: Country,
	loading: boolean,
	name: string,
	region: string,
	regions: Region[]
}
interface Flags {
	png: string,
	alt: string
}
interface Name {
	common: string,
	nativeName: {
		fra: {
			common: string
		},
		// nld:{common: string},
		deu: { common: string },
		eng: { common: string },
		ara: { common: string },
		nld: {
			common: String
		}
	}
}
interface Currencies {
	EUR: {
		name: String
	}
}
interface Language {
	fra: string,
	nld: string,
	deu: string,
	eng: string,
	ara: string,
}
interface Country {
	ccn3: number,
	name: Name,
	flags: Flags,
	region: string,
	population: number,
	continents: string[],
	capital: string[];
	png: string,
	subregion: string,
	tld: string[],
	currencies: Currencies,
	languages: Language,
	borders: []
}
interface Region {
	id: number,
	name: string
}
export const useCountriesStore = defineStore('countries', {
	state: (): State => {
		return {
			countries: [],
			country: {
				ccn3: 0,
				name: {
					common: '',
					nativeName: {
						nld: {
							common: ''
						},
						fra: {
							common: ''
						},
						deu: {
							common: ''
						},
						eng: {
							common: ''
						},
						ara: {
							common: ''
						}
					}
				},
				flags: {
					png: '',
					alt: ''
				},
				region: '',
				population: 0,
				continents: [],
				capital: [],
				png: 'string',
				subregion: '',
				tld: [],
				borders: [],
				currencies: {
					EUR: {
						name: ''
					}
				},
				languages: {
					fra: '',
					nld: '',
					deu: '',
					eng: '',
					ara: '',
				}
			},
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
			{
				id: 6,
				name: 'South America'

			}
			]


		}
	},
	getters: {
		allCountries: (state) => state.countries,
		allRegion: (state) => state.regions,
		getCountry: (state) => state.country
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
		async getSearchCountry(name: string) {
			let url = `https://restcountries.com/v3.1/name/${name}`;
			// if (this.country.name.nativeName.ara) {
			// 	return this.country.name.nativeName.ara;
			// }else if(this.country.name.nativeName.deu){
			// 	return this.country.name.nativeName.deu;

			// }else if(this.country.name.nativeName.eng){
			// 	return this.country.name.nativeName.eng;

			// }else if(this.country.name.nativeName.fra){
			// 	return this.country.name.nativeName.fra;

			// }else if(this.country.name.nativeName.nld){
			// 	return this.country.name.nativeName.nld;

			// }
			return await axios.get(url).then(({ data }) => {
				this.country = data[0];
				console.log(this.country);
			}).catch((error) => {
				console.log(error);
			});

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
		},
	}
});


