import * as yup from 'yup';

export const notionTemplateValidationSchema = yup.object().shape({
  template_name: yup.string().required(),
  client_id: yup.string().nullable(),
});
