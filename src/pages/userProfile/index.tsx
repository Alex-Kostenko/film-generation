import Image from 'next/image';
interface IUserProfile {
  name: string;
  email: string;
}
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import UserInfo from '@/components/UserInfo';
import { ILocale } from '@/interfaces';
import { Wrapper, Title, ImgContainer } from '@/styles/userProfile/style';
import { userProfileImage } from '@/utils/constants';

const UserProfile: FC<IUserProfile> = ({ name, email }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState<string | null>('');

  useEffect(() => {
    setTitle(t('userProfile.profile'));
  });
  return (
    <>
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

        <UserInfo name={name} email={email} />
      </Wrapper>
    </>
  );
};

export default UserProfile;

export const getServerSideProps = async ({ locale }: ILocale) => {
  const name = 'Brandon';
  const email = 'br_williams@gmail.com';
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      name,
      email,
    },
  };
};