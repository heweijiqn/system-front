<template>
  <div class="dashboard-container">
    <div class="dashboard-content">
      <div class="dashboard-section">
        <h2>角色管理</h2>
        <p>角色管理模块提供了对系统中角色的管理功能。您可以创建、编辑和删除角色，为角色分配权限，并在系统中进行角色的关联和控制。</p>
        <p class="permission-text">在拥有该权限即可操作</p>
      </div>
      <div class="dashboard-section">
        <h2>用户管理</h2>
        <p>用户管理模块用于管理系统中的用户。您可以添加新用户、编辑用户信息、重置用户密码等操作，同时可以为用户分配角色和权限。</p>
        <p class="permission-text">在拥有该权限即可操作</p>
      </div>
      <div class="dashboard-section">
        <h2>部门管理</h2>
        <p>部门管理模块用于管理组织中的部门信息。您可以创建、编辑和删除部门，设置部门的上级部门，以及管理部门的成员和权限。</p>
        <p class="permission-text">在拥有该权限即可操作</p>
      </div>
      <div class="dashboard-section">
        <h2>菜单管理</h2>
        <p>菜单管理模块提供了对系统菜单的管理功能。您可以创建、编辑和删除菜单项，设置菜单的显示顺序和权限控制，以及配置菜单与角色的关联。</p>
        <p class="permission-text">在拥有该权限即可操作</p>
      </div>
      <div class="dashboard-section">
        <h2>权限管理</h2>
        <p>权限管理模块用于管理系统中的权限。您可以创建、编辑和删除权限项，设置权限的名称、描述和所属模块，以便在系统中进行权限的分配和控制。</p>
        <p class="permission-text">在拥有该权限即可操作</p>
      </div>
      <div class="dashboard-section">
        <h2>岗位管理</h2>
        <p>岗位管理模块用于管理组织中的岗位信息。您可以创建、编辑和删除岗位，设置岗位的职责和权限，以及管理岗位与用户的关联。</p>
        <p class="permission-text">在拥有该权限即可操作</p>
      </div>
      <div class="dashboard-section">
        <h2>日志管理</h2>
        <p>日志管理模块用于记录和管理系统的操作日志。您可以查看用户的登录日志、操作日志等信息，以便进行系统监控和安全审计。</p>
        <p class="permission-text">在拥有该权限即可操作</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-title {
    font-size: 36px;
    margin-bottom: 20px;
    color: #FF0000;
  }

  &-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  &-section {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(255 0 0);
  }

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #FF0000;
  }

  p {
    font-size: 14px;
    color: #FF0000;
    margin-bottom: 5px;
  }

  .permission-text {
    font-size: 12px;
    color: #FF0000;
  }
}
</style>
