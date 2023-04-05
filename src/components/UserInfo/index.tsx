import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

interface PasswordState {
  currentPassword: boolean;
  newPassword: boolean;
}

import queryAuthorization from '@/Services/queryAuthorization';
import queryUser from '@/Services/queryUser';
import { regexpEmail } from '@/utils/constants';

import {
  PasswordContainer,
  ButtonContainer,
  PasswordButton,
  InputComponent,
  DataContainer,
  EditButton,
  ErrorText,
  Wrapper,
  Img,
} from './style';

const UserInfo = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
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
  const [valid, setValid] = useState({ nameValid: true, emailValid: true });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    (async () => {
      const profileData = await queryAuthorization.getProfileData();
      setUserData(profileData);
    })();
  }, []);

  const editData = async () => {
    editMode && (await queryUser.changeUserData(userData));
    setEditMode(!editMode);
  };

  const editPassword = async () => {
    await queryUser.changeUserPasswoed(password);
    setPassword({
      currentPassword: '',
      newPassword: '',
    });
  };

  const changeName = (name: string) => {
    setUserData((prev) => ({ ...prev, username: name }));
    setValid((prev) => ({ ...prev, nameValid: validateName(name) }));
  };

  const changeEmail = (email: string) => {
    setUserData((prev) => ({ ...prev, email: email }));
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
    const emailRegex = regexpEmail;
    return emailRegex.test(email);
  };

  const toggleShowPassword = (passwordKey: keyof PasswordState) => {
    setShowPassword((prev) => ({
      ...prev,
      [passwordKey]: !prev[passwordKey],
    }));
  };

  return (
    <Wrapper>
      <DataContainer>
        <InputComponent
          label={t('userProfile.name')}
          inputType="text"
          value={userData.username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            changeName(event.target.value)
          }
          disabled={!editMode}
        />
        {!valid.nameValid && (
          <ErrorText>{t('userProfile.errorName')}</ErrorText>
        )}
        <InputComponent
          label={t('userProfile.email')}
          inputType="text"
          value={userData.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            changeEmail(event.target.value)
          }
          disabled={!editMode}
        />
        {!valid.emailValid && (
          <ErrorText>{t('userProfile.errorEmail')}</ErrorText>
        )}
        <ButtonContainer>
          <EditButton
            value={editMode ? t('userProfile.accept') : t('userProfile.edit')}
            onClick={editData}
          />
          {editMode && (
            <EditButton
              value={t('userProfile.cancel')}
              onClick={() => setEditMode(!editMode)}
            />
          )}
        </ButtonContainer>
      </DataContainer>
      <PasswordContainer>
        <div style={{ position: 'relative' }}>
          <InputComponent
            label={t('userProfile.currentPassword')}
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
        <div style={{ position: 'relative' }}>
          <InputComponent
            label={t('userProfile.newPassword')}
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
        <PasswordButton
          value={t('userProfile.changePassword')}
          onClick={editPassword}
        />
      </PasswordContainer>
    </Wrapper>
  );
};

export default UserInfo;
