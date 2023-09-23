import { useState } from 'react';

import Agree from '@/components/Modal/Info/Agree';
import Info from '@/components/Modal/Info/Info';
import Title from "@/components/Modal/Title";

const Modal1 = () => {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [all, setAll] = useState(false);
	const [privacy, setPrivacy] = useState(false);
	const [marketing, setMarketing] = useState(false);
	const [ad, setAd] = useState(false);
	const [adEmail, setAdEmail] = useState(false);
	const [adSms, setAdSms] = useState(false);

	return (
		<>
			<Title
				title="참여자 정보를 입력해주세요."
				subTitle="오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요."
			/>
			<Info
				name={name}
				phoneNumber={phoneNumber}
				email={email}
				setName={setName}
				setPhoneNumber={setPhoneNumber}
				setEmail={setEmail}
			/>
			<Agree
				all={all}
				privacy={privacy}
				marketing={marketing}
				ad={ad}
				adEmail={adEmail}
				adSms={adSms}
				setAll={setAll}
				setPrivacy={setPrivacy}
				setMarketing={setMarketing}
				setAd={setAd}
				setAdEmail={setAdEmail}
				setAdSms={setAdSms}
			/>
		</>
	);
};

export default Modal1;
