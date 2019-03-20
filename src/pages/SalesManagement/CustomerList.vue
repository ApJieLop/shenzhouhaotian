<template>
  <div class="CustomerList">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tsbs">
      <el-tab-pane label="我的客户" name="MyClient">
        <el-table :data="CustomerList.tableData">
          <el-table-column prop="SerialNumber" label="#" min-width="50" align="center">
            <template slot-scope="scope">{{ scope.$index + 1}}</template>
          </el-table-column>
          <el-table-column
            prop="TaxpayerIdentificationNumber"
            label="纳税人识别号"
            min-width="150"
            align="center"
          ></el-table-column>
          <el-table-column prop="ProductName" label="纳税人名称" min-width="100" align="center"></el-table-column>
          <el-table-column prop="MembershipType" label="会员类型" min-width="100" align="center"></el-table-column>
          <el-table-column prop="Contacts" label="联系人" min-width="100" align="center"></el-table-column>
          <el-table-column prop="PhoneNumber" label="手机号" min-width="100" align="center"></el-table-column>
          <el-table-column prop="WxNumber" label="微信号" min-width="120" align="center"></el-table-column>
          <el-table-column
            prop="RecentExpirationDate"
            sortable
            label="最近到期时间"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column prop="RenewalNumber" label="续费次数" min-width="80" align="center"></el-table-column>
          <el-table-column prop="CurrentSalesManager" label="当前销售经理" min-width="100" align="center"></el-table-column>
          <el-table-column label="操作" min-width="180" align="center">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">升级</el-button>
              <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">续费</el-button>
              <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pages">
          <el-pagination
            class="pagings"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="100"
            layout=" sizes, total, jumper,prev, pager, next  "
            :total="currentPage4"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="全部客户" name="AllClient"></el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  <script>
export default {
  name: "CustomerList",
  data() {
    return {
      activeName: "MyClient",
      // 产品信息
      CustomerList: {
        // 产品信息列表-table
        tableData: [
          {
            id: 1,
            SerialNumber: 1,
            TaxpayerIdentificationNumber: "AD22355",
            ProductName: "我可厉害了",
            MembershipType: "白金",
            Contacts: "习大大",
            PhoneNumber: "18332521721",
            WxNumber: "zhaojinfu3-l4552",
            RecentExpirationDate: "2019-5-23",
            RenewalNumber: 2,
            CurrentSalesManager: "赵金福"
          },
          {
            id: 2,
            SerialNumber: 2,
            TaxpayerIdentificationNumber: "AD223551",
            ProductName: "我可厉害了1",
            MembershipType: "白金1",
            Contacts: "习大大1",
            PhoneNumber: "18332521721",
            WxNumber: "zhaojinfu3-aaaa",
            RecentExpirationDate: "2020-6-23",
            RenewalNumber: 3,
            CurrentSalesManager: "赵金福1"
          }
        ]
      },
      currentPage4: 520,
      TfAndTotal: {
        transactionsFrequency: 5634,
        Total: 4368
      }
    };
  },
  methods: {
    // 点击tap选项卡
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 升级
    handleDelete(index, row) {
      console.log(row.id);
    },
    // 续费
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      console.log(val);
    },
    // 详情
    handleCurrentChange(val) {
      this.showHide = !this.showHide;
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    
  }
};
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 1350px) {
  .CustomerList .tsbs {
    width: 96% !important;
  }
}
.CustomerList {
  background: #efefef;
  min-height: 830px;
  overflow: hidden;
  padding-top: 20px;
  position: relative;
}
.CustomerList .tsbs {
  width: 90%;
  margin: auto;
}
.CustomerList /deep/ .el-tabs__nav-scroll {
  padding-left: 20px;
  background: #fff;
}
.CustomerList /deep/ .el-tabs__content {
  min-height: 760px;
}
/* 产品信息 */
.CustomerList /deep/ .el-table td,
.CustomerList /deep/ .el-table th {
  padding: 5px 0;
}
.CustomerList /deep/ .el-button + .el-button {
  margin-left: 0;
}
.CustomerList /deep/ .el-button--mini,
.CustomerList /deep/ .el-button--mini.is-round {
  padding: 5px 10px;
}
.CustomerList /deep/ .el-table--fit {
  padding-bottom: 10px;
}
.CustomerList .pages {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
}
</style>
  