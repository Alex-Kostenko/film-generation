import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import queryAuthorization from '@/Services/queryAuthorization';
import queryUser from '@/Services/queryUser';
import { regexpEmail, regexName } from '@/utils/constants';
interface PasswordState {
  currentPassword: boolean;
  newPassword: boolean;
}

import {
  PasswordContainer,
  ButtonContainer,
  PasswordButton,
  InputComponent,
  DataContainer,
  CancelButton,
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
  const [previousData, setPreviousData] = useState({
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
    const name = userData.username;
    const email = userData.email;

    if (valid.nameValid) {
      if (editMode) {
        await queryUser.changeUserData(userData);
      }
      setEditMode(!editMode);
      setPreviousData((prev) => ({ ...prev, username: name, email: email }));
    }
  };

  const editCancel = async () => {
    setEditMode(!editMode);
    setUserData((prev) => ({
      ...prev,
      username: previousData.username,
      email: previousData.email,
    }));
    setValid({ nameValid: true, emailValid: true });
  };

  const editPassword = async () => {
    await queryUser.changeUserPassword(password);
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
    const nameRegex = regexName;
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
          onChange={(event) => changeName(event.target.value)}
          disabled={!editMode}
        />
        {!valid.nameValid && (
          <ErrorText>{t('userProfile.errorName')}</ErrorText>
        )}
        <InputComponent
          label={t('userProfile.email')}
          inputType="text"
          value={userData.email}
          onChange={(event) => changeEmail(event.target.value)}
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
            <CancelButton
              value={t('userProfile.cancel')}
              onClick={editCancel}
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
            onChange={(event) =>
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
            onChange={(event) =>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Wrapper>
  );
};

export default UserInfo;
