import React from 'react'
import {useFormState} from 'react-use-form-state'
import emailjs from 'emailjs-com'

export default function Form() {
    let [formState,{text}]=useFormState()
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(`apply name:${formState.values.apply_name}`)
        console.log(`leave type:${formState.values.leave_type}`)
        let template_params = {
            "apply_name":formState.values.apply_name,
            "leave_type":formState.values.leave_type
         }
        let service_id = "gmail_ravi_personal";
        let template_id = "template_Pf1VepTN_clone";
        let user_id="user_06tOgtSi4gf4hxDbPiXwR"
        emailjs.send(service_id,template_id,template_params,user_id)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...text('apply_name')}/>
                <input {...text('leave_type')}/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
