import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import {MdPets} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

const Header = () => {
  // const [validUser, setValidUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.target.passcode.value);
    setErrorMsg("");

    // request user data
    let url = '/api/user?passcode=' + event.target.passcode.value;
    fetch(url)
      .then(checkStatus)
      .then(res => res.json())
      .then(handleLogin)
      .catch(handleError)
  };

  const handleLogin = (resp) => {
    setErrorMsg("");
    // console.log(resp);
    navigate('posts', {replace: false, state: {resp}});
  }

  const checkStatus = async (res) => {
    if (!res.ok) {
      let message = await res.text();
      throw new Error(message);
    }
    return res;
  }

  const handleError = (error) => {
    setErrorMsg(error.message);
  }

  return (
    <div className="login__container">
      <h1>Pet Posts</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <input type='password' name='passcode' placeholder='passcode'></input>
        <button type="submit"><BsArrowRightShort className='btn__arrow'/></button>
      </form>
      <p className='error__msg'>{errorMsg}</p>
      <MdPets className='pet__icon'/>
    </div>
  )
}

export default Header