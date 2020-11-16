import Vue from "vue";
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-database";
import store from '../store'

import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(fireuser => store.commit('setFireUser', fireuser))

// firebase.database().ref().child("site").set(this.site);

Vue.prototype.$firebase = firebase;