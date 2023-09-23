import { useEffect } from 'react';

import { Input, Typography } from '@goorm-dev/gds-challenge';

const Agree = ({
	all,
	privacy,
	marketing,
	ad,
	adEmail,
	adSms,
	setAll,
	setPrivacy,
	setMarketing,
	setAd,
	setAdEmail,
	setAdSms,
}) => {
	const disAgreeAd = () => {
		setAd(false);
		setAdEmail(false);
		setAdSms(false);
	};

	const agreeAd = () => {
		setAd(true);
		setAdEmail(true);
		setAdSms(true);
	};

	const toggleAd = () => {
		if (ad) {
			disAgreeAd();
			return;
		}
		agreeAd();
	};
	const agreeAll = () => {
		setAll(true);
		setPrivacy(true);
		setMarketing(true);
		agreeAd();
	};

	const disAgreeAll = () => {
		setAll(false);
		setPrivacy(false);
		setMarketing(false);
		disAgreeAd();
	};

	const toggleAgreeAll = () => {
		if (all) {
			disAgreeAll();
			return;
		}
		agreeAll();
	};

	useEffect(() => {
		const result = privacy && marketing && ad && adEmail && adSms;
		setAll(result);
	});

	useEffect(() => {
		const result = adEmail && adSms;
		setAd(result);
	});

	const togglePrivacy = () => {
		setPrivacy(!privacy);
	};

	const toggleMarketing = () => {
		setMarketing(!marketing);
	};

	const toggleAdEmail = () => {
		setAdEmail(!adEmail);
	};

	const toggleAdSms = () => {
		setAdSms(!adSms);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
			<Input
				type="checkbox"
				label="전체 동의"
				size="md"
				checked={all}
				onChange={toggleAgreeAll}
			/>
			<div
				style={{
					width: '100%',
					height: '100%',
					border: '1px #E1E1E8 solid',
				}}
			></div>
			<Input
				type="checkbox"
				label="(필수) 개인정보처리방침"
				size="md"
				checked={privacy}
				onChange={togglePrivacy}
			/>
			<Input
				type="checkbox"
				label="(선택) 마케팅 목적의 개인 정보 수집 및 이용"
				size="md"
				checked={marketing}
				onChange={toggleMarketing}
			/>
			<Input
				type="checkbox"
				label="(선택) 광고성 정보 수신"
				size="md"
				checked={ad}
				onChange={toggleAd}
			/>
			<div style={{ display: 'flex', gap: '16px', paddingLeft: '26px'}}>
				<Input
					type="checkbox"
					label="이메일"
					size="md"
					checked={adEmail}
					onChange={toggleAdEmail}
				/>
				<Input
					type="checkbox"
					label="SMS"
					size="md"
					checked={adSms}
					onChange={toggleAdSms}
				/>
			</div>
			<Typography color="secondary">
				※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수
				있도록 리마인드 알림을 보내드려요.
			</Typography>
		</div>
	);
};

export default Agree;
