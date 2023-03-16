export interface ICard {
	id?: string;
	jobId?: string;
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
	offerDescription?: IOfferDetails;
}

export interface IOfferDetails {
	aboutCompany?: string;
	benefits?: string;
	footer?: string;
	heading?: string;
	requirementsList?: string[];
}

