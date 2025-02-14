<template>
    <div class="app-container">
        <header class="header">
            <div class="menu-button">☰</div>
            <img
                src="../assets/logo.png"
                class="logo"
                alt="BR7"
            >
            <div class="header-buttons">
                <button class="login-btn">进入</button>
                <button class="register-btn">注册</button>
            </div>
        </header>

        <!-- 快捷操作项 -->
        <div class="quick-actions">
            <div class="action-item" v-for="(item, index) in quickActions" :key="index">
                <img
                    :src="item.icon"
                    :alt="item.title"
                >
                <span>{{ item.title }}</span>
            </div>
        </div>

        <!-- 轮播图组件 -->
        <carousel-component />

        <div class="list-section">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>标题1</th>
                        <th>标题2</th>
                        <th>状态</th>
                        <th>标题3</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.title }}</td>
                        <td>
                            <span :class="['status', item.status]">
                                {{ item.statusText }}
                            </span>
                        </td>
                        <td>{{ item.title }}</td>
                        <td>
                            <button class="action-btn" @click="handleAction(item)">
                                查看
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <nav class="bottom-nav">
            <div class="nav-item" v-for="(item, index) in navItems" :key="index">
                <img
                    :src="item.icon"
                    :alt="item.title"
                >
                <span>{{ item.title }}</span>
            </div>
        </nav>
    </div>
</template>

<script>
import CarouselComponent from './components/CarouselComponent.vue'

export default {
    name: 'App',
    components: {
        CarouselComponent
    },
    data() {
        return {
            quickActions: [
                { title: 'VIP', icon: '../assets/icons/vip.png' },
                { title: '快捷菜单', icon: '../assets/icons/vip.png' }
            ],
            navItems: [
                { title: '首页', icon: '../assets/icons/vip.png' },
                { title: 'VIP', icon: '../assets/icons/vip.png' },
                { title: '快捷菜单', icon: '../assets/icons/vip.png' },
                { title: '首页', icon: '../assets/icons/vip.png' },
                { title: 'VIP', icon: '../assets/icons/vip.png' },
                { title: '快捷菜单', icon: '../assets/icons/vip.png' },
                { title: '首页', icon: '../assets/icons/vip.png' },
                { title: 'VIP', icon: '../assets/icons/vip.png' },
                { title: '快捷菜单', icon: '../assets/icons/vip.png' },
            ],
            tableData: [
                { 
                    title: '测试数据1',
                    status: 'active',
                    statusText: '活跃'
                },
                { 
                    title: '测试数据2',
                    status: 'inactive',
                    statusText: '待处理'
                },
                { 
                    title: '测试数据3',
                    status: 'completed',
                    statusText: '已完成'
                },
            ]
        }
    },
    methods: {
        handleAction(item) {
            alert(`处理项目: ${item.title}`);
        }
    }
}
</script>

<style scoped>
.list-section {
    padding: 10px;
    margin-bottom: 60px; /* 为底部导航留出空间 */
    overflow-x: auto; /* 在小屏幕上支持横向滚动 */
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff08;
    border-radius: 8px;
    overflow: hidden;
    font-size: 14px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.data-table th,
.data-table td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid #ffffff15;
}

.data-table th {
    background-color: #ffffff10;
    font-weight: bold;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #e0e0e0;
}

.data-table td {
    color: #f5f5f5;
}

.data-table tr:hover {
    background-color: #ffffff12;
    transition: background-color 0.2s ease;
}

.status {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 11px;
    display: inline-block;
    min-width: 60px;
    text-align: center;
    font-weight: 500;
}

.status.active {
    background-color: rgba(76, 175, 80, 0.9);
    color: #e8f5e9;
}

.status.inactive {
    background-color: rgba(255, 193, 7, 0.9);
    color: #212121;
}

.status.completed {
    background-color: rgba(33, 150, 243, 0.9);
    color: #e3f2fd;
}

.action-btn {
    padding: 4px 10px;
    border: none;
    border-radius: 4px;
    background-color: rgba(0, 102, 34, 0.85);
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 12px;
    min-width: 50px;
    text-align: center;
}

.action-btn:hover {
    background-color: rgba(0, 136, 40, 0.95);
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* 添加表格行交替颜色 */
.data-table tbody tr:nth-child(even) {
    background-color: #ffffff05;
}

/* 最后一行去掉底部边框 */
.data-table tr:last-child td {
    border-bottom: none;
}

/* 表格列宽度调整 */
.data-table th:first-child,
.data-table td:first-child {
    width: 60px;
    text-align: center;
}

.data-table th:nth-child(2),
.data-table td:nth-child(2) {
    width: auto;
    min-width: 150px;
}

.data-table th:nth-child(3),
.data-table td:nth-child(3) {
    width: 100px;
    text-align: center;
}

.data-table th:last-child,
.data-table td:last-child {
    width: 80px;
    text-align: center;
}
</style> 