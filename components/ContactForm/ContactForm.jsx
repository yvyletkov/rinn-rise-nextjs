import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import s from "./style.module.scss";
import cx from "classnames";
import request from "../Api";
import swal from 'sweetalert2';
import Cleave from 'cleave.js/react';

const Input = ({
                   field,
                   type,
                   form: {touched, errors},
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <input type={type} className={classNames} {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const NumInput = ({
                      field,
                      type,
                      form: {touched, errors},
                      ...props
                  }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <Cleave placeholder="Номер телефона"
                options={{
                    prefix: '+7',
                    delimiters: [' (', ') ', '-', '-'],
                    blocks: [2, 3, 3, 2, 2],
                }}
            // onChange={this.onChange.bind(this)}
                className={classNames}
                {...field} {...props}
                type={type}
        />
        {/*<input type={type} className={classNames} {...field} {...props} />*/}
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const Select = ({
                    field,
                    type,
                    form: {touched, errors},
                    ...props
                }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <select type={type}
                style={{color: '#bababa'}}
                className={classNames} {...field}
                value={"default"}
                {...props} >
            <option value="default" hidden>Выберите дату</option>
            <option value="Дата 20.03-27.03">с 20 по 27 марта</option>
            <option value="Дата 3.04-10.04">с 3 по 10 апреля</option>
        </select>
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const Textarea = ({
                      field,
                      form: {touched, errors},
                      ...props
                  }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}}>
        <textarea rows={6} className={classNames} {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
};

const ContactForm = ({
                         agreementTextColor = '#000',
                         submitBtnText,
                         withEmail,
                         setPopupOpen,
                         withPhone,
                         withMessage,
                         withAge,
                         withDate,
                         withDocument,
                         withName = true,
                         withHiddenInput,
                         hiddenInputValue,
                         formName,
                         setNumQuestion,
                         swalText = 'Мы получили Вашу заявку 😌',
                         textAreaPlaceholder = 'Введите Ваше сообщение',
                         requestUrl, ...props
                     }) => {

    const reAge = /^[1-9]?[0-9]{1}$|^100$/;

    Yup.addMethod(Yup.string, "age", function () {
        return this.test("age", "Некорректный возраст", value =>
            reAge.test(value)
        );
    });

    const Schema = Yup.object().shape({
        name: withName ? Yup.string()
            .min(2, 'Слишком короткое имя 😢')
            .max(25, 'Слишком длинное имя 😢')
            .required('Пожалуйста, введите имя') : null,
        phone: withPhone ? Yup.string()
            .min(18, 'Номер введен неверно')
            .max(18, 'Слишком длинный номер телефона 😢')
            // .phone()
            .required('Это поле тоже обязательное') : null,
        age: withAge ? Yup.string()
            .min(1, 'Введите корректный возраст')
            .max(2, 'Возраст указан не корректно 😢')
            .age()
            .required('Это поле тоже обязательное') : null,
        date: withDate && Yup.string().required('Пожалуйста, выберите дату'),
        email: withEmail ? Yup.string()
            .email('E-mail введен некорректно')
            .required('Это поле тоже обязательное') : null,
        message: withMessage ? Yup.string()
            .min(2, 'Слишком мало букв 😢')
            .max(3000, 'Слишком много букв 😢')
            .required('Пожалуйста, введите текст сообщения') : null,
    });

    const data = {};


    const onSubmit = (values, {resetForm}) => {
        data.form = {
            "url": `${requestUrl ? requestUrl : window.location.href}`
        };
        data.inputs = [
            {
                "alias": "Источник",
                "value": formName,
            }
        ];
        if (withName) data.inputs = [
            ...data.inputs,
            {
                "alias": "Имя",
                "value": values.name,
            },
        ];
        if (withPhone) data.inputs = [
            ...data.inputs,
            {
                "alias": "Номер телефона",
                "value": values.phone,
            },
        ];
        if (withEmail) data.inputs = [
            ...data.inputs,
            {
                "alias": "E-mail",
                "value": values.email,
            },
        ];
        if (withMessage) data.inputs = [
            ...data.inputs,
            {
                "alias": "Сообщение",
                "value": values.message,
            },
        ];
        if (withAge) data.inputs = [
            ...data.inputs,
            {
                "alias": "Возраст",
                "value": values.age,
            },
        ];
        if (withDate) data.inputs = [
            ...data.inputs,
            {
                "alias": "Дата",
                "value": values.date,
            },
        ];
        if (withHiddenInput) data.inputs = [
            ...data.inputs,
            {
                "alias": "Ответы на вопросы",
                "value": hiddenInputValue,
            },
        ];

        request(data)
            .then((response) => {
                if (response.status === 200) {
                    if (withDocument) {
                        window.open(withDocument)
                    }
                    if (values.name.length !== 0) {
                        const name = values.name[0].toUpperCase() + values.name.slice(1);
                        swal.fire({
                            title: `Спасибо, ${name}!`,
                            text: swalText,
                            icon: 'success',
                            confirmButtonText: 'Хорошо'
                        })
                    } else {
                        swal.fire({
                            title: `Спасибо!`,
                            text: swalText,
                            icon: 'success',
                            confirmButtonText: 'Хорошо'
                        })
                    }
                }
                else throw response
            })
            .catch((err) => {
                swal.fire({
                    title: 'При отправке данных произошла ошибка 🤭',
                    text: 'Мы уже работаем над ее исправлением!',
                    icon: 'error',
                    confirmButtonText: 'Хорошо'
                })
                console.log(err)
            });

        resetForm({})

    };


    return <Formik
        initialValues={{
            name: '',
            phone: '',
            email: '',
            message: '',
            date: '',
            hidden: '',
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            {withName && <Field component={Input} name="name" placeholder={'Введите Ваше имя'}/>}
            {withEmail && <Field component={Input} name="email" type={"text"} placeholder={'Введите Ваш E-mail'}/>}
            {withPhone && <Field component={NumInput} name="phone" type={"text"} placeholder={'Введите Ваш телефон'}/>}
            {withMessage && <Field component={Textarea} name="message" placeholder={textAreaPlaceholder}/>}
            {withAge && <Field component={Input} name="age" type={"number"} placeholder={withAge}/>}
            {withDate && <Field component={Select} name="date" type={"select"}/>}
            <div className="agreementBlock">
                <input className="agreementCheckbox" type="checkbox" required/>
                <label htmlFor="checkbox-agreement">
                    <p className="checkboxText"
                       style={{color: agreementTextColor}}>Даю&nbsp;
                        <a className="checkboxText"
                           style={{textDecoration: 'underline', color: agreementTextColor}}
                           href="/document-files/Политика-обработки-персональных-данных.pdf"
                           target="_blank">согласие на обработку персональных данных
                        </a>
                    </p>
                </label>
            </div>
            <button style={{width: '100%'}}
                    className={s.button}
                    type="submit"
                    onClick={() => {
                        setPopupOpen && setPopupOpen(false);
                        withHiddenInput && setNumQuestion(0);
                    }}>{submitBtnText}
            </button>
        </Form>
    </Formik>
};

export default ContactForm
