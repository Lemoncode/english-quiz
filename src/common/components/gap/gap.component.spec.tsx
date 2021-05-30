import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { GapComponent } from './gap.component';
import { Formik } from 'formik';

describe('GapComponent specs', () => {
  it('Should not display a input field if "isGap" is false', () => {
    //Arrange
    const props = {
      isGap: false,
      text: 'I am normal text',
      tense: 'Infinitive',
      fieldName: 'infinitive',
    };

    //Act
    render(<GapComponent {...props} />);
    const field = screen.queryByText(props.tense);
    const text = screen.queryByText(`${props.tense}: ${props.text}`);

    //Assert
    expect(field).toBeNull();
    expect(text).toBeInTheDocument();
  });

  it('Should display a input field if "isGap" is true', () => {
    //Arrange
    const props = {
      isGap: true,
      text: '',
      tense: 'Infinitive',
      fieldName: 'infinitive',
    };

    //Act
    render(
      <Formik
        initialValues={{ infinitive: '' }}
        onSubmit={values => console.log(values)}
      >
        <GapComponent {...props} />
      </Formik>
    );
    const field = screen.getByText(props.tense);
    const text = screen.queryByText(`${props.tense}: ${props.text}`);

    //Assert
    expect(field).toBeInTheDocument();
    expect(text).toBeNull();
  });
});
