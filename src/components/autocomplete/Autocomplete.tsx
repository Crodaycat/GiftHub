import './styles.css';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

interface AutocompleteProps {
  text: string;
  onChangeText: (text: string) => void;
  onChangeSelection: (text: string) => void;
}

export default function Autocomplete(props: AutocompleteProps) {
  function onChangeText(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const newText = event.target.value;

    props.onChangeText(newText);
  }

  function onSubmit(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' && props.text) {
      props.onChangeSelection(props.text);
    }
  }

  function onSubmitClick() {
    if (props.text) {
      props.onChangeSelection(props.text);
    }
  }

  return (
    <div className='main-container'>
      <div className='container-icon' onClick={onSubmitClick}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='buscar'
        value={props.text}
        style={{ width: '100%' }}
        onChange={onChangeText}
        onKeyPress={onSubmit}
      />
    </div>
  );
}
