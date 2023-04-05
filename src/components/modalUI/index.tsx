import CinemaLine from '../../../public/cinemaLine.svg';
import Home from '../../../public/home.svg';
import Star from '../../../public/star.svg';
import ModalComponent from '../ModalComponent';

//TODO delete root
import { ModalContent, WrapperRow } from './style';

const ModalUI = ({ isModalOpen, closeModal }: any) => {
  return (
    isModalOpen && (
      <ModalComponent onClose={closeModal}>
        <ModalContent>
          <WrapperRow>
            <p style={{ color: 'white' }}>Home</p>
            <Home className="triangle" aria-label="Home" />
          </WrapperRow>
          <WrapperRow>
            <p style={{ color: 'white' }}>Cinema</p>
            <CinemaLine className="triangle" aria-label="CinemaLine" />
          </WrapperRow>
          <WrapperRow>
            <p style={{ color: 'white' }}>Star</p>
            <Star className="triangle" aria-label="Star" />
          </WrapperRow>
        </ModalContent>
      </ModalComponent>
    )
  );
};

export default ModalUI;
