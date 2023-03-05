import styles from './base.module.scss';

export interface IBase {
	sampleTextProp: string;
}

const Base: React.FC<IBase> = ({ sampleTextProp }) => {
	return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Base;

