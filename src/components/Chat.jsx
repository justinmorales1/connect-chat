import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Chat = (props) => {

  const { handleSubmit } = props;

  return (
    <form onSubmut={handleSubmit}>
      <div>
        <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'chat'
})(Chat);