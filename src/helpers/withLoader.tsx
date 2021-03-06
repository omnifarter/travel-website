import React from 'react';
import Loader from '../components/Loader';

interface WithLoadingProps {
  loading: boolean;
  isMobile: boolean;
}

export default <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) => (
  <div className={`relative ${props.isMobile ? "h-full": ""}`}>
    {loading ? (
      <>
      <Loader />
      </>
    ) : null}
    <Component {...(props as P)} />
  </div>
);

