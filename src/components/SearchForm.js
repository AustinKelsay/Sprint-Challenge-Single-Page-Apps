import React, { useState } from "react";
import { Formik, withFormik, Form, Field, ErrorMessage, } from 'formik';
import axios from 'axios';
import { __values } from "tslib";

export default function SearchForm({values, handleSubmit, handleChange}) {
  const [form, setForm] = useState([])

  return (
    <section className="search-form">
     <Formik
     //initialValues={{search: ''}}
     render={props => {

       return(
              
       <Form onSubmit={handleSubmit}>
         <Field name='search' type='text' onChange={handleChange} />

         <button className='submit' type="submit" >Submit</button>
       </Form>
       )
      }}
     />
    </section>

  );
  
}

const formikUserForm = withFormik({
  mapPropsToValues({search}){
      console.log()
      return {
        search: search || "",
      };
  },

  handleSubmit:(values) => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
            console.log(res);   
        })
        .catch(err => console.log(err.respons))
  }
})(SearchForm);