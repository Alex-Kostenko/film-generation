import { useRouter } from 'next/router';

import { Paths } from '@/utils/paths';

import ModalComponent from '../ModalComponent';

import { ModalContent, WrapperRow, Text } from './style';

const ModalUI = ({ isModalOpen, closeModal }: any) => {
  const router = useRouter();
  const handleRedirect = (path: string) => {
    closeModal();
    return router.push(path);
  };
  return (
    isModalOpen && (
      <ModalComponent onClose={closeModal}>
        <ModalContent>
          <WrapperRow>
            <Text onClick={() => handleRedirect(`${Paths.home}`)}>Home</Text>
          </WrapperRow>
          <WrapperRow>
            <Text onClick={() => handleRedirect(`${Paths.userProfile}`)}>
              Profile
            </Text>
          </WrapperRow>
          <WrapperRow>
            <Text onClick={() => handleRedirect(`${Paths.registration}`)}>
              Registration
            </Text>
          </WrapperRow>
        </ModalContent>
      </ModalComponent>
    )
  );
};

export default ModalUI;
