import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './timedTaskDetail.less';
let TimedTaskDetail = class TimedTaskDetail extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false,
      delShow: false
    };
  }
  render() {
    return <View className="timedTaskDetail_content">
                <View className={'list_item'}>
                    <View className={'list_item_left'}>
                        设备
                    </View>
                    <View className={'list_item_right'}>
                        ceshi2
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'list_item_left'}>
                        传感器
                    </View>
                    <View className={'list_item_right'}>
                        ceshi-2备
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'list_item_left'}>
                        链接协议:
                    </View>
                    <View className={'list_item_right'}>
                        mqtt
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'list_item_left'}>
                        是否转发
                    </View>
                    <View className={'list_item_right'}>
                        否
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'list_item_left'}>
                        发送数据
                    </View>
                    <View className={'list_item_right'}>
                        ceshi-----
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'list_item_left'}>
                        发送日期
                    </View>
                    <View className={'list_item_right'}>
                        星期日 6时 5分 30秒
                    </View>
                </View>
                <View className={'list_item'}>
                    <View className={'list_item_left'}>
                        发送方式
                    </View>
                    <View className={'list_item_right'}>
                        执行一次
                    </View>
                </View>
            </View>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '定时任务详情'
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
TimedTaskDetail = __decorate([inject('counterStore'), observer], TimedTaskDetail);
export default TimedTaskDetail;