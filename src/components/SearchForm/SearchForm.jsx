import React, { Component } from 'react';
import { addTask } from 'redux/taskSlice';
import { useLocalStorage } from 'hooks';
import { nanoid } from '@reduxjs/toolkit';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useLocalStorage('search', '');

  const handleInput = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = { id: nanoid(), text: value };
    dispatch(addTask(todo));
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={value}
        autoFocus
      />
    </SearchFormStyled>
  );
};
