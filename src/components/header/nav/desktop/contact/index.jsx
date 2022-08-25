import { ReactComponent as SupportIcon } from '../../../../../assets/icons/support.svg';

import { ContactsBlock, PhoneNumber } from './components';

const Contacts = () => {
  const phone = process.env.supportPhone;

  return (
    <ContactsBlock>
      <PhoneNumber href={`tel: ${phone}`}>
        <SupportIcon />
        {phone}
      </PhoneNumber>
    </ContactsBlock>
  );
};

export default Contacts;
