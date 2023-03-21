/* eslint-disable no-unused-vars */
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import styles from './inputList.module.scss';
import { useState } from 'react';

interface Props {
	addItems: (item: string) => void;
	deleteItems: (item: string) => void;
	items: string[];
	placeholder: string;
}

const InputList: React.FC<Props> = ({ addItems, deleteItems, items, placeholder }) => {
	const [userValue, setUserValue] = useState<string>('');

	const handleInputChange = (event: { target: { value: string } }) => {
		const checkValue = event.target.value ?? '';
		setUserValue(checkValue);
	};

	const handlerAddItem = () => {
		if (userValue.trim() !== '') {
			addItems(userValue);
			setUserValue('');
		}
	};

	const handleItemDelete = (item: string) => {
		deleteItems(item);
	};

	return (
		<>
			<div className={styles.inputs}>
				<Input type="text" placeholder={placeholder} required value={userValue} onChange={handleInputChange} />
				<Button type="button" color="primary" sizeVariant="small" onClick={handlerAddItem}>
					Add
				</Button>
			</div>
			<ul className={styles.outputList}>
				{items.map((item) => (
					<li key={item} className={styles.outputListItem} onClick={() => handleItemDelete(item)}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
};

export default InputList;

