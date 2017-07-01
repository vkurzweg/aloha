/*
 *
 * CareersPage actions
 *
 */

 import {
   CREATE_APPLICATION,
   CREATE_APPLICATION_SUCCESS,
   CREATE_APPLICATION_FAILURE,
   OPEN_CAREER_MODAL,
   CLOSE_CAREER_MODAL,
 } from './constants';


 export function createApplication() {
   return {
     type: CREATE_APPLICATION,
     payload: true,
   };
 }

 export function createApplicationSuccess() {
   return {
     type: CREATE_APPLICATION_SUCCESS,
     payload: false,
   };
 }

 export function createApplicationFailure() {
   return {
     type: CREATE_APPLICATION_FAILURE,
     payload: false,
     isCreateFailed: true,
   };
 }

 export function openModal() {
   console.log('action dispatched')
   return {
     type: OPEN_CAREER_MODAL,
     payload: true,
   };
 }

 export function closeModal() {
   return {
     type: CLOSE_CAREER_MODAL,
     payload: false,
   };
 }

