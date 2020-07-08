import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { Image, View, PullDownRefresh } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtAccordion, AtList, AtIcon, AtSwitch, AtSearchBar } from 'taro-ui';
import './monitoringCenter.less';
let MonitoringCenter = class MonitoringCenter extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: false,
      show: false,
      open: false,
      open2: false,
      value2: ''
    };
    /**
     * 页面上拉触底事件的处理函数
     */
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
  handleClick(value) {
    this.setState({
      open: value
    });
  }
  onChange(value) {
    this.setState({
      value2: value
    });
  }
  render() {
    const _temp = <View className="monitoringCenter_content">
                <View>
                    <AtSearchBar value={this.state.value2} onChange={this.onChange.bind(this)} />
                </View>
                <View className={'list_box'}>
                    <AtAccordion open={this.state.open} onClick={this.handleClick.bind(this)} title="分类一">
                        <AtList hasBorder={false}>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq1
                                </View>
                                <View>
                                    <AtSwitch checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value="chevron-right" size="20" color="#666"></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq2
                                </View>
                                <View>
                                    <AtIcon value="chevron-right" size="20" color="#666"></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq3
                                </View>
                                <View>
                                    <AtSwitch checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value="chevron-right" size="20" color="#666"></AtIcon>
                                </View>
                            </View>
                        </AtList>
                    </AtAccordion>
                    <AtAccordion open={this.state.open2} onClick={this.handleClick2.bind(this)} title="分类二">
                        <AtList hasBorder={false}>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq1
                                </View>
                                <View>
                                    <AtSwitch border={false} checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value="chevron-right" size="20" color="#666"></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq2
                                </View>
                                <View>
                                    <AtIcon value="chevron-right" size="20" color="#666"></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq3
                                </View>
                                <View>
                                    <AtSwitch border={false} checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value="chevron-right" size="20" color="#666"></AtIcon>
                                </View>
                            </View>
                        </AtList>
                    </AtAccordion>
                    <View className={'list_footer'}>
                        暂无更多数据
                    </View>
                </View>
            </View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '监控中心'
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
  handleClick2 = value => {
    this.setState({
      open2: value
    });
  };
  handleChange = value => {
    this.setState({ value });
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
MonitoringCenter = __decorate([inject('counterStore'), observer], MonitoringCenter);
export default MonitoringCenter;