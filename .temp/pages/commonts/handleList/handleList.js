import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { View, PullDownRefresh } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './handleList.less';
let handleList = class handleList extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ''
    };
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {
    this.pullDownRefreshRef && this.pullDownRefreshRef.bindEvent();
  }
  componentDidHide() {
    this.pullDownRefreshRef && this.pullDownRefreshRef.unbindEvent();
  }
  //下拉时触发的函数
  onPullDownRefresh() {
    console.log('onPullDownRefresh...........');
    _showLoading({
      title: '刷新'
    });
    setTimeout(() => {
      // 接口请求完毕后隐藏两个loading , 标题和下拉区域
      _hideLoading();
      _stopPullDownRefresh();
    }, 1000);
  }
  render() {
    const _temp = <View className="index">
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
        <View>
          123123
        </View>
      </View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '操作列表'
  };
  onReachBottom = () => {
    _showLoading({
      title: '加载更多'
    });
    setTimeout(() => {
      _hideLoading();
      _stopPullDownRefresh();
    }, 1000);
  };
};
handleList = __decorate([inject('counterStore'), observer], handleList);
export default handleList;