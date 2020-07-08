import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { Image, View, PullDownRefresh } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './application.less';
import { AtIcon, AtSearchBar } from "taro-ui";
let Application = class Application extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
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
  onChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    const _temp = <View className="application_content">
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
                <View className={'list_item_box'}>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage" src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value="list" size="20" color="#666"></AtIcon>
                            </View>
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
    navigationBarTitleText: '应用'
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
Application = __decorate([inject('counterStore'), observer], Application);
export default Application;