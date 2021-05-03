import React from 'react';

interface TestsContext {
  testInProgress: boolean;
  setTestInProgress: (progress: boolean) => void;
}

export const testsContext = React.createContext<TestsContext>({
  testInProgress: false,
  setTestInProgress: (progress: boolean) => {
    console.log('TestsContext, forgot provider on top of root?');
  },
});

export const TestsProvider: React.FunctionComponent = props => {
  const { children } = props;
  const [testInProgress, setTestInProgress] = React.useState<boolean>(false);

  return (
    <testsContext.Provider
      value={{
        testInProgress,
        setTestInProgress,
      }}
    >
      {children}
    </testsContext.Provider>
  );
};
