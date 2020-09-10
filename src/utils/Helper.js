export const MaxLength=(length)=>(value)=>{
    if (value){
        if (value.length>length) return (`Количество символов больше ${length} (${value.length}) `)
        return undefined
    }
    
}
export const Validation=(value)=>{
    if (value) return undefined
    return ('Заполените поле')
}

export const NumberValidation=(value)=>{
    let phone = /^\d[\d\(\)\ -]{4,14}\d$/;
    let testedPhone = phone.test(value);
    if (testedPhone) return undefined
    return ('Номер введен некорректно')
}
