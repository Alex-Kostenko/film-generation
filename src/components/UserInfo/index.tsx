import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

interface PasswordState {
  currentPassword: boolean;
  newPassword: boolean;
}

import queryAuthorization from '@/Services/queryAuthorization';
import queryUser from '@/Services/queryUser';

import {
  InformationItem,
  InformationName,
  InformationText,
  ColumnContainer,
  PasswordButton,
  InputComponent,
  PasswordItem,
  PasswordName,
  PasswordText,
  Information,
  EditButton,
  Password,
  ErrorText,
  Img,
} from './style';

const UserInfo = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const [showPassword, setShowPassword] = useState<PasswordState>({
    currentPassword: false,
    newPassword: false,
  });
  const [editMode, setEditMode] = useState(false);
  const [valid, setValid] = useState({ nameValid: true, emailValid: true });

  useEffect(() => {
    (async () => {
      const profileData = await queryAuthorization.getProfileData();
      setUserData(profileData);
      setUserInfo(profileData);
    })();
  }, []);

  useEffect(() => {
    {
      userData.username &&
        userData.email &&
        (async () => {
          const newUserData = {
            username: userData.username,
            email: userData.email,
          };
          await queryUser.changeUserData(newUserData);
        })();
    }
  }, [userData.username, userData.email]);

  const editPassword = async () => {
    await queryUser.changeUserPasswoed(password);
    setPassword({
      currentPassword: '',
      newPassword: '',
    });
  };

  const changeName = (name: string) => {
    setUserInfo((prev) => ({ ...prev, username: name }));
    setValid((prev) => ({ ...prev, nameValid: validateName(name) }));
  };

  const changeEmail = (email: string) => {
    setUserInfo((prev) => ({ ...prev, email: email }));
    setValid((prev) => ({ ...prev, emailValid: validateEmail(email) }));
  };

  const changePassword = (property: string, password: string) => {
    setPassword((prev) => ({ ...prev, [property]: password }));
  };

  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleShowPassword = (passwordKey: keyof PasswordState) => {
    setShowPassword((prev) => ({
      ...prev,
      [passwordKey]: !prev[passwordKey],
    }));
  };

  return (
    <ColumnContainer>
      <Information>
        <InformationItem>
          <InformationName>{t('userProfile.name')}:</InformationName>
          <InformationText>
            {editMode ? (
              <InputComponent
                inputType="text"
                value={userInfo.username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changeName(event.target.value)
                }
                disabled={!editMode}
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEditMode(!editMode);
                  setUserData((prev) => ({
                    ...prev,
                    username: event.target.value,
                  }));
                }}
              />
            ) : userData.username ? (
              userData.username
            ) : (
              '...'
            )}
            {!valid.nameValid && (
              <ErrorText>{t('userProfile.errorName')}</ErrorText>
            )}
          </InformationText>
          {editMode && (
            <EditButton
              value={t('userProfile.cancel')}
              onClick={() => setEditMode(!editMode)}
            />
          )}
          <EditButton
            value={t('userProfile.edit')}
            onClick={() => setEditMode(!editMode)}
          />
        </InformationItem>
        <InformationItem>
          <InformationName>{t('userProfile.email')}:</InformationName>
          <InformationText>
            {editMode ? (
              <InputComponent
                inputType="text"
                value={userInfo.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changeEmail(event.target.value)
                }
                disabled={!editMode}
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEditMode(!editMode);
                  setUserData((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
                }}
              />
            ) : userData.email ? (
              userData.email
            ) : (
              '...'
            )}
            {!valid.emailValid && (
              <ErrorText>{t('userProfile.errorEmail')}</ErrorText>
            )}
          </InformationText>
        </InformationItem>
      </Information>
      <Password>
        <PasswordItem>
          <PasswordName>{t('userProfile.currentPassword')}:</PasswordName>
          <PasswordText>
            <div style={{ position: 'relative' }}>
              <InputComponent
                inputType={showPassword.currentPassword ? 'text' : 'password'}
                value={password.currentPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changePassword('currentPassword', event.target.value)
                }
              />
              <Img
                onClick={() => toggleShowPassword('currentPassword')}
                src={'/eye_visible_icon.svg'}
                width={'30'}
                height={'30'}
                alt={'buttonBack'}
              />
            </div>
          </PasswordText>
        </PasswordItem>
        <PasswordItem>
          <PasswordName>{t('userProfile.newPassword')}:</PasswordName>
          <PasswordText>
            <div style={{ position: 'relative' }}>
              <InputComponent
                inputType={showPassword.newPassword ? 'text' : 'password'}
                value={password.newPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changePassword('newPassword', event.target.value)
                }
              />
              <Img
                onClick={() => toggleShowPassword('newPassword')}
                src={'/eye_visible_icon.svg'}
                width={'30'}
                height={'30'}
                alt={'buttonBack'}
              />
            </div>
          </PasswordText>
        </PasswordItem>
      </Password>
      <PasswordButton
        value={t('userProfile.changePassword')}
        onClick={editPassword}
      />
    </ColumnContainer>
  );
};

export default UserInfo;
