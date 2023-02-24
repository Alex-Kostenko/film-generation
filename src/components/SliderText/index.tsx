import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

import { ISliderTextProps } from '@/interfaces';

import { Description, Container, Btn, Title } from './style';

const SliderText: FC<ISliderTextProps> = ({ movieData }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  return (
    <>
      <Container>
        <Title>{movieData.title}</Title>
        <Description>{movieData.overview}</Description>
        <Btn label={t('main.go')} onClick={() => redirect(movieData.id)}></Btn>
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
