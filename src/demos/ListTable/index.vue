<!--
 * @Description:
 * @Version: 1.0
 * @Autor: hasaiki
 * @Date: 2021-12-07 10:07:24
 * @LastEditors: hasaiki
 * @LastEditTime: 2021-12-07 11:47:38
-->
<template>
  <div class="tables">
    <div class="list_box">
      <div class="search_box">
        <input type="text" v-model="searchVal" placeholder="请输入任务名">
        <div class="btn" @click="searchTables">搜索</div>
        <div class="btn" @click="addTable">添加</div>
      </div>
      <div class="table">
        <div class="item" v-for="item in tablesRef" :key="item.id">
            <div class="op">ID: {{item.id}}</div>
            <div class="op">任务: {{item.task}}</div>
            <div class="op">任务: {{item.status}}</div>
        </div>
      </div>
      <div class="select_box">
        <div class="select">still</div>
        <div class="select">loadding</div>
        <div class="select">completed</div>
      </div>
    </div>
  </div>
</template>

<script>
import toStore from './utils/toStore';
import tableControl from './utils/tableControl';

export default {
  setup() {
    return {
      ...toStore(),
      ...tableControl(),
    };
  },
};
</script>

<style lang="scss" scoped>
.tables{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 25%;

  .list_box{
    width: 500px;
    height: 340px;
    box-shadow: 0 0 10px #ddd;

    .search_box{
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;

      .btn{
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #aaa;
        box-shadow: 0 0 5px #aaa;
        cursor: pointer;
        margin-right: 10px;

        &:hover{
          color: #999;
          box-shadow: 0 0 5px rgb(143, 143, 143);
        }
      }

      input{
        width: 350px;
        height: 40px;
        outline: none;
        border: none;
        background: transparent;
        color: #000;

        &::placeholder{
          color: #aaa;
        }
      }
    }

    .table{
      width: 100%;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      padding: 5px;
      overflow-y: auto;

      .item{
        min-height: 40px;
        width: 95%;
        border: 1px solid #ddd;
        margin-bottom: 5px;
        display: flex;
        align-items: center;

        .op{
          flex: 1;
          text-align: center;
          color: #555;
        }
      }
    }

    .select_box{
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      .select{
        padding: 0 8px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #aaa;
        box-shadow: 0 0 5px #aaa;
        cursor: pointer;
        margin-right: 10px;

        &:hover{
          color: #999;
          box-shadow: 0 0 5px rgb(143, 143, 143);
        }
      }
    }
  }
}
</style>
