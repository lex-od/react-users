import { useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router';

import routes from '../../routes';
import css from './UserForm.module.scss';

const UserForm = ({ onCancel, onSubmit, initValues }) => {
  const navigate = useNavigate();

  //eslint-disable-next-line
  const initValuesMemo = useMemo(() => initValues, []);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initValuesMemo}
      validate={validateForm}
      render={({ handleSubmit, submitting }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.fieldsGroup}>
            <Field
              name="name"
              render={({ input, meta }) => (
                <div className={css.nameField}>
                  <label htmlFor="user-name">Name</label>
                  <input id="user-name" autoComplete="off" {...input} />

                  {meta.touched && meta.error && (
                    <p className={css.error}>{meta.error}</p>
                  )}
                </div>
              )}
            />

            <Field
              name="surname"
              render={({ input, meta }) => (
                <div className={css.surnameField}>
                  <label htmlFor="user-surname">Surname</label>
                  <input id="user-surname" autoComplete="off" {...input} />

                  {meta.touched && meta.error && (
                    <p className={css.error}>{meta.error}</p>
                  )}
                </div>
              )}
            />

            <Field
              name="descr"
              render={({ input, meta }) => (
                <div className={css.descriptionField}>
                  <label htmlFor="user-description">Description</label>
                  <textarea id="user-description" autoComplete="off" {...input} />

                  {meta.touched && meta.error && (
                    <p className={css.error}>{meta.error}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className={css.submitGroup}>
            <button
              className={css.cancelButton}
              onClick={() => navigate(routes.home)}
              type="button"
              disabled={submitting}
            >
              Cancel
            </button>

            <button className={css.submitButton} type="submit" disabled={submitting}>
              Save
            </button>
          </div>
        </form>
      )}
    />
  );
};

const validateForm = values => {
  const errors = {};

  setRequiredIfEmpty('name');
  setRequiredIfEmpty('surname');
  setRequiredIfEmpty('descr');

  return errors;

  function setRequiredIfEmpty(fieldName) {
    if (!values[fieldName]?.trim()) {
      errors[fieldName] = 'Required';
    }
  }
};

export default UserForm;
