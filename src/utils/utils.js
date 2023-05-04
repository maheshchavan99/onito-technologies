import * as yup from "yup";
// const lowercaseRegex = /(?=.*[a-z])/;
// const uppercaseRegex = /(?=.*[A-Z])/;
// const numbercaseRegex = /(?=.*[0-9])/;
// const specialChar = /(?=.[!@#\$%\^&])/;

export const validationSchema = yup.object().shape({
  name: yup.string().required("name isrequired!"),
  dataOfbirth: yup.string().required(" data of birth is required!"),
  gender:yup.object({
    value:yup.string().required("Gender requied")
  }),

});
export const initialvalues= {
  name: "",
  dataOfbirth: "",
  gender:"",
  mobile:"",
  govtId:"",
  guardan:"",
  email:"",
  emargenyContact:"",
  address:"",
  state:"",
  city:"",
  Country:"",
  pincode:"",
  occupation:"",
  religion:"",
  maritalStatus:"",
  booldgroup:"",
  nationality:""
};
export const options = [
  {
    code: "male",
    value: "Male"
  },
  {
    code: "female",
    value: "Female"
  }
]
export const govtId = [
  {
    code: "aadhar",
    value: "Aadhar"
  },
  {
    code: "pan",
    value: "Pan"
  }
]
export const guardanName = [
  {
    code: "lable1",
    value: "Lable1"
  },
  {
    code: "lable2",
    value: "Lable2"
  }
]

export const country=[
  {code: 'IN', value: 'India'},
  // { code: 'BB', value: 'Barbados'},
  // { code: 'BD', value: 'Bangladesh'},
  // { code: 'BE', value: 'Belgium'},
  // { code: 'BF', value: 'Burkina Faso'},
  // { code: 'BG', value: 'Bulgaria'},
  // { code: 'BH', value: 'Bahrain'},
  // { code: 'BI', value: 'Burundi'},
  // { code: 'BJ', value: 'Benin'},
  // { code: 'BL', value: 'Saint Barthelemy'},
  // { code: 'BM', value: 'Bermuda'},
  // { code: 'BN', value: 'Brunei Darussalam'},
  // { code: 'BO', value: 'Bolivia'},
  // { code: 'BR', value: 'Brazil'},
  // { code: 'BS', value: 'Bahamas'},
  // { code: 'BT', value: 'Bhutan'},
  // { code: 'BV', value: 'Bouvet Island'},
  // { code: 'BW', value: 'Botswana'},
  // { code: 'BY', value: 'Belarus'},
  // { code: 'BZ', value: 'Belize'},
]
export const city=[
  {
    code:"gulbarga",
    value:"Gulbarga",
  },
  {
    code:"gadag",
    value:"Gadag",
  },
  {
    code:"bijapur",
    value:"Bijapur",
  },
]
export const state=[
  {
    code:"KA",
    value:"Karnataka",
  },
  {
    code:"MH",
    value:"Maharastra",
  },
  {
    code:"UP",
    value:"Uttar Predesh",
  }
]

export const religion=[
  {code:"hindu",value:"Hinduism"},
  {code:"islam",value:"Hinduism"},
  {code:"christianity",value:"Christianity"},

]
export const maritalStatus=[
  
    {code:"single",value:"Single"},
    {code:"married",value:"Married"},
    
  
]
export const booldgroup=[
  {code:"a+",value:"A+"},
  {code:"b+",value:"B+"},
  {code:"o+",value:"O+"},
]

// regex 
export const acceptOnlyNumber=(value)=>{
  return value?value.replace(/\D/g, ''):"" 
}
export const acceptOnlycharcter=(value)=>{
  return value?value.replace(/^\d+$/, ''):"" 
}
export const phoneNumberFormat = (value) => {
  let format = (value?.toString())?.match(/.{1,5}/g)?.join(' ')
  return format
}
// export const aadharNumberFormat = (value) => {
//   let format = (value?.toString())?.match(/.{1,4}/g)?.join(' ')
//   return format
// }