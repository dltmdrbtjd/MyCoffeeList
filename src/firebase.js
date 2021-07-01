//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClt7kDjoMSnr67HU0vZt0rcbsXD-fBM-k",
    authDomain: "coffeelist-9b17e.firebaseapp.com",
    projectId: "coffeelist-9b17e",
    storageBucket: "coffeelist-9b17e.appspot.com",
    messagingSenderId: "864576928436",
    appId: "1:864576928436:web:583f31aeb40155a5fd35e1",
    measurementId: "G-0DXBCTW2PP"
    // firebase 설정과 관련된 개인 정보
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };