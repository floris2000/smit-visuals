import React, { useRef, useState } from 'react';
import './contact.css'
import ProfileIMG from '../../img/ProfilePicture.jpg'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()

    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [send, setSend] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('handleSubmit')
        if(subject !== '' && name !== '' && email !== '' && message !== ''){
            emailjs.sendForm('service_smcfh8i', 'template_6q7d68s', formRef.current, '4UFK6V5bb96E3lcjT')
            .then((result) => {
                console.log(result.text);
                setSubject('');
                setName('');
                setEmail('');
                setMessage('');
                setSend(true);
            }, (error) => {
                console.log(error.text);
            });
        }else{
            alert('Vul aub alle gebieden in.')
        }

    }

    return (
        <div className='c' id='contact'>
            <div className="c-left">
                <div className="c-img-wrapper">
                    <img src={ProfileIMG} alt="profile" className="c-profile-img" />
                </div>
                <div className="c-info">
                    <p className="c-name">Floris Smit</p>
                    <p className="c-email">info@smitvisuals.nl</p>
                    <p className="c-phone">+31623979964</p>
                    <p className="c-address">3232 PE Brielle - bieningen 14</p>
                </div>
            </div>
            <div className="c-right">
                <form ref={formRef}>
                    <input  
                        type="text" 
                        placeholder='Onderwerp' 
                        name='user_subject' 
                        onChange={event => setSubject(event.target.value)} 
                        value={subject}
                    />
                    <input  
                        type="text" 
                        placeholder='Naam' 
                        name='user_name' 
                        onChange={event => setName(event.target.value)} 
                        value={name}
                    />
                    <input  
                        type="text" 
                        placeholder='Email' 
                        name='user_email' 
                        onChange={event => setEmail(event.target.value)} 
                        value={email}
                    />
                    <textarea  
                        id='message-area'
                        rows='5' 
                        placeholder='Bericht' 
                        name='message'
                        onChange={event => setMessage(event.target.value)}
                        value={message}
                    />
                    <button onClick={handleSubmit}>Stuur</button>
                </form>
                {send && alert('Bericht verzonden')}
            </div>
        </div>
    )
}

export default Contact