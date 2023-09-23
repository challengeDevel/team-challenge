import { Button, Modal } from '@goorm-dev/gds-challenge';
import Modal1 from "@/components/Modal/Info/Modal1";

const CustomModal = ({ isOpen, toggle }) => {
	return (
		<>
			<Button size="lg" onClick={toggle}>설문조사 참여하기</Button>
			<Modal isOpen={isOpen} toggle={toggle}>
				<Modal.Header toggle={toggle}>헤더</Modal.Header>
				<Modal.Body>
					<Modal1 />
				</Modal.Body>
				<Modal.Footer>
					<Button>다음</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CustomModal;
