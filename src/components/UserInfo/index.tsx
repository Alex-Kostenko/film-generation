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
  AcceptButton,
  EditButton,
  ErrorEmail,
  ErrorName,
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

  const savePastData = () => {
    setEditMode(!editMode);
    setPreviousData((prev) => ({
      ...prev,
      username: userData.username,
      email: userData.email,
    }));
  };

  const editData = async () => {
    if (
      valid.nameValid &&
      editMode &&
      (userData.email != previousData.email ||
        userData.username != previousData.username)
    ) {
      await queryUser.changeUserData(userData);
      setEditMode(!editMode);
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
          <ErrorName>{t('userProfile.errorName')}</ErrorName>
        )}
        <InputComponent
          label={t('userProfile.email')}
          inputType="text"
          value={userData.email}
          onChange={(event) => changeEmail(event.target.value)}
          disabled={!editMode}
        />
        {!valid.emailValid && (
          <ErrorEmail>{t('userProfile.errorEmail')}</ErrorEmail>
        )}
        <ButtonContainer>
          {!editMode && (
            <EditButton value={t('userProfile.edit')} onClick={savePastData} />
          )}
          {editMode && (
            <AcceptButton
              value={editMode ? t('userProfile.accept') : t('userProfile.edit')}
              onClick={editData}
            />
          )}
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
      <ToastContainer />
    </Wrapper>
  );
};

export default UserInfo;
