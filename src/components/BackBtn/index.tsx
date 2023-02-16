import { useRouter } from 'next/router';

import { Img } from './style';

const BackBtn = () => {
  const router = useRouter();
  const redirectBack = () => {
    router.back();
  };
  return (
    <>
      <Img
        onClick={redirectBack}
        src={'/arrowBack.svg'}
        width={'20'}
        height={'20'}
        alt={'buttonBack'}
      />
    </>
  );
};

export default BackBtn;
