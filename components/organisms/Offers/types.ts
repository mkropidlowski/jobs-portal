export interface ICard {
	id?: string;
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
	onClick?: () => void;
}

