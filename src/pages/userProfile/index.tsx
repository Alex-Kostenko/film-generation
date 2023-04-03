import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import queryAuthorization from '@/Services/queryAuthorization';
import UserInfo from '@/components/UserInfo';
import { ILocale } from '@/interfaces';
import { Wrapper, Title, ImgContainer } from '@/styles/userProfile/style';
import { userProfileImage } from '@/utils/constants';

const UserProfile = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState<string | null>('');
  const [profileData, setProfiledata] = useState({
    username: 'Misha',
    email: 'mikokompaniec@gmail.com',
    password: 'qazwsxedc123',
  });

  useEffect(() => {
    async () => {
      const profileData = await queryAuthorization.getProfileData();
      setProfiledata(profileData);
    };
  }, []);

  useEffect(() => {
    setTitle(t('userProfile.profile'));
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

        <UserInfo profileData={profileData} />
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
