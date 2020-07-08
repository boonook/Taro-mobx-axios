import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { View, Text, PullDownRefresh } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './dataDownload.less';
import { AtIcon, AtSearchBar } from "taro-ui";
let DataDownload = class DataDownload extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
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
  onChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    const _temp = <View className="dataDownload_content">
                <View className={'search_box'}>
                    <View className={'search_box_left'}>
                        
                    </View>
                    <View className={'search_box_center'}>
                        <Text>所有数据下载</Text>
                    </View>
                    <View className={'search_box_right'} onClick={this.GoAddDataDownloadPage}>
                        <AtIcon value="add" size="20" color="#426ff1"></AtIcon>
                    </View>
                </View>
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
                <View className={'list_item_box'}>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            ceshi
                        </View>
                        <View className={'list_item_center'}>
                            开始时间：2020-03-12 23:26:00
                        </View>
                        <View className={'list_item_footer'}>
                            结束时间：2020-03-16 23:26:00
                        </View>
                        <View className={'list_item_time'}>
                            可下载(请前往tlink平台下载)
                        </View>
                    </View>
                </View>
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
            </View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '数据下载'
  };
  GoAddDataDownloadPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/addDataDownload/addDataDownload'
    });
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

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
    this.pullDownRefreshRef && this.pullDownRefreshRef.bindEvent();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this.pullDownRefreshRef && this.pullDownRefreshRef.unbindEvent();
  }

};
DataDownload = __decorate([inject('counterStore'), observer], DataDownload);
export default DataDownload;