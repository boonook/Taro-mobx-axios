import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './invoicedList.less';
import { AtSearchBar } from "taro-ui";
let InvoicedList = class InvoicedList extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    return <View className="invoiceManage_content">
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '已开发票'
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
InvoicedList = __decorate([inject('counterStore'), observer], InvoicedList);
export default InvoicedList;