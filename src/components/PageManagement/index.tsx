import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
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
  const [labelSize, setLabelSize] = useState<string | null>('');
  const [labelText, setLabelText] = useState<string | null>('');
  const reloadRef: React.MutableRefObject<null> = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    setLabelSize(t('movieList.countFilm'));
    setLabelText(t('movieList.showMore'));
  }, []);

  return (
    <ArrowUploadWrapper>
      <div ref={reloadRef}>
        <Reload
          className={classNames('reload', {
            loading: query.isLoading,
          })}
          aria-label="Reload"
          onClick={() => {
            setQuery({
              ...query,
              currentPage: query.currentPage + 1,
              arrowUpload: true,
            });
          }}
        />
      </div>
      <Text
        onClick={() => {
          setQuery({
            ...query,
            currentPage: query.currentPage + 1,
            arrowUpload: true,
          });
        }}
      >
        {labelText}
      </Text>
      <Select
        className="selectCategory"
        placeholder={query.pageSize === 5 ? labelSize : query.pageSize}
        onChange={(name: IName) => {
          setQuery({ ...query, pageSize: Number(name.label) });
        }}
        options={optionSize}
        multi={false}
        closeMenu={true}
      />
    </ArrowUploadWrapper>
  );
};

export default PageManagementComponent;
