import { Form, Formik } from "formik";
import { booldgroup, city, acceptOnlyNumber, phoneNumberFormat, country, govtId, guardanName, initialvalues, maritalStatus, options, religion, state, validationSchema } from '../utils/utils'
import InputField from "../components/customInput/InputField";
import Button from "../components/customInput/customBuuton/CustomButton";
import SelectInputField from "../components/selectinputfield/SelectInputField";
import './formdetails.css'
import { useNavigate } from "react-router-dom";
import api from '../utils/confi'
function FormValidation({ setUsersDetails, userDetails }) {
    const navigate = useNavigate()
    const callbackfu=(success,response)=>{
        console.log(response)
    }
    const updates = (data, secondparam) => {
        const payload = {
            address: data?.address,
            booldgroup: data?.booldgroup?.value,
            city: data.city?.value,
            country: data?.country?.value,
            dataOfbirth: data?.dataOfbirth,
            email: data?.email,
            gender: data?.gender?.value,
            govtId: `${data?.govtcode?.value} ${data?.govtId}`,
            govtcode: data?.govtcode?.value,
            guardan: data?.guardan,
            maritalStatus: data?.maritalStatus?.value,
            mobile: data?.mobile,
            name: data?.name,
            pincode: data?.pincode,
            religion: data.religion?.value,
            state: data?.state?.value,
            occupation: data?.occupation
        }
        if (data) {
            api.useDatails(callbackfu,payload)
            localStorage.setItem('userdetails', JSON.stringify(payload))
            setUsersDetails([...userDetails, payload])
            navigate('/tableData')
        }


    };
    return (

        <Formik
            initialValues={initialvalues}
            onSubmit={updates}
            validationSchema={validationSchema}
        >
            {({ values, handleChange, errors, handleBlur, touched, isValid, dirty, setFieldValue, setFieldTouched }) => (
                <Form>
                    {
                        console.log("values", values?.nationality?.value,)
                    }
                    <h1>Persional Details</h1>
                    <div className="form-input">

                        <InputField
                            name="name"
                            label="Name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.name}
                            maxLength={6}
                            error={touched.name && errors.name} />

                        <InputField
                            name="dataOfbirth"
                            label="Data Of Birth"
                            placeholder="DD/MM/YYYY or Age in Years"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.dataOfbirth}
                            error={touched.dataOfbirth && errors.dataOfbirth} />

                        <SelectInputField
                            name="gender"
                            label="Gender"
                            value={values.value}
                            options={options}
                            onChange={(event, newValue) => {
                                setFieldValue("gender", newValue)
                            }}
                            onBlur={() => {
                                setFieldTouched("gender", true)
                            }}
                            error={touched.gender && errors?.gender?.value}

                        />
                        <InputField
                            name="mobile"
                            label="Phone"
                            placeholder="Enter your Mobile Number"
                            onChange={(event) => {
                                let name = event.target.name;
                                let value = event.target.value
                                let onlynumber = acceptOnlyNumber(value)
                                onlynumber=phoneNumberFormat(onlynumber)
                                    if (onlynumber?.length > 11) return
                                    setFieldValue(name, onlynumber) 
                            }}
                            onBlur={handleBlur}
                            value={values?.mobile}
                        />
                        <SelectInputField
                            name="govtId"
                            label="Govt ID"
                            value={values.value}
                            placeholder='ID Type'
                            options={govtId}
                            onChange={(event, newValue) => {
                                // console.log(newValue)
                                setFieldValue("govtcode", newValue)
                            }}
                        />
                        <InputField
                            name="govtId"
                            placeholder="Enter Govt ID"
                            onBlur={handleBlur}
                            value={values?.govtId}
                            onChange={(event) => {
                                let name = event.target.name;
                                let value = event.target.value
                                if (name === "govtId") {
                                    if (value.length > 12) return
                                    setFieldValue(name, value)
                                }
                            }}
                        />
                    </div>
                    <h1>Contact Details</h1>
                    <div className="contact-details">
                        <SelectInputField
                            name="guardan"
                            label="Guarden Details"
                            value={values.value}
                            placeholder='Enter Lable'
                            options={guardanName}
                            onChange={(event, newValue) => {
                                setFieldValue("guardens", newValue)
                            }}
                        />
                        <InputField
                            name="guardan"
                            placeholder="Enter Guardan Name"
                            onBlur={handleBlur}
                            value={values?.guardan}
                            onChange={handleChange}
                        />
                        <InputField
                            name="email"
                            label='Email'
                            placeholder="Enter Email"
                            onBlur={handleBlur}
                            value={values?.email}
                            onChange={handleChange}
                        />
                        <InputField
                            name="emargenyContact"
                            label='Emargeny Contact No'
                            placeholder="Enter Emargeny Contact No"
                            onBlur={handleBlur}
                            value={values?.emargenyContact}
                            onChange={(event)=>{
                                let name=event.target.name;
                                let value=event.target.value;
                             if(value.length>10)return
                             setFieldValue(name,value)

                            }}
                        />

                    </div>
                    <h1>Address Details</h1>
                    <div className="adress-details">
                        <InputField
                            name="address"
                            label='Address'
                            placeholder="Enter Adress"
                            onBlur={handleBlur}
                            value={values?.address}
                            onChange={handleChange}
                        />
                        <SelectInputField
                            name="state"
                            label="State"
                            value={values.value}
                            placeholder='Enter State'
                            options={state}
                            onChange={(event, newValue) => {
                                setFieldValue("state", newValue)
                            }}
                        />
                        <SelectInputField
                            name="city"
                            label="City"
                            value={values.value}
                            placeholder='Enter City'
                            options={city}
                            onChange={(event, newValue) => {
                                setFieldValue("city", newValue)
                            }}
                        />
                        <SelectInputField
                            name="country"
                            label="Country"
                            value={values.value}
                            placeholder='Enter Country'
                            options={country}
                            onChange={(event, newValue) => {
                                setFieldValue("country", newValue)
                                // setFieldValue("nationality", newValue)
                            }}
                        />
                        <InputField
                            name="pincode"
                            label='Pincode'
                            placeholder="Enter Pincode"
                            onBlur={handleBlur}
                            value={values?.pincode}
                            onChange={handleChange}
                        />
                    </div>
                    <h1>Others Details</h1>
                    <div className="others-details">
                        <InputField
                            name="occupation"
                            label='Occupation'
                            placeholder="Enter Occupation"
                            onBlur={handleBlur}
                            value={values?.occupation}
                            onChange={handleChange}
                        />
                        <SelectInputField
                            name="religion"
                            label="Religion"
                            value={values.value}
                            placeholder='Enter Country'
                            options={religion}
                            onChange={(event, newValue) => {
                                setFieldValue("religion", newValue)
                            }}
                        />
                        <SelectInputField
                            name="maritalStatus"
                            label="Marital Status"
                            value={values.value}
                            placeholder='Enter Country'
                            options={maritalStatus}
                            onChange={(event, newValue) => {
                                setFieldValue("maritalStatus", newValue)
                            }}
                        />
                        <SelectInputField
                            name="booldgroup"
                            label="Boold Group"
                            value={values.value}
                            placeholder='Enter Country'
                            options={booldgroup}
                            onChange={(event, newValue) => {
                                setFieldValue("booldgroup", newValue)
                            }}
                        />
                    </div>
                    <Button submit="Submit" updates={updates} />
                </Form>

            )}
        </Formik>
    );
}

export default FormValidation;

