import React, { useState } from 'react';
import styled from 'styled-components';

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactMeForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from actually submitting in this example.
    setSubmitted(true);
  };

  return (
    <ContactMeContainer>
      <SectionTitle>Contact Me</SectionTitle>
      {submitted ? (
        <div>Thank you for your message!</div>
      ) : (
        <ContactMeForm onSubmit={handleSubmit}>
          <FormField>
            <Label>Name:</Label>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Email:</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Message:</Label>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </FormField>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactMeForm>
      )}
    </ContactMeContainer>
  );
}

export default ContactMe;
