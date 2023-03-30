import React, { useEffect, useState } from 'react';

import Login from '@/components/Login';
import RegistrationUser from '@/components/Registr';
import {
  BottomBox,
  LoginModal,
  RegistrationTag,
  Root,
  TextBox,
  TextPrivacy,
  TopBox,
  WarepperNavigation,
  WrapperRagistration,
} from '@/styles/registration/style';

const Registration = () => {
  const [resize, setResize] = useState(0);

  const [active, setActive] = useState(false);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setResize(window.innerHeight);
    window.addEventListener('resize', () => setResize(window.innerHeight));
  }, []);

  return (
    <Root sizeHeight={resize}>
      <WrapperRagistration>
        <TopBox>
          <TextBox>Ласкаво просимо</TextBox>
          <span className="line" />
          <WarepperNavigation>
            <LoginModal
              onClick={() => setActive(false)}
              className={`login ${!active && 'activeclass'}`}
            >
              Увійти
            </LoginModal>
            <RegistrationTag
              onClick={() => setActive(true)}
              className={`registrationTag ${active && 'activeclass'}`}
            >
              Реєстрація
            </RegistrationTag>
          </WarepperNavigation>
        </TopBox>
        {!active ? <Login /> : <RegistrationUser check={check} />}
        <span className="line" />

        <BottomBox>
          <div style={{ display: 'flex' }}>
            <input
              className="inputCheckBox"
              type="checkbox"
              checked={check}
              onChange={() => setCheck((item) => !item)}
              id="one"
            />
            <label className="labelCheckBox" htmlFor="one">
              <span></span>
            </label>
            <TextPrivacy>
              Я згоден з політикою конфіденційності магазину і даю згоду на
              обробку cвоіх персональних даних
            </TextPrivacy>
          </div>
        </BottomBox>
      </WrapperRagistration>
    </Root>
  );
};

export default Registration;
