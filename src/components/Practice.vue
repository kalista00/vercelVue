<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>


<template>
    <div>
      <h1>게시판 제목 목록</h1>
      <ul>
        <li v-for="board in boards" :key="board.id">
          {{ board.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boards: [] // 게시판 제목들을 저장할 배열
      };
    },
    
    mounted() {
      this.fetchBoards(); // 컴포넌트가 마운트될 때 게시판 제목들을 가져옵니다.
    },
  
    methods: {
      fetchBoards() { // 서버에서 게시판 제목들을 가져오는 메소드
        // 실제로는 Ajax 요청 등으로 서버와 통신해야 합니다.
        
        const response = [
          { id: 1, title: "게시글 1" },
          { id: 2, title: "게시글 2" },
          { id: 3, title: "게시글 3" }
        ];
        
        this.boards = response; // 받아온 데이터로 boards 배열 업데이트
      }
      
     /*
     실제 애플리케이션에서는 이벤트 처리나 CRUD(Create, Read, Update, Delete) 기능 등 다양한 로직이 추가되어야 합니다.
     위의 예제는 간략하게 Vue 컴포��트 내부에서 초기 데이터를 가져오는 예시입니다.
     */
    }
  };
  </script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

