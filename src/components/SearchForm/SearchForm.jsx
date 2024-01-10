import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Input } from './SearchForm.styled';

const SearchForm = ({ query, handleChange, submitForm }) => {
  return (
    <Form onSubmit={submitForm}>
      <button type="submit">
        <AiOutlineSearch size="24" color="black" />
      </button>
      <Input value={query} type="text" onChange={handleChange} />
    </Form>
  );
};

export default SearchForm;
