const send = window.emailjs.send;
const serviceId = 'service_nzlh4us';
const templateId = 'template_v890nzg';
const baseTemplateParames = {
  from_name: 'Test Name',
  from_email: 'test@example.com',
  message: 'test test test test test.'
}

export default (templateParams=baseTemplateParames) => {
  send(
    serviceId,
    templateId,
    templateParams
  )
}


