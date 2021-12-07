/*
 * @Description:
 * @Version: 1.0
 * @Autor: hasaiki
 * @Date: 2021-12-07 10:36:11
 * @LastEditors: hasaiki
 * @LastEditTime: 2021-12-07 11:32:50
 */

import { onMounted } from 'vue';

const STORE_KEY = 'tableList';

export default function toStore() {
  // 查询数据
  const searchtore = () => {
    const value = localStorage.getItem(STORE_KEY);
    return value ? JSON.parse(value) : [];
  };

  // 添加数据
  const addStore = (data) => {
    const nowData = searchtore();
    nowData.push(data);
    localStorage.setItem(STORE_KEY, JSON.stringify(nowData));
  };

  onMounted(() => {
    const value = searchtore();
    if (!value) localStorage.setItem(STORE_KEY, JSON.stringify([]));
    else localStorage.setItem(STORE_KEY, JSON.stringify(value));
  });

  return {
    addStore,
    searchtore,
  };
}
