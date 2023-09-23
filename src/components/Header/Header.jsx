import React, { useContext, useState } from 'react';
import cn from 'classnames';

import { Button, Typography } from '@goorm-dev/gds-challenge';

import { FormContext } from '../../App';
import CustomModal from '../Modal';

import styles from './Header.module.scss';

const Header = () => {
	const { resetStore, setModal } = useContext(FormContext);
	const [modalOpen, setModalOpen] = useState(false);

	const toggle = () => {
		setModalOpen((prevModalOpen) => {
			return !prevModalOpen;
		});
	};

	const handleCloseModal = () => {
		toggle();
		resetStore();
	};

	const handleModalOpen = () => {
		setModal({
			index: 0,
		});
		toggle();
	};

	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button onClick={handleModalOpen} size="lg">
					설문조사 참여하기
				</Button>
			</div>

			<CustomModal isOpen={modalOpen} onClose={handleCloseModal} />
		</header>
	);
};

export default Header;
