import emailIcon from '../../assets/images/inputIcons/arroba.png';
import passwordIcon from '../../assets/images/inputIcons/password.png';
import eyeIcon from '../../assets/images/inputIcons/eye.png';
import { Input, Form } from '../../components';
import { useField } from '../../hooks';
import { login } from '../../store/slices/user';
import { UserLogin } from '../../models/User';
import { regularExpressions } from '../../utils/regularExpressions';

export default function Home() {
  const [data, setData] = useField<UserLogin>({
    email: '',
    password: '',
  });
  return (
    <Form formDispatch={() => login(data)}>
      <Input
        id='email'
        type='email'
        placeholder='mi_email@gmail.com'
        icon={emailIcon}
        onChange={setData}
        value={data.email}
        pattern={regularExpressions.email}
        error='El email no es valido'
      />
      <Input
        id='password'
        type='password'
        placeholder='Ingrese su contraseña'
        icon={passwordIcon}
        buttonIcon={eyeIcon}
        onChange={setData}
        value={data.password}
        pattern={regularExpressions.password}
        error='No es una contraseña valida'
      />
    </Form>
  );
}
