import React from 'react'
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'
import s from '../assests/styles/Form.module.css'
import { TextArea, Select,Input } from './TextArea'
import { Validation,MaxLength, NumberValidation } from '../utils/Helper'

let MaxLengthText=MaxLength(300)
let MaxLengthTitle=MaxLength(140)

const AddAnnounce = (props)=>{
    const onSubmit=(formData)=>{
        props.SetNewAnnounce(formData.title, formData.text, formData.number,formData.city)
        props.setButtonClick(false)
        props.ShowCurrentAnnounce()
    }
    return (
    <div className = {s.container}>
        <div className = {s.Main_Title}>Создание объявления</div>
    <span onClick = {()=>{props.setButtonClick(false)}} className={s.close}></span>
    <ReduxForm onSubmit= {onSubmit} />
    </div>
    )
}



const AddAnnounceForm=(props)=>{
return <div className = {s.container_Form}>
<form onSubmit={props.handleSubmit}>
    <table>
        <tr className = {s.BigTextArea}>
            <td className = {s.TableTitle}>Заголовок <span style={{color: 'red'}}>*</span></td>
            <td><div> <Field placeholder={'Заголовок'} name={"title"} validate = {[Validation,MaxLengthTitle]} component={TextArea} /> </div></td>
        </tr>
        <tr className = {s.BigTextArea}>
            <td className = {s.TableTitle}>Описание</td>
            <td><div> <Field placeholder={'Описание'} name={"text"} validate = {[MaxLengthText]}  component={TextArea} /> </div></td>
        </tr>
        <tr>
            <td style={{fontWeight: 500, display:'inline-flex'}}>Номер телефона <span style={{color: 'red'}}>*</span></td>
            <td><div> <Field placeholder={'8(777)999-99-99'} name={"number"} validate = {[Validation,NumberValidation]} component={Input} /></div></td>
        </tr>
        <tr>
            <td style={{fontWeight: 500}}>Город</td>
            <td> <div> <Field placeholder={'Город'} name={"city"}  component={Select}>
        {props.cityBook.map(x=>
          <option value={x}>{x}</option>
            )}
        </Field> </div></td>
        </tr>
    </table>
    
   {props.error && <div>{props.error} </div>}
    <div className={s.buttonContainer}><button className={s.button}>Создать</button></div>
</form>
</div>
}

const ReduxForm=reduxForm({
    form:'form',
    cityBook:['Не выбран','Москва', 'Санкт-Петербург','Казань', 'Нижний Новгород']
})(AddAnnounceForm)
 export default AddAnnounce