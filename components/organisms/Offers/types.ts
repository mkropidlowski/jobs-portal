export interface ICard {
	id?: string;
	jobId?: string;
	slug?: string;
	companyImg?: string;
	companyName?: string;
	position?: string;
	salaryFrom?: string;
	salaryTo?: string;
	salaryType?: string;
	currency?: string;
	location?: string;
	addedAt?: string;
	className?: string;
	technologies?: string[];
	offerDescription?: IOfferDetails;
}

export interface IOfferDetails {
	aboutCompany?: string;
	benefits?: string;
	footer?: string;
	heading?: string;
	requirementsList?: string[];
}

