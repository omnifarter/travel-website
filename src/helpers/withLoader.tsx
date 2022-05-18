import React from 'react';
import Loader from '../components/Loader';

interface WithLoadingProps {
  loading: boolean;
}

export default <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) => (
  <>
    {loading ? (
      <>
      <Loader />
      </>
    ) : null}
    <Component {...(props as P)} />
  </>
);

