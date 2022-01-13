import React, {useState, useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector} from 'react-redux'
import { listUsers } from '../actions/userActions';

import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_DETAILS_REQUEST,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS, 
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_SUCCESS ,
    USER_UPDATE_PROFILE_RESET,
    USER_LIST_REQUEST,
    USER_LIST_FAIL,
    USER_LIST_SUCCESS ,
    USER_LIST_RESET,
} from "../constants/userConstants";

function UserListScreen() {
    
    const dispatch = useDispatch()

    const userList = useSelector( state => state.userList)
    const {loading, error, users } = userList

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])

    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default UserListScreen
