import emailIcon from '../../assets/images/inputIcons/arroba.png';
import passwordIcon from '../../assets/images/inputIcons/password.png';
import eyeIcon from '../../assets/images/inputIcons/eye.png';
import profile from '../../assets/images/inputIcons/profile.png';
import store from '../../assets/images/inputIcons/store.png';
import { Input, Form } from '../../components';
import { useField } from '../../hooks';
import { UserRegister } from '../../models/User';
import { regularExpressions } from '../../utils/regularExpressions';

export default function Register() {
  const [data, setData] = useField<UserRegister>({
    name: '',
    surname: '',
    email: '',
    companyName: '',
    password: '',
  });
  return (
    <Form formDispatch={() => {}}>
      <Input id='name' type='text' placeholder='Nombre' icon={profile} onChange={setData} value={data.name} maxLength={20} />
      <Input id='surname' type='text' placeholder='Apellido' icon={profile} onChange={setData} value={data.surname} maxLength={20} />
      <Input
        id='companyName'
        type='text'
        placeholder='Nombre del negocio'
        icon={store}
        onChange={setData}
        value={data.companyName}
        maxLength={20}
      />
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
        error='Debe contener 8 caracteres como minimo, una minuscula, una mayuscula y un caracter especial. '
      />
    </Form>
  );
}
