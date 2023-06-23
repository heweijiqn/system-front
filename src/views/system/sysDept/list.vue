<template>
  <div class="app-container">
    <!-- 工具条 -->
    <div class="tools-div">
      <el-button type="success" icon="el-icon-plus" size="mini" @click="add()">添加部门</el-button>
    </div>
    
    <el-table
      :data="deptList"
      style="width: 100%;margin-bottom: 20px;margin-top: 10px;"
      row-key="id"
      border
      :default-expand-all="false"
      :tree-props="{ children: 'children' }">

      <el-table-column prop="name" label="部门名称" width="160"/>
      <el-table-column prop="leader" label="负责人" width="120"/>
      <el-table-column prop="phone" label="电话" width="120"/>
      <el-table-column prop="status" label="状态" width="80">
        <template slot-scope="scope">
           <el-switch
           v-model="scope.row.status === 1"
            @change="switchStatus(scope.row)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="160"/>
      <el-table-column label="操作" width="180" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-plus" size="mini" @click="addDept(scope.row)" title="添加下属部门"></el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)" title="修改"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeDataById(scope.row.id)" title="删除" :disabled="scope.row.children.length > 0"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="40%">
      <el-form ref="dataForm" :model="dept" label-width="150px" size="small" style="padding-right: 40px;">
        <el-form-item label="上级部门" v-if="dept.id === ''">
          <el-input v-model="dept.parentName" disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="dept.name"></el-input>
        </el-form-item>
        <el-form-item label="负责人" prop="leader">
          <el-input v-model="dept.leader"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="dept.phone"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="dept.status">
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="0">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small" icon="el-icon-refresh-right">取消</el-button>
        <el-button type="primary" icon="el-icon-check" @click="saveOrUpdate()" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/api/system/sysDept'
const defaultForm = {
  id: '',
  parentId: '',
  parentName: '',
  name: '',
  leader: '',
  phone: '',
  status: 1
}
export default {
  // 定义数据
  data() {
    return {
      deptList: [],
      dialogTitle: '',
      dialogVisible: false,
      dept: Object.assign({}, defaultForm),
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        leader: [
          { required: true, message: '请输入负责人', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为 11 个字符', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ]
      }
    }
  },

  // 页面加载时获取数据
  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      api.findDept().then(response => {
        this.deptList = response.data;
      }).catch(error => {
        console.error('获取部门列表失败:', error);
      });
    },
    add() {
      this.dialogTitle = '添加部门';
      this.dialogVisible = true;
      this.dept = Object.assign({}, defaultForm);
  },
    addDept(row) {
      this.dialogTitle = '添加下属部门';
      this.dialogVisible = true;
      this.dept = Object.assign({}, defaultForm);
      this.dept.parentId = row.id;
      this.dept.parentName = row.name;

    },
    edit(row) {
      this.dialogTitle = '修改部门';
      this.dialogVisible = true;
      this.dept = Object.assign({}, row);
    },
    removeDataById(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // Promise
        // 点击确定，远程调用ajax
        return api.removeById(id)
      }).then((response) => {
        this.fetchData()
        this.$message({
          type: 'success',
          message: response.message
        })
      }).catch(() => {
        this.$message.info('取消删除')
      })
    },
     switchStatus(row) {
      const originalStatus = row.status; // 保存原始状态
      row.status = row.status === 1 ? 0 : 1;
      api.updateStatus(row.id, row.status)
        .then(response => {
          if (response.code) {
            this.$message.success(response.message || '操作成功');
            this.fetchData();
          } else {
            // 更新失败，恢复原始状态
            row.status = originalStatus;
          }
        })
        .catch(error => {
          console.error('修改部门状态失败:', error);
          // 更新失败，恢复原始状态
          row.status = originalStatus;
        });
      },
    saveOrUpdate() {
      const form = this.$refs.dataForm;
      form.validate(valid => {
        if (valid) {
          if (this.dept.id) {
            api.updateById(this.dept).then(response => {
              this.$message.success(response.message || '操作成功')
              this.dialogVisible = false;
              this.fetchData();
            }).catch(error => {
              console.error('更新部门失败:', error);
            });
          } else {
            api.save(this.dept).then(response => {
              this.$message.success(response.message || '操作成功')
              
              this.dialogVisible = false;
              this.fetchData();
            }).catch(error => {
              console.error('添加部门失败:', error);
            });
          }
        }
      });
    }
  }
}
</script>
