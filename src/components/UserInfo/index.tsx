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
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState<PasswordState>({
    currentPassword: false,
    newPassword: false,
  });
  const [editMode, setEditMode] = useState({ data: false, password: false });
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

  const changeEditDataMode = () => {
    setEditMode((prev) => ({ ...prev, data: !editMode.data }));
  };

  const changeEditPasswordMode = () => {
    setEditMode((prev) => ({ ...prev, password: !editMode.password }));
  };

  const changeName = (name: string) => {
    setUserInfo((prev) => ({ ...prev, username: name }));
    setValid((prev) => ({ ...prev, nameValid: validateName(name) }));
  };

  const changeEmail = (email: string) => {
    setUserInfo((prev) => ({ ...prev, email: email }));
    setValid((prev) => ({ ...prev, emailValid: validateEmail(email) }));
  };

  const changeCurrentPassword = (password: string) => {
    setCurrentPassword(password);
  };

  const changeNewPassword = (password: string) => {
    setNewPassword(password);
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
            {editMode.data ? (
              <InputComponent
                inputType="text"
                value={userInfo.username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changeName(event.target.value)
                }
                disabled={!editMode.data}
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                  changeEditDataMode;
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
          <EditButton
            value={t('userProfile.edit')}
            onClick={changeEditDataMode}
          />
        </InformationItem>
        <InformationItem>
          <InformationName>{t('userProfile.email')}:</InformationName>
          <InformationText>
            {editMode.data ? (
              <InputComponent
                inputType="text"
                value={userInfo.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  changeEmail(event.target.value)
                }
                disabled={!editMode.data}
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                  changeEditDataMode;
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
      <PasswordButton
        value={t('userProfile.changePassword')}
        onClick={changeEditPasswordMode}
      />
      {editMode.password ? (
        <Password>
          <PasswordItem>
            <PasswordName>{t('userProfile.currentPassword')}:</PasswordName>
            <PasswordText>
              <div style={{ position: 'relative' }}>
                <InputComponent
                  inputType={showPassword.currentPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    changeCurrentPassword(event.target.value)
                  }
                  disabled={!editMode.password}
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
                  value={newPassword}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    changeNewPassword(event.target.value)
                  }
                  disabled={!editMode.password}
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
      ) : null}
    </ColumnContainer>
  );
};

export default UserInfo;
