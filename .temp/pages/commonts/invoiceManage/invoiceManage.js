import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './invoiceManage.less';
import { AtListItem } from "taro-ui";
let InvoiceManage = class InvoiceManage extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  render() {
    return <View className="invoiceManage_content">
               <View className={'content_item'}>
                   <View className={'content_item_left'}>
                        <Text>消费总额：</Text>¥0.0
                   </View>
                   <View className={'content_item_right'}>
                       <Text>可开发票：</Text>¥0.0
                   </View>
               </View>
               <View>
                   <AtListItem title="已开发票：¥0.0" onClick={() => {
          this.GoInvoicedListPage();
        }} arrow="right" />
               </View>
                <View>
                    <AtListItem title="新开发票" onClick={() => {
          this.GoAddInvoicePage();
        }} arrow="right" />
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '发票管理'
  };
  GoInvoicedListPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/invoicedList/invoicedList'
    });
  };
  GoAddInvoicePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/addInvoice/addInvoice'
    });
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

};
InvoiceManage = __decorate([inject('counterStore'), observer], InvoiceManage);
export default InvoiceManage;