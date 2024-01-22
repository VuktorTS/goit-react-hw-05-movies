import { Grid } from 'react-loader-spinner';

// import css from './Loader.module.css';

export const Loader = () => {
  return (
    <Grid
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        position: 'fixed',
        top: '25%',
        left: '50%',
      }}
      wrapperClass="grid-wrapper"
    />
  );
};
