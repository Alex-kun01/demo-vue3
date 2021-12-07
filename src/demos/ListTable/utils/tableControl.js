import { ref } from 'vue';
// eslint-disable-next-line import/named
import toStore from './toStore';

function getTaskId() {
  return Date.now().toString().substring(0, 4) + Math.random().toString(16).substring(3, 5);
}

export default function tableControl() {
  const searchVal = ref('');
  const data = localStorage.getItem('tableList');
  const tablesRef = ref(data ? JSON.parse(data) : []);
  // 添加列表
  const addTable = () => {
    if (!searchVal.value) return;
    const item = {
      id: getTaskId(),
      task: searchVal.value,
      status: '未完成',
    };
    tablesRef.value.push(item);
    toStore().addStore(item);
    searchVal.value = '';
  };
  // 筛选列表
  const searchTables = () => {
    const datas = localStorage.getItem('tableList');
    tablesRef.value = JSON.parse(datas).filter((item) => item.task.includes(searchVal.value));
    searchVal.value = '';
  };

  return {
    searchVal, addTable, tablesRef, searchTables,
  };
}
