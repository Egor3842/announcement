export const MaxLength=(length)=>(value)=>{
    if (value){
        if (value.length>length) return (`Количество символов больше ${length} (${value.length}) `)
        return undefined
    }
    
}
export const Validation=(value)=>{
    if (value) return undefined
    return ('Заполните поле')
}

export const NumberValidation=(value)=>{
    console.log(value)
    let phone = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
    let testedPhone = phone.test(value);
    if (testedPhone) return undefined
    return ('Номер введен некорректно')
}
