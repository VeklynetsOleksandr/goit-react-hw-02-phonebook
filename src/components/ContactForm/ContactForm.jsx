import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from './ContactForm.Styled';

const nameInputTitle =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const phoneRegExp =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const numberInputTitle =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

// const validationSchema = Yup.object({
//   name: Yup.string().required(),
//   number: Yup.string().required(),
// });

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(30)
    .matches(phoneRegExp, numberInputTitle)
    .required(),
  number: Yup.string().required(),
});




export const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form autoComplete="off">
        <div>
          <label htmlFor="name">Name</label>
          <div>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              // pattern={NAME_INPUT_PATTERN}
              title={nameInputTitle}
            />
            <FormError name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <div>
            <Field
              name="number"
              type="tel"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title={numberInputTitle}
            />
            <FormError name="number" />
          </div>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};