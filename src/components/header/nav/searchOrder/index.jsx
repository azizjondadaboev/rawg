import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { useLocalization } from '../../../../hooks';
import { searchOrder } from '../../../../api/clientSideApi';
import { COLOR_WHITE } from '../../../../globalStyles/colors';

import { LoadingCircleUI, ModalUI } from '../../../ui';
import { Button, FormGroup, Label, FormSubmitButton, Input, ErrorText, NotFoundText } from './components';

const SearchOrder = props => {
  const { t, language } = useLocalization();
  const [modalActive, setModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notFindOrder, setNotFindOrder] = useState(false);

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const handleSearch = values => {
    setIsLoading(true);

    searchOrder(language, values).then(response => {
      const { data } = response;

      if (data) {
        window.location.href = `/${language}/order/${data.order_id}/${data.session_id}?key=${data?.key}`;
      } else {
        setNotFindOrder(true);
        setIsLoading(false);
      }
    });
  };

  const validationSchema = Yup.object().shape({
    payer_email: Yup.string().trim().email(t('enter_valid_mail')).required(t('required')),
    search_term: Yup.string().trim().required(t('required')),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      payer_email: '',
      search_term: '',
    },
    validationSchema,
    onSubmit: handleSearch,
    validateOnBlur: true,
  });

  const handleKeyPress = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleClose = () => {
    setModalActive(false);
    resetForm();
  };

  return (
    <>
      <Button desktop={props.desktop} onClick={() => setModalActive(true)}>
        {t('search_order')}
      </Button>

      <ModalUI active={modalActive} onClose={handleClose} title={t('search_order')} maxWidth={600} fixedWidth>
        <FormGroup error={errors.payer_email}>
          <Label>{t('buyer_email')} *</Label>
          <Input
            value={values.payer_email}
            onChange={handleChange('payer_email')}
            type="email"
            required
            placeholder={`${t('enter_buyer_email')} ...`}
            onBlur={handleBlur('payer_email')}
            touched={touched.payer_email}
            error={errors.payer_email}
          />
          {touched.payer_email && errors.payer_email && <ErrorText>{errors.payer_email}</ErrorText>}
        </FormGroup>

        <FormGroup error={errors.search_term}>
          <Label>{t('locator_order_number_or_booking_number')} *</Label>
          <Input
            value={values.search_term}
            onChange={handleChange('search_term')}
            type="text"
            required
            placeholder={`${t('enter_locator_order_number_or_booking_number')} ...`}
            onBlur={handleBlur('search_term')}
            touched={touched.search_term}
            error={errors.search_term}
          />
          {touched.search_term && errors.search_term && <ErrorText>{errors.search_term}</ErrorText>}
        </FormGroup>

        {notFindOrder && <NotFoundText>{t('do_not_find_order_message')}</NotFoundText>}

        <FormSubmitButton type="button" onClick={handleSubmit}>
          {t('find')}
          {isLoading ? (
            <span>
              <LoadingCircleUI color={COLOR_WHITE} size={18} />
            </span>
          ) : null}
        </FormSubmitButton>
      </ModalUI>
    </>
  );
};

export default SearchOrder;
