import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtActionSheet, AtActionSheetItem, AtIcon, AtSearchBar } from 'taro-ui';
import './billNotes.less';
let BillNotes = class BillNotes extends Taro.Component {
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
    return <View className="billNotes_content">
               <View className={'search_box'} onClick={() => {
        this.onSearch();
      }}>
                   <Text>所有记录</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
               </View>
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
                <AtActionSheet isOpened={this.state.show} cancelText="取消" title="选择交易记录" onCancel={this.handleCancel} onClose={this.handleClose}>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        所有记录
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        充值记录
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        消费记录
                    </AtActionSheetItem>
                </AtActionSheet>
            </View>;
  }
  config = {
    navigationBarTitleText: '账单记录'
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
BillNotes = __decorate([inject('counterStore'), observer], BillNotes);
export default BillNotes;