import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Radio,
  Select,
  Option,
  Textarea
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const radioData = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const checkData = [
  { label: 'Dance', value: 'dance' },
  { label: 'Sing', value: 'sing' },
  { label: 'Read', value: 'read' },
];



const Crud = ({setDisplayData}) => {

  const crudSchema=Yup.object().shape({
    username: Yup.string().min(2).max(5).required(),
    email:Yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please provide valid email').required(),
    gender:Yup.string().required('Please select gender'),
    habits:Yup.array().min(1,'plese select atleast one habit').required('Please select Your habits'),
    country:Yup.string().required('Please select your Country'),
    msg:Yup.string().min(10,'message must be of atleast 10 words').max(80,'message cannot exceed 80 words').required('Please add your message'),
    imageFile:Yup.mixed().test('fileType','Invalid File type',(value=>{
      return value&&['image/jpeg','image/jpg','image/png'].includes(value.type)
    })).test('fileType','File size is too big',(value=>{
      return value&&value.size<=10*1024*1024
    })).required('please upload your image'),
    // imageReview: ''
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      habits: [],
      country: '',
      msg: '',
      imageFile: null,
      imageReview: ''
    },
    onSubmit: (val) => {
      console.log(val);
      setDisplayData(val);
    },
    validationSchema:crudSchema
  });

  return (
    <Card color="transparent" shadow={false} className='  max-w-lg mx-auto my-[30px]'>
      <form onSubmit={formik.handleSubmit} className=" mb-2 mt-10 ">
        <div className="mb-4 flex flex-col gap-6">
          <div>

          <Input
            name='username'
            value={formik.values.username}
            onChange={formik.handleChange}
            size="lg" label="Name" />
          {formik.errors.username&&formik.touched.username&&(<p className='text-red-500 text-[12px]'>{formik.errors.username}</p>)}
          </div>
          <div>
          <Input
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            size="lg" label="Email" />
    {formik.errors.email&&formik.touched.email&&(<p className='text-red-500 text-[12px]'>{formik.errors.email}</p>)}
</div>
          <div className='space-y-2'>
            <p>Select Your Gender</p>
            <div className="flex gap-6">
              {radioData.map((radio, i) => {
                return <Radio
                  onChange={formik.handleChange}
                  key={i} name="gender" label={radio.label} value={radio.value} />;
              })}


            </div>
          </div>



          <div className='space-y-2'>
            <p>Select Your Habits</p>
            <div className="flex gap-6">

              {checkData.map((check, i) => {
                return <Checkbox
                  onChange={formik.handleChange}
                  key={i} name="habits" label={check.label} value={check.value} />;
              })}
{formik.errors.habits&&formik.touched.habits&&(<p className='text-red-500 text-[12px]'>{formik.errors.habits}</p>)}

            </div>
          </div>


          <div className='space-y-3'>
            <p>Select Your Country</p>
            <Select onChange={(e) => {
              formik.setFieldValue('country', e);
            }} label="Select Country">
              <Option value='Nepal'>Nepal</Option>
              <Option value='India'>India</Option>
              <Option value='China'>China</Option>
            </Select>
            {formik.errors.country&&formik.touched.country&&(<p className='text-red-500 text-[12px]'>{formik.errors.country}</p>)}

          </div>

          <div>
            <Textarea
              name='msg'
              value={formik.values.msg}             
              onChange={formik.handleChange}            
              label="Message" />{formik.errors.msg&&formik.touched.msg&&(<p className='text-red-500 text-[12px]'>{formik.errors.msg}</p>)}
              
          </div>

          <div className='space-y-3'>
            <p>Select Your Image</p>
            <Input
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('imageFile', file);
                // const url = URL.createObjectURL(file);
                // console.log(url);

                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {

                  formik.setFieldValue('imageReview', e.target.result);
                })


              }}
              label="Image Select" type='file' accept="image/*" />
            {formik.values.imageReview && <img src={formik.values.imageReview} alt="" />}
            {formik.errors.imageFile&&formik.touched.imageFile&&(<p className='text-red-500 text-[12px]'>{formik.errors.imageFile}</p>)}

          </div>


        </div>

        <Button type='submit' className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}

export default Crud