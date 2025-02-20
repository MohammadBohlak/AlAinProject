import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { PrimaryButton } from "../../common/PrimaryButton";
import FormInput from "../formInput/FormInput";
import { Select, StyledForm, TextArea } from "./contactForm.styles";

const ContactForm = () => {
  // تعريف schema للتحقق من الصحة باستخدام Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم الكامل مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string().matches(
      /^[0-9]+$/,
      "رقم الهاتف يجب أن يحتوي على أرقام فقط"
    ),
    subject: Yup.string().required("الموضوع مطلوب"),
    message: Yup.string().required("الرسالة مطلوبة"),
  });

  // استخدام useFormik لإدارة النموذج والتحقق من الصحة
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("تم إرسال النموذج:", values);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    },
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <StyledForm>
      <PrimaryText>أرسل رسالتك</PrimaryText>
      <Form onSubmit={formik.handleSubmit}>
        {/* حقل الاسم الكامل */}
        <FormInput
          label="الاسم الكامل"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.name && formik.errors.name}
          error={formik.errors.name}
        />

        {/* حقل البريد الإلكتروني */}
        <FormInput
          label="البريد الإلكتروني"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.email && formik.errors.email}
          error={formik.errors.email}
        />

        {/* حقل رقم الهاتف */}
        <FormInput
          label="رقم الهاتف"
          type="tel"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.phone && formik.errors.phone}
          error={formik.errors.phone}
        />

        {/* حقل الموضوع */}
        <Form.Group className="mb-3">
          <Form.Label>
            <SecondaryText>الموضوع</SecondaryText>
          </Form.Label>
          <Select
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.subject && formik.errors.subject}
          >
            <option value="">اختر الموضوع</option>
            <option value="استفسار">استفسار</option>
            <option value="شكوى">شكوى</option>
            <option value="دعم فني">دعم فني</option>
          </Select>
          {formik.touched.subject && formik.errors.subject && (
            <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
              {formik.errors.subject}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>
            <SecondaryText>الرسالة</SecondaryText>
          </Form.Label>
          <TextArea
            rows={5}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.message && formik.errors.message}
          />
          {formik.touched.message && formik.errors.message && (
            <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
              {formik.errors.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <PrimaryButton type="submit">إرسال الرسالة</PrimaryButton>
      </Form>

      {/* رسالة نجاح الإرسال */}
      {submitted && (
        <Alert variant="success" className="mt-3">
          تم إرسال رسالتك بنجاح، سنرد عليك خلال 24 ساعة
        </Alert>
      )}
    </StyledForm>
  );
};


export default ContactForm;
