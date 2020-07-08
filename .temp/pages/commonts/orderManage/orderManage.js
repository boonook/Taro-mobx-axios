import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtActionSheet, AtActionSheetItem, AtIcon, AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui';
import './orderManage.less';
let OrderManage = class OrderManage extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      current: 0,
      show: false,
      value: ''
    };
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    const tabList = [{ title: '全部' }, { title: '待付款' }, { title: '已付款' }];
    return <View className="orderManage_content">
                <View className={'search_box'}>
                    
                    
                    
                    <View className={'search_box_center'} onClick={() => {
          this.onSearch();
        }}>
                        <Text>增值订单</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                    
                    
                    
                </View>
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
                <View>
                    <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                        <AtTabsPane current={this.state.current} index={0}>
                            <View style="height:100%;">
                                <View className={'list_footer'}>
                                    暂无更多数据
                                </View>
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={1}>
                            <View style="height:100%;">
                                <View className={'list_footer'}>
                                    暂无更多数据
                                </View>
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={2}>
                            <View style="height:100%;">
                                <View className={'list_footer'}>
                                    暂无更多数据
                                </View>
                            </View>
                        </AtTabsPane>
                    </AtTabs>
                </View>
                <AtActionSheet isOpened={this.state.show} cancelText="取消" title="订单分类" onCancel={this.handleCancel} onClose={this.handleClose}>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        增值订单
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        流量卡订单
                    </AtActionSheetItem>
                </AtActionSheet>
            </View>;
  }
  config = {
    navigationBarTitleText: '订单管理'
  };
  onSearch = () => {
    this.setState({
      show: true
    });
  };
  onHandleSure = () => {
    this.setState({
      show: false
    });
  };
  handleCancel = () => {
    this.setState({
      show: false
    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };
  handleClick = value => {
    this.setState({
      current: value
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
OrderManage = __decorate([inject('counterStore'), observer], OrderManage);
export default OrderManage;