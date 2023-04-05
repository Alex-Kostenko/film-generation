import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { FooterComponent, FooterText } from './style';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterComponent>
      <FooterText>
        <a
          className="link"
          target={'_blank'}
          href="https://unicode-studio.com/#/"
        >
          {t('footer.create')}
        </a>
        <Image
          priority={true}
          className="logoBurger"
          src={'/UniCode.jpg'}
          height={27}
          width={27}
          alt={'logoBurger'}
        />
      </FooterText>
    </FooterComponent>
  );
};

export default Footer;
