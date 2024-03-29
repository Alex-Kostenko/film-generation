import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import queryAuthorization from '@/Services/queryAuthorization';
import UserInfo from '@/components/UserInfo';
import { ILocale } from '@/interfaces';
import {
  Wrapper,
  Title,
  ImgContainer,
  LogoutButton,
} from '@/styles/userProfile/style';
import { userProfileImage } from '@/utils/constants';
import { Paths } from '@/utils/paths';

const UserProfile = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [title, setTitle] = useState<null | string>('');
  const [textButton, setTextButton] = useState<null | string>('');

  const logout = async () => {
    await queryAuthorization.logout();
    localStorage.removeItem('access_token');
    router.push(`${Paths.home}`);
  };

  useEffect(() => {
    setTitle(t('userProfile.profile'));
    setTextButton(t('userProfile.logout'));
  });

  return (
    <>
      <Head>
        <title>User profile</title>
      </Head>
      <Title>{title}</Title>
      <Wrapper>
        <ImgContainer>
          <Image
            priority={true}
            className="filmID"
            height={200}
            width={200}
            unoptimized={true}
            src={userProfileImage}
            alt={'movie_img'}
          />
        </ImgContainer>
        <UserInfo />
        <LogoutButton value={textButton} onClick={logout} />
      </Wrapper>
    </>
  );
};

export default UserProfile;

export const getServerSideProps = async ({ locale }: ILocale) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
