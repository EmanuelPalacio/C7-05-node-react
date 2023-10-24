import bcryptjs from 'bcryptjs';

interface encriptType {
  validate: (passReceived: string, password: string) => boolean;
  toEncrypt: (password: string) => string;
}

const encript: encriptType = {
  validate: (passReceived, password) => {
    return bcryptjs.compareSync(passReceived, password);
  },
  toEncrypt: (password) => {
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
  },
};
export default encript;
