import ContentInfo from 'components/ContentInfo/ContentInfo';
import Search from 'components/Search/Search';
import { useState } from 'react';

export const NewsPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = searchText => {
    setSearchText(searchText);
  };
  return (
    <>
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
    </>
  );
};
