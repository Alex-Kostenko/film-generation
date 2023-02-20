import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

import { ISliderTextProps } from '@/interfaces';

import { Description, Container, Button, Title } from './style';

const SliderText: FC<ISliderTextProps> = ({ movieData }) => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Title>{movieData.title}</Title>
        <Description>{movieData.overview}</Description>
        <Button>{t('main.go')}</Button>
      </Container>
    </>
  );
};

export default SliderText;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
