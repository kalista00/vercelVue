<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="id">ID:</label>
          <input type="text" id="id" v-model="user.id">
        </div>
        <div>
          <label for="password">Password:</label>
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
      console.log("ID:", this.user.id);
      console.log("비밀번호:", this.user.password);

      // 서버에 요청을 보내는 로직을 추가합니다.
      fetch('/api/fetch', { // 여기에 서버의 URL을 넣으세요.
        method: 'GET', // 또는 'GET', 'PUT', 'DELETE' 등 요청 방식에 맞게 설정하세요.
        headers: {
          'Content-Type': 'application/json',
          // 필요한 경우 다른 헤더도 추가할 수 있습니다.
        },
        body: JSON.stringify({
          id: this.user.id,
          password: this.user.password
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('성공:', data);
      })
      .catch((error) => {
        console.error('오류:', error);
      });
    }
  }
}

  </script>
  
  <style>
  /* 스타일링은 필요에 따라 추가하세요. */
  </style>
  