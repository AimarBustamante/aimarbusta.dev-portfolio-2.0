declare module "astro-i18next" {
	import { i18n } from "i18next";

	export function useI18n(): i18n;
	export function changeLocale(locale: string): void;

	// Agrega otras funciones o tipos que necesites usar
}
