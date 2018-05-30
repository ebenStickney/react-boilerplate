import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';


 //creating eventhandler for calling startLogin action
export const LoginPage = ({ startLogin }) => {
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'> App Name </h1>
        <p> Tag Line</p>
        <button onClick={startLogin} className='button'> Login With Google </button>
      </div>

    </div>

  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () =>dispatch(startLogin())
})  //setting up prop to call dispatch action.

export default connect(undefined, mapDispatchToProps)(LoginPage); //creaing HOC with connect
