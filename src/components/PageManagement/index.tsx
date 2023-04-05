import classNames from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IName } from '@/interfaces';
import { optionSize } from '@/utils/constants';

import Reload from '../../../public/reload.svg';

import { ArrowUploadWrapper, Select, Text } from './style';

interface Query {
  arrowUpload: boolean;
  count: number;
  currentPage: number;
  isLoading: boolean;
  pageSize: number;
}
interface IPageManagement {
  query: Query;
  setQuery: React.Dispatch<React.SetStateAction<Query>>;
}

const PageManagementComponent: FC<IPageManagement> = ({ query, setQuery }) => {
  const { t } = useTranslation();

  const handleSetQuery = () => {
    setQuery({
      ...query,
      currentPage: query.currentPage + 1,
      arrowUpload: true,
    });
  };

  return (
    <ArrowUploadWrapper>
      <Reload
        className={classNames('reload', {
          loading: query.isLoading,
        })}
        aria-label="Reload"
        onClick={handleSetQuery}
      />
      <Text onClick={handleSetQuery}>{t('movieList.showMore')}</Text>
      <Select
        className="selectCategory"
        placeholder={
          query.pageSize === 5 ? t('movieList.countFilm') : query.pageSize
        }
        onChange={(name: IName) => {
          setQuery({ ...query, pageSize: Number(name.label), currentPage: 0 });
        }}
        options={optionSize}
        multi={false}
        closeMenu={true}
      />
    </ArrowUploadWrapper>
  );
};

export default PageManagementComponent;
