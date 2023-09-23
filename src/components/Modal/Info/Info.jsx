import { Input, Label, Typography } from '@goorm-dev/gds-challenge';

const Info = ({
	name,
	email,
	phoneNumber,
	setName,
	setPhoneNumber,
	setEmail,
}) => {
	const namePlaceHolder = '이름을 입력해주세요.';
	const phoneNumberPlaceHolder = 'ex. 01012345678';
	const emailPlaceHolder = 'ex. goormee@goorm.io';

	const changeName = ({ target }) => {
		setName(target.value);
	};

	const changePhoneNumber = ({ target }) => {
		setPhoneNumber(target.value);
	};

	const changeEmail = ({ target }) => {
		setEmail(target.value);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<div>
				<Label style={{ paddingBottom: '8px', margin: '0px' }}>
					<Typography style={{ marginRight: '4px' }}>이름</Typography>
					<Typography color="danger">*</Typography>
				</Label>
				<Input
					type="text"
					value={name}
					block
					placeholder={namePlaceHolder}
					onChange={changeName}
					style={{ width: '100%' }}
				/>
			</div>
			<div>
				<Label style={{ paddingBottom: '8px', margin: '0px' }}>
					<Typography style={{ marginRight: '4px' }}>전화번호</Typography>
					<Typography color="danger">*</Typography>
				</Label>
				<Input
					type="tel"
					value={phoneNumber}
					block
					placeholder={phoneNumberPlaceHolder}
					onChange={changePhoneNumber}
					style={{ width: '100%' }}
				/>
			</div>
			<div>
				<Label style={{ paddingBottom: '8px', margin: '0px' }}>
					<Typography style={{ marginRight: '4px' }}>이메일</Typography>
					<Typography color="danger">*</Typography>
				</Label>
				<Input
					type="email"
					value={email}
					block
					placeholder={emailPlaceHolder}
					onChange={changeEmail}
					style={{ width: '100%' }}
				/>
			</div>
		</div>
	);
};

export default Info;
