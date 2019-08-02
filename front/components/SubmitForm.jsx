import axios from 'axios';
import React from 'react';
import { Form, Field } from 'react-final-form';

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secretUrl: '' };
  }

  onSubmit = (values) => {
    const { note } = values;
    console.log(note);
    axios.post('/', {
      data: { note },
    })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({
          handleSubmit, form, submitting, pristine,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label for="secret-note">Secret note</label>
              <Field id="secret-note" name="note" component="textarea" placeholder="Write your message here" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default SubmitForm;
