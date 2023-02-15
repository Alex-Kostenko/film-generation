import { useRouter } from 'next/router';

import { Button } from './style';

const BackBtn = () => {
  const router = useRouter();
  const redirectBack = () => {
    router.back();
  };
  return (
    <>
      <Button onClick={redirectBack}>Back</Button>
    </>
  );
};

export default BackBtn;
