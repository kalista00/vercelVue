<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="id">ID:</label>
          <input type="text" id="id" v-model="user.id">
        </div>
        <div>
          <label for="password">비밀번호:</label>
          <input type="password" id="password" v-model="user.password">
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          id: '',
          password: ''
        }
      }
    },
    methods: {
      submitForm() {
        // 여기서 ID와 비밀번호를 처리합니다.
        // 예: 서버로 전송하거나 콘솔에 출력
        console.log("ID:", this.user.id);
        console.log("비밀번호:", this.user.password);
        // 서버에 요청을 보내는 로직을 여기에 추가하세요.
      }
    }
  }
  </script>
  
  <style>
  /* 스타일링은 필요에 따라 추가하세요. */
  </style>
  