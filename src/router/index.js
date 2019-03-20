import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
Vue.use(Router)

// 产品管理-引入模块-(懒加载)
const productManagement = resolve => require(['@/pages/productManagements/productManagement'], resolve)
const OriginalManagement = resolve => require(['@/pages/productManagements/OriginalManagement'], resolve)
const ProductPlanning = resolve => require(['@/pages/productManagements/ProductPlanning'], resolve)
const ProductMaintenance = resolve => require(['@/pages/productManagements/ProductMaintenance'], resolve)
const PromotionManagement = resolve => require(['@/pages/productManagements/PromotionManagement'], resolve)
const InvoiceCommodityCodingCnformation = resolve => require(['@/pages/productManagements/InvoiceCommodityCodingCnformation'], resolve)
// 产品管理-引入模块-(懒加载)
const CustomerManagement = resolve => require(['@/pages/customerManagement/customerManagement'], resolve)
// 销售管理-引入模块-(懒加载)
const SalesManagement = resolve => require(['@/pages/SalesManagement/SalesManagement'], resolve)
const CustomerList = resolve => require(['@/pages/SalesManagement/CustomerList'], resolve)
const SalesSystemQuery = resolve => require(['@/pages/SalesManagement/SalesSystemQuery'], resolve)
const ControlOverInvoices = resolve => require(['@/pages/SalesManagement/ControlOverInvoices'], resolve)

const router = new Router({
  mode: 'history',
  // linkActiveClass: "active",
  routes: [
    // 根路由页
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页',
      },  
      redirect: to => {
        return 'productManagement'
      },    
      children: [  
        // 产品管理     
        {
          path: 'productManagement',
          name: 'productManagement',
          component:productManagement,
          meta: {
            title: '产品管理',
          },
          redirect: to => {
            return '/productManagement/OriginalManagement'
          },
          children: [
            // 产品管理-原件管理
            {
              path: 'OriginalManagement',
              name: 'OriginalManagement',
              component:OriginalManagement,
              meta: {
                title: '产品管理-原件管理',
              }
            },  
            // 产品管理-产品规划
            {
              path: 'ProductPlanning',
              name: 'ProductPlanning',
              component: ProductPlanning,
              meta: {
                title: '产品管理-产品规划',
              }
            },  
            // 产品管理-产品维护
            {
              path: 'ProductMaintenance',
              name: 'ProductMaintenance',
              component:ProductMaintenance,
              meta: {
                title: '产品管理-产品维护',
              }
            }, 
            // 产品管理-促销品管理
            {
              path: 'PromotionManagement',
              name: 'PromotionManagement',
              component:PromotionManagement,
              meta: {
                title: '产品管理-促销品管理',
              }
            }, 
            // 产品管理-开票商品编码信息
            {
              path: 'InvoiceCommodityCodingCnformation',
              name: 'InvoiceCommodityCodingCnformation',
              component:InvoiceCommodityCodingCnformation,
              meta: {
                title: '产品管理-开票商品编码信息',
              }
            }            
          ]
        },
        // 客户管理
        {
          path: '/customerManagement',
          name: 'customerManagement',
          component: CustomerManagement,
          meta: {
            title: '客户管理',
          }
        },
        // 销售管理
        {
          path: '/SalesManagement',
          name: 'SalesManagement',
          component: SalesManagement,
          meta: {
            title: '客户列表',
          },
          redirect: to => {
            return '/SalesManagement/CustomerList'
          },
          children: [
            // 销售管理-客户列表 
            {
              path: 'CustomerList',
              name: 'CustomerList',
              component:CustomerList,
              meta: {
                title: '销售管理-客户列表',
              }
            },
            // 销售管理-销售系统查询 
            {
              path: 'SalesSystemQuery',
              name: 'SalesSystemQuery',
              component:SalesSystemQuery,
              meta: {
                title: '销售管理-销售系统查询',
              }
            },
            // 销售管理-发票管理
            {
              path: 'ControlOverInvoices',
              name: 'ControlOverInvoices',
              component:ControlOverInvoices,
              meta: {
                title: '销售管理-发票管理',
              }
            }                    
          ]
        },
        // 积分管理
        {
          path: '/IntegralManagement',
          name: 'IntegralManagement',
          component: resolve => require(['@/pages/IntegralManagement/IntegralManagement'], resolve),
          meta: {
            title: '积分管理',
          }
        },
        // 资源管理
        {
          path: '/resourceManagement',
          name: 'resourceManagement',
          component: resolve => require(['@/pages/resourceManagement/resourceManagement'], resolve),
          meta: {
            title: '资源管理',
          }
        },
        // 其他
        {
          path: '/Other',
          name: 'Other',
          component: resolve => require(['@/pages/Other/Other'], resolve),
          meta: {
            title: '其他',
          }
        }
      ]   
    },
    // 登录页面
    {
      path: '/SignIn',
      name: 'SignIn',
      component: require('@/pages/SignIn'),
      meta: {
        title: '登录',
      }
    },
    // 错误页面
    {
      path: '*',
      name: 'Error',
      component: require('@/pages/_404'),
      meta: {
        title: '404',
      }
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    if (to.meta.title === '首页') {
      document.title = '神州浩天-' + to.meta.title
    } else {
      document.title = to.meta.title + "-神州浩天"
    }
    next()
  }
})

export default router