import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { Button } from './style';

const BackBtn = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const redirectBack = () => {
    router.back();
  };
  return (
    <>
      <Button onClick={redirectBack}>{t('main.back')}</Button>
    </>
  );
};

export default BackBtn;
