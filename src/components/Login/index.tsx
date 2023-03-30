import { Button, Input } from 'alex-unicode';
import { useState } from 'react';

import { Root, WrapperLoginBlock } from './style';

const Login = () => {
  // const { t } = useTranslation();

  const [loginForm, setLoginForm] = useState({ nameInput: '', password: '' });

  const handleEnter = () => {
    //
  };

  return (
    <Root>
      <WrapperLoginBlock>
        <Input
          inputType={'text'}
          label={'Name'}
          value={loginForm.nameInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, nameInput: event.target.value })
          }
        />
        <Input
          inputType={'password'}
          label={'Password'}
          value={loginForm.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, password: event.target.value })
          }
        />
        <Button label={'Вхід'} onClick={handleEnter} />
      </WrapperLoginBlock>
    </Root>
  );
};

export default Login;
