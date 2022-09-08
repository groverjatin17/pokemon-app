import React from "react";
import { Form, Field } from "react-final-form";
import { FormSpy } from "react-final-form";
import { useDispatch } from "react-redux";
import { createPersistDecorator } from "final-form-persist";
import { UPDATE_FORM_STATE } from "../redux/reduxForm";

const FormStateToRedux = ({ form }) => {
  const dispatch = useDispatch();
  const updateForm = (form, state) => {
    dispatch(UPDATE_FORM_STATE({ form, state }));
  };

  return <FormSpy onChange={(state) => updateForm(form, state)} />;
};

const FormStateFromRedux = ({ form }) => {};

const onSubmit = async (values) => {
};

const MyForm = () => {
  const { persistDecorator } = createPersistDecorator({
    name: "myPersistKey",
    debounceTime: 500,
    whitelist: ["firstName", "lastName", "phoneNumber", "address"],
  });

  return (
    <>
    <h4>Account</h4>
      <Form
        decorators={[persistDecorator]}
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="userDetails" />
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                className="input-group input-group-icon"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Phone Number</label>
              <Field
                name="phoneNumber"
                component="input"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label>Address</label>
              <Field
                name="address"
                component="input"
                type="text"
                placeholder="Address"
              />
            </div>
            <FormStateFromRedux form="userDetails" />
          </form>
        )}
      </Form>
    </>
  );
};

export default MyForm;
