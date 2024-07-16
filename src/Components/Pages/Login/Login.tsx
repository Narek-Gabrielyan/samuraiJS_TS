import { Formik, Form, Field } from "formik";
import "./Login.css"
import { useAppDispatch } from "../../../Store/hooks";
import { fetchLogin } from "../../../Store/Slices/authSlice";

export default function Login() {
    const dispatch = useAppDispatch()

    const authUser = (values: any) => {
        dispatch(fetchLogin(values))
    };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => authUser(values)}
      >
        {() => (
          <Form className="form">
            <Field name="email" type="email" />
            <Field name="password" type="password" />
            <button>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
